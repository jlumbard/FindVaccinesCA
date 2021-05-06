import datetime
import requests 
import pandas as pd
import json 


def getAppointments():
    headers = {
        'authority': 'sync-cf2-1.canimmunize.ca',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
        'accept': 'application/json, text/plain, */*',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36',
        'origin': 'https://novascotia.flow.canimmunize.ca',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://novascotia.flow.canimmunize.ca/',
        'accept-language': 'en-US,en;q=0.9',
        'if-none-match': 'W/"92675-gy5qM4jqBrroZgtWAY/aLttzxQ0"',
    }

    params = (
        ('preview', 'false'),
    )
    #works when you ditch the headers
    response = requests.get('https://sync-cf2-1.canimmunize.ca/fhir/v1/public/booking-page/17430812-2095-4a35-a523-bb5ce45d60f1/appointment-types', params=params)

    #NB. Original query string below. It seems impossible to parse and
    #reproduce query strings 100% accurately so the one below is given
    #in case the reproduced version is not "correct".
    # response = requests.get('https://sync-cf2-1.canimmunize.ca/fhir/v1/public/booking-page/17430812-2095-4a35-a523-bb5ce45d60f1/appointment-types?preview=false', headers=headers)
    print(response)
    # print(response.text)

    return response.json()

def getNSAppointments():
    jason = getAppointments()

    df = pd.DataFrame(jason['results'])

    print(df.columns)

    df.to_csv('NSTest.csv')

    print(df)

    df['name'] = df['nameEn']
    df['address'] = df['mapsLocationString']
    df['timeScraped'] = datetime.datetime.now()
    df['available'] = ~df['fullyBooked']
    df['province'] = 'NS'
    df['type'] = 'clinic'
    df['website'] = 'https://novascotia.flow.canimmunize.ca/en/9874123-19-7418965'

    #could get availability time from this endpoint : https://sync-cf2-1.canimmunize.ca/fhir/v1/public/availability/17430812-2095-4a35-a523-bb5ce45d60f1?appointmentTypeId=e6530590-dfcd-46b3-a1cd-02e0ccb2271a&timezone=America%2FRegina&preview=false

    df = df.filter(['name','address','availability','available','phone','website','province','timeScraped','type'])

    return df