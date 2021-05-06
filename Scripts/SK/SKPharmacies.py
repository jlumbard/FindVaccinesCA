import pandas as pd 
import datetime
import requests
from bs4 import BeautifulSoup as bs


def getPharmacies():
    r = requests.get('https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/covid-19-vaccine/pharmacy-vaccine-administration')
    print(r)

    soup = bs(r.content, 'lxml')
    trs = soup.find_all('tr')


    listOfDictsPharmacyLocations = []
    currentCity = ""
    for tr in trs:
        tds = tr.find_all('td')
        print(tds)
        print(tds[1].text)
        if(tds[1].text == "Address" or tds[1].text == '<strong>Address</strong>'):
            currentCity = tds[0].text
            print("set current city")
        else:
            if(currentCity != ""):
                print(tds[1].text + " " + currentCity)
                listOfDictsPharmacyLocations.append({'name':tds[0].text,'address':tds[1].text + " " + currentCity +" SK"})
            else:
                listOfDictsPharmacyLocations.append({'name':tds[0].text,'address':tds[1].text})
    print(listOfDictsPharmacyLocations)
    dfOfDict = pd.DataFrame(listOfDictsPharmacyLocations)
    dfOfDict['timeScraped'] = datetime.datetime.now()
    dfOfDict['type'] = 'pharmacy'
    dfOfDict['availability'] = None
    dfOfDict['available'] = False
    dfOfDict['website'] = None
    dfOfDict['phone'] = None
    dfOfDict['province'] = 'SK'
    print(dfOfDict)
    return dfOfDict

# print(getPharmacies())