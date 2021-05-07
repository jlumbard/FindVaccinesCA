import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
import datetime

def getSKPharmaciesv2():
    pageCounter = 1
    ThereAreResults=True
    listOfResults = []

    while(ThereAreResults):
        pageURL = 'https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/covid-19-vaccine/pharmacy-vaccine-administration/covid-19-pharmacy-vaccine-locations?searchRadius=1000&userLong=-106.6794354&userLat=52.1896515&page=' + str(pageCounter)
        newpage = requests.get(pageURL)

        print(newpage)
        soup = bs(newpage.content,'lxml')
        mapResults = soup.find('div',{'class':'map-result'})
        print(len(mapResults.select('li')))
        if(len(mapResults.select('li')) <1):
            ThereAreResults=False

        for result in mapResults.select('li'):
            dictOfPharm = {'name':result.select('strong')[0].text.strip(),
                        'address':result.text.split('\n')[3].strip(),
                        'phone':result.text.split('\n')[4].split('|')[0].strip()}        
            listOfResults.append(dictOfPharm)
            print(dictOfPharm)

        pageCounter +=1
        
    df = pd.DataFrame(listOfResults)
    df['timeScraped'] = datetime.datetime.now()
    df['type'] = 'pharmacy'
    df['availability'] = None
    df['available'] = False
    df['website'] = None
    df['province'] = 'SK'

    # print(df)
    return df
# print(getSKPharmaciesv2())