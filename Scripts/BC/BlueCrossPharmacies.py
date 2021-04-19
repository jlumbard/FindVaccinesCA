import pandas as pd
import requests
from bs4 import BeautifulSoup as bs
import datetime

r = requests.get('https://www.bcpharmacy.ca/resource-centre/covid-19/vaccination-locations')

soup = bs(r.text,features='lxml')

trs  = soup.select('article table tr')

allrecords = []

for tr in trs:
    record ={}
    record['city'] = tr.findAll('td')[0].text
    NameArea = tr.findAll('td')[1]
    if(len(NameArea.findAll('a'))>0 ):
        record['Name'] = NameArea.findAll('a')[0].text
        record['website'] = NameArea.findAll('a')[0]['href']
    else:
       record['Name'] = NameArea.text

    record['Address'] = tr.findAll('td')[2].text

    allrecords.append(record)

df = pd.DataFrame(allrecords)

print(df)