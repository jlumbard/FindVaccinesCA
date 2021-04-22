import requests
from bs4 import BeautifulSoup as bs
import json
import pandas as pd
import datetime


def scrapeONClinics():
    headers = {
        'authority': 'covid-19.ontario.ca',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36',
        'accept': '*/*',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'script',
        'referer': 'https://covid-19.ontario.ca/vaccine-locations/',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': '_ga=GA1.2.1508445344.1618084017; _gid=GA1.2.521039438.1618862333',
    }

    response = requests.get('https://covid-19.ontario.ca/covid-19-ac-assets/4178e9cc986fc140f048cd41cab70b6192963e31-1ef4c22a598f18236ea2.js', headers=headers)


    splitText = "urn n}))},zNqT:function(e){e.exports=JSON.parse('"


    # print(response.text.split(splitText)[1])


    # print(response.text.split(splitText)[1].split("')}}])")[0].replace("\\'","'").replace('\\\\','\\')[48370:48390])

    jsResp = json.loads(response.text.split(splitText)[1].split("')}}])")[0].replace("\\'","'").replace('\\\\','\\'))

    df = pd.DataFrame(jsResp)

    print(df)

    #Do some filtering

    df['available'] = True
    df.loc[df['vaccine_stock'] == "No",'available'] = False
    df = df.loc[df['vaccine'] == "Yes"] # This dataset has testing clinics too

    df['address'] = df['address'] +" "+ df['city'] + ", "+ "ON " +df['postal_code'] 
    df['name'] = df['location_name']
    df['province'] = "ON" #This one should already exist in this df :) 
    df = df.filter(['name','address','availability','available','phone','website','province','latitude','longitude'])
    df['timeScraped'] = datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
    return df