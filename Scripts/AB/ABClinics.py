import pandas as pd
import requests
from bs4 import BeautifulSoup as bs 
import json
import datetime

def getABClinics():
    r = requests.get('https://www.ab.bluecross.ca/news/covid-19-immunization-program-information.php')

    # soup = bs(r.text, features='lxml')

    # allLocations = soup.find('div',{'class':'row filter-cat-results justify-content-between'}).findAll('div',{'class':'col-12 col-md-5 f-cat padding-b-16 margin-b-16'})

    jsonText = r.text.split('var json =')[1].split('var jsonStringify = JSON.stringify(json);')[0]
    jsonText = jsonText.replace('\\n',"").replace('\\t',"")
    # jsonText = '{"allRecords":'+jsonText+"}"

    print(jsonText[0:530])

    parsedJson = json.loads(jsonText)
    print(type(parsedJson))

    df = pd.json_normalize(parsedJson)
    
    df['address'] = ""
    df.loc[pd.notna(df['address2']),'address'] = df['address1'] + " " + df['address2'] + " " + df['city']
    df.loc[pd.isna(df['address2']),'address'] = df['address1'] + " " + df['city']

    df['name'] = df['pharmacy']
    df['availability'] = True
    df['available'] = df['dateAvailable']
    df['website'] = df['bookingLink']
    df['province'] = "AB"
    df['longitude'] = df['geometry.coordinates'].str[1]
    df['latitude'] = df['geometry.coordinates'].str[0]

    df = df.filter(['name','address','availability','available','phone','website','province','latitude','longitude'])
    df['timeScraped'] = datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
    return df
