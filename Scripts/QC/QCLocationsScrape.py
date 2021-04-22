import pandas as pd
import json
import requests
import datetime

def scrapeQCLocations():

    headers = {
        'authority': 'api3.clicsante.ca',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
        'accept': 'application/json, text/plain, */*',
        'authorization': 'Basic cHVibGljQHRyaW1vei5jb206MTIzNDU2Nzgh',
        'x-trimoz-role': 'public',
        'sec-ch-ua-mobile': '?0',
        'product': 'clicsante',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36',
        'origin': 'https://portal3.clicsante.ca',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://portal3.clicsante.ca/',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': '_ga=GA1.2.973896744.1617993936; _gid=GA1.2.1124151031.1618868865; _gat=1',
    }

    params = (
        ('dateStart', '2021-04-19'),
        ('dateStop', '2021-08-17'),
        ('latitude', '46.811978'),
        ('longitude', '-71.2071987'),
        ('maxDistance', '100'),
        ('serviceUnified', '237'),
        ('postalCode', 'G1R 4P5'),
    )

    #G1R 4P5 Chateau Frontenac 46.811978, -71.2071987
    #H4B 5G0 Centre Bell 45.4960, -73.571504

    response = requests.get('https://api3.clicsante.ca/v3/availabilities', headers=headers, params=params)

    #NB. Original query string below. It seems impossible to parse and
    #reproduce query strings 100% accurately so the one below is given
    #in case the reproduced version is not "correct".
    # response = requests.get('https://api3.clicsante.ca/v3/availabilities?dateStart=2021-04-19&dateStop=2021-08-17&latitude=45.5063944&longitude=-73.5544147&maxDistance=100000&serviceUnified=237&postalCode=H2Y%202Z7', headers=headers)


    jsResp = json.loads(response.text)

    df = pd.DataFrame(jsResp['places'])
    establishmentDF = pd.DataFrame(jsResp['establishments'])

    joinedDF = pd.merge(df,establishmentDF,left_on="establishment",right_on="id", how="inner")
    print(joinedDF)

    del joinedDF['address']
    del joinedDF['name']
    joinedDF['availabilities'] = joinedDF['availabilities'].astype(str)
    joinedDF['availabilities'] = joinedDF['availabilities'].str.replace("'",'"')
    joinedDF['NewAvailability'] = False

    joinedDF['availabilitiesTemp'] = joinedDF['availabilities'].apply(json.loads)
    for i,row in  joinedDF.iterrows():
        joinedDF.at[i,'availability'] = joinedDF.at[i,'availabilitiesTemp']['su237']['t07'] | joinedDF.at[i,'availabilitiesTemp']['su237']['t07']
        
        if(joinedDF.at[i,'availability'] > 0):
            joinedDF.at[i,'NewAvailability'] = True
        
        if(joinedDF.at[i,'availabilitiesTemp']['su237']['t07'] >0 ):
            joinedDF.at[i,'availabilities'] = "This Week"
        elif(joinedDF.at[i,'availabilitiesTemp']['su237']['ta7'] >0 ):
            joinedDF.at[i,'availabilities'] = "Next Week"
        else:
            joinedDF.at[i,'availabilities'] = "None Currently"

    del joinedDF['availability']
    joinedDF['province'] = "QC"
    joinedDF = joinedDF.rename(columns={'name_en':'name', 'formatted_address':'address', 'NewAvailability':'available','availabilities':'availability'})
    joinedDF = joinedDF.filter(['name','address','availability','available','phone','website','province','latitude','longitude'])

    joinedDF['timeScraped'] = datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
    return joinedDF

#TODO:
#add parameteres to this function for the coordinates and the postalcode. Use that to check several places around quebec 
#instead of just one. Also dynamically datetime the dates