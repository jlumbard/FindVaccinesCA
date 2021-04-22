import pandas as pd
import requests
from bs4 import BeautifulSoup as bs
import datetime


def getBCPharmcies():
    r = requests.get('https://www.bcpharmacy.ca/resource-centre/covid-19/vaccination-locations')

    soup = bs(r.text,features='lxml')

    for linebreak in soup.find_all('br'):
        linebreak.replace_with(" ")
        #This helps seperate teh line spacing on the addresses and cities in which we parse out brs down below into address

    trs  = soup.select('article table tr')

    allrecords = []

    for tr in trs:
        record ={}
        record['city'] = tr.findAll('td')[0].text
        NameArea = tr.findAll('td')[1]
        if(len(NameArea.findAll('a'))>0 ):
            record['name'] = NameArea.findAll('a')[0].text
            record['website'] = NameArea.findAll('a')[0]['href']
        else:
            record['name'] = NameArea.text

        record['address'] = tr.findAll('td')[2].text.replace('<br>'," ")

        allrecords.append(record)

    df = pd.DataFrame(allrecords)
    df['province'] = "BC"
    df['available'] = True
    df = df.filter(['name','address','availability','available','phone','website','province','latitude','longitude'])
    df['timeScraped'] = datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
    return df