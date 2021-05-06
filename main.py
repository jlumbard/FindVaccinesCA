from flask import Flask, Response, request
import pandas as pd
# from twilio import twiml
from twilio.twiml.messaging_response import MessagingResponse, Message
import MongoPush
import GcloudGeocoding
import LocationUtilities
import datetime

app = Flask(__name__)

@app.route('/testGeo')
def testGeo():
    res = GcloudGeocoding.getAddressInfoRaw('5305 Green Bluebell Rd E Regina, Saskatchewan S4V3M7')
    return res
@app.route('/testGeo2')
def testGeo2():
    res = GcloudGeocoding.getAddressInfoRaw('S7K6P8')

    atLeastOneSK = False
    for component in res['results'][0]['address_components']:
        if(component['long_name'] == 'Saskatchewan'):
            atLeastOneSK = True
    if(not atLeastOneSK):
        return "Not in SK"
    return res

@app.route("/")
def check_app():
    # returns a simple string stating the app is working
    return Response("It works!"), 200

@app.route("/twilio", methods=['GET', 'POST'])
def incoming_sms():
    """Send a dynamic reply to an incoming text message"""
    # Get the message the user sent our Twilio number
    body = request.values.get('Body', None)

    if(body != None):
        MongoPush.dumpMessageInfo({'body':body,'timeSent':datetime.datetime.now(),'from':request.values.get('From', None)})

    # Start our TwiML response
    resp = MessagingResponse()

    # Determine the right reply for this message
    if body.lower().replace('!','').strip() in ['hello', 'hi',"hey","hello", 'yo','help']:
        resp.message("Hi! Send me your Postal Code, and I'll send you the nearest vaccine appointment in Saskatchewan!")

    elif body.lower().replace('!','').strip() in ['goodbye','bye','thank you','thanks']:
        resp.message("Goodbye! Stay Safe!")

    elif body.lower().strip() in ['eligibility','eligible','elig','eligability', 'Eligibilities'] :
        resp.message("Anyone 35 and over is eligible, along with groups outlined here: http://bit.ly/saskvaxel. Always double check your eligibility with health authorities.")
    elif body.lower().strip() in ['test', 'help']:
        resp.message("You can send me your postal code and I'll help you find a vaccine appointment, or 'Eligibility' and I'll send you availability info. Made by Brock Lumbard, lumbard.ca")

    elif LocationUtilities.isCanadianAddress(body):
        #if it has a postal code in it!

        #Get SK Locations
        joinedDF = MongoPush.mergeLatLong('SK')
        joinedDF.lat = joinedDF.lat.astype(float)
        joinedDF.lon = joinedDF.lon.astype(float)

        #Limit the Null values (to be fixed later)
        LLNoNulls = joinedDF.loc[(joinedDF['lat'] != -1.1) & (joinedDF['lon'] != -1.1)]

        #update body 
        updatedBody = body.strip()
        if(len(updatedBody) == 7):
            updatedBody = updatedBody.replace(' ','')

        #Get the LatLong of the users' postal Code
        print("updated Body:")
        print(updatedBody)

        LL = GcloudGeocoding.getAddressInfo(updatedBody)
        if(LL == False):
            resp.message("That info either isn't from Sask, or I can't understand it. Send just a postal code, and if that doesn't work, try your full address!")

            return str(resp)

        print({'lat':LL[0],'lon':LL[1]})
        print(LLNoNulls)
        LLNoNulls = LLNoNulls.drop_duplicates(subset=['type', 'address','lat','lon'])
        closestAddr = LocationUtilities.find_closest_lat_lon(LLNoNulls, {'lat':LL[0],'lon':LL[1]})

        print(closestAddr)

        sortClosest = closestAddr.sort_values(by="distance").reset_index(drop=True)

        print(sortClosest)
        print(sortClosest.loc[0])

        sortClosest.loc[pd.isnull(sortClosest.name),'name'] = sortClosest.address

        # sortClosest.to_csv('closePlaces.csv')

        formattedString = formatMessage(sortClosest)
        resp.message(formattedString)
    
    else:
        resp.message("I couldn't understand your message. Send me your address and I'll send you a vaccine appointment. Be Sure to include your Postal Code!")

    return str(resp)

