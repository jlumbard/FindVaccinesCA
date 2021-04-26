import Scripts.BC.BCBlueCrossPharmacies as BCBlueCrossPharmacies
import Scripts.AB.ABClinics as ABClinics
import Scripts.MB.MBClinicsV2 as MBClinicsV2
import Scripts.MB.MBSuperSitesPopups as MBSuperSitesPopups
import Scripts.ON.ONClinicsV2 as ONClinicsV2
import Scripts.QC.QCLocationsScrape as QCLocationsScrape
import Scripts.SK.SKAppointments as SKAppointments
import Scripts.SK.SKWaitTimesDrive as SKWaitTimesDrive
import Scripts.SK.SKWaitTimesWalk as SKWaitTimesWalk
import MongoPush
import pandas as pd
import requests
import urllib


provinceScrapersDict = {'BC':
[BCBlueCrossPharmacies.getBCPharmcies],

'AB':
[ABClinics.getABClinics],

'MB':
[MBClinicsV2.getMBClinicsFromMap],
 
 #MBSuperSitesPopups
 #This one isn't 1:1

'ON':
[ONClinicsV2.scrapeONClinics],

'QC':
[QCLocationsScrape.scrapeQCLocations],

'SK':
# [SKWaitTimesDrive.scrapeSKWaitsDriving,
# SKWaitTimesWalk.scrapeSKWaitsWalk,
[SKAppointments.GetSKAppointments]


}

def getLatLong(address):
    url = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(address) +'?format=json'
    print(url)
    response = requests.get(url).json()
    try:
        print(response[0].get('lat',None))
        print(response[0].get('lon',None))
        return response[0].get('lat',None), response[0].get("lon",None)
    except:
        return None,None

def DeleteProvinceAndReAdd(Province):
    MongoPush.dropRecordsByProvince(Province)
    dfAllLocations = pd.DataFrame()
    for func in provinceScrapersDict[Province]:
        df = func()
        print(df.columns)
        df = df.rename(columns={'latitude':'lat','longitude':'lon'})
        print(df)
        dfAllLocations = dfAllLocations.append(df,ignore_index=True)
    dfAllLocations.to_csv(Province+"allLocations.csv")
    if('availability' in dfAllLocations):
        dfAllLocations[['availability']] = dfAllLocations[['availability']].astype(object).where(dfAllLocations[['availability']].notnull(), None)
  
    
    MongoPush.addManyAppointmentTimes(dfAllLocations.to_dict('records'))
    #Haven't thoroughly tested the above dataframe translation

    #Also need to check if there are any that do not have latlongCombos
    #But only try once, because if the function doesnt work to build the combo then it needs to be input manually
    addresses = []


    allAddressLatLongs = pd.DataFrame(list(MongoPush.getAllLatLong()))
    print(allAddressLatLongs)


    if( not allAddressLatLongs.empty):
        dfAllLocations = pd.merge(dfAllLocations,allAddressLatLongs, on="address",how="left")


    addressesWithoutLatLong = pd.DataFrame()
    if('lon' not in dfAllLocations.columns or 'lat' not in dfAllLocations.columns ):
        print("LAT OR LON NOT IN THE DATAFRAME")
        #none of them have lat/long, i.e. saskatchewan
        for i, row in dfAllLocations.iterrows():
            lat, long = getLatLong(dfAllLocations.at[i,'address'])
            # if(lat != None):
            addressDF = addresses.append({'address':dfAllLocations.at[i,'address'],'lat':lat,'lon':long})

        if(len(addresses)>0):
            MongoPush.addManyLatLongCombo(addresses)

    else:
        addressesWithoutLatLong = dfAllLocations.loc[pd.isna(dfAllLocations['lat']) | pd.isna(dfAllLocations['lon'])]    

    if(not addressesWithoutLatLong.empty):
        for i, row in dfAllLocations.iterrows():
            lat, long = getLatLong(dfAllLocations.at[i,'address'])
            if(lat != None):
                addressDF = addresses.append({'address':dfAllLocations.at[i,'address'],'lat':lat,'lon':long})
        if(len(addresses)>0):
            MongoPush.addManyLatLongCombo(addresses)

    allAddressLatLongs = pd.DataFrame(list(MongoPush.getAllLatLong()))

    
        
        

#The format for the dataframe should be something like:

#"name"
#"address"      Street,  number, City, Prov.
#"availability"   if it exists.  
#"available"    Has stock - boolean on if its active or not 
#"phone"
#"website"
#'province
#'timeScraped'
#'type' - important if its walk in or not 



# DeleteProvinceAndReAdd('BC')
# DeleteProvinceAndReAdd('AB')
# DeleteProvinceAndReAdd('MB')
# DeleteProvinceAndReAdd('ON')
# DeleteProvinceAndReAdd('QC')
# DeleteProvinceAndReAdd('SK')

#50.7811527
#-101.2911663
#+11.46318 on lon 
#-15.0456019947 on lat