def formatMessage(dfOfCloseAppts):

    translationDict = {"walkIn":" walk-in clinic", "driveThru":" drive-thru", 'govtClinic':" clinic", 'pharmacy':" pharmacy"}

    # closestMaybeAvailable = dfOfCloseAppts.loc[0]

    closestAvailable = dfOfCloseAppts.loc[dfOfCloseAppts.available == True].copy().reset_index(drop=True)
    closestAvailableWalkDrive = dfOfCloseAppts.loc[(dfOfCloseAppts.type == 'driveThru') | (dfOfCloseAppts.type == 'walkIn')].copy().reset_index(drop=True)
    closestAvailablePharmacy = dfOfCloseAppts.loc[(dfOfCloseAppts.type == 'pharmacy')].copy().reset_index(drop=True)
    closestAvailableClinic = dfOfCloseAppts.loc[(dfOfCloseAppts.type == 'govtClinic')].copy().reset_index(drop=True)

    #assemble a dataframe full of the closest alternatives
    closestOneOfEach = pd.DataFrame()
    for frame in [closestAvailableWalkDrive,closestAvailablePharmacy,closestAvailableClinic]:
        if(len(frame)>0):
            closestOneOfEach = closestOneOfEach.append(frame.loc[0])
    print('closest one of each')
    print(closestOneOfEach)
    
    closestApt = closestAvailable.loc[0]

    baseString = " \n\nI found you a location "
    #Build initial essential string: the nearest available appointment.
    baseString = baseString + "at a"+ translationDict[closestApt['type']]+" " + str(closestApt['distance']) + " km away, at "+ str(closestApt['name']) + ", " + str(closestApt['address']).strip() + "."
    formattedTime = ""
    if(type(closestApt['availability']) == datetime.datetime):
        formattedTime = closestApt['availability'].strftime("%m/%d, %H:%M")
    else:
        formattedTime = closestApt['availability']
    if(closestApt['type'] == 'govtClinic'):
        baseString = baseString + " Next available at " + str(formattedTime)
    elif((closestApt['type'] == 'driveThru' or closestApt['type'] == 'walkIn')):
        baseString = baseString + " The wait time is at " + formattedTime +"."


    if(pd.notna(closestApt['website']) and pd.notna(closestApt['phone'])):
        baseString = baseString + " \n\nBook at "+ str(closestApt['website']) + " or by calling " + str(closestApt['phone'])
    elif(pd.notna(closestApt['website']) and (closestApt['type'] == 'walkIn' or closestApt['type'] == 'driveThru')):
        baseString = baseString + " \n\nFind more info at "+ str(closestApt['website'])
    elif(pd.notna(closestApt['website'])):
        baseString = baseString + " \n\nBook by visiting "+ str(closestApt['website'])
    elif(pd.notna(closestApt['phone'])):
        baseString = baseString + " \n\nBook by calling " + str(closestApt['phone'])
    else:
        baseString = baseString + " \n\nContact this location directly. "
        

    #loop through the close alternatives to see if any should be added just as an FYI
    if(len(closestOneOfEach) > 0):
        closestOneOfEach = closestOneOfEach.sort_values(by="distance").reset_index(drop=True)
        closestOneOfEach = closestOneOfEach.loc[closestOneOfEach['name'] != closestApt['name']].reset_index(drop=True)
        baseString = baseString + " \n\nThere is "
        for i,row in closestOneOfEach.iterrows():
            print(i)
            if(closestOneOfEach.at[i,'distance'] < closestApt['distance']):
                baseString = baseString + " a closer"
            else:
                baseString = baseString + " a"
            
            #This happens for all of them, add where the clinic is
            typeInfoDict = {"walkIn":"", "driveThru":"", 'govtClinic':" (Booking required)", 'pharmacy':" (Contact directly)"}
            print(closestOneOfEach.loc[i])
            baseString = baseString + translationDict[closestOneOfEach.at[i,'type']] + " at " + closestOneOfEach.at[i,'name'] + " " + str(closestOneOfEach.at[i,'distance']) +"km away"+typeInfoDict[closestOneOfEach.at[i,'type']]
            
            if(closestOneOfEach.at[i,'available'] == False and closestOneOfEach.at[i,'type'] != 'pharmacy'):
                baseString = baseString + " that is currently unavailable"
            if(i<(len(closestOneOfEach)-2)):
                baseString = baseString+ ","
            elif(i<len(closestOneOfEach)-1):
                baseString = baseString+ " and"
            else:
                baseString = baseString+ "."

        baseString = baseString + ' Text "Eligibility" for criteria.'

    return baseString

if __name__ == "__main__":
    app.run(debug=True)