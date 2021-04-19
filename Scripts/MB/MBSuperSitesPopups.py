import pandas as pd
import requests
from bs4 import BeautifulSoup as bs
import datetime



url = 'https://www.gov.mb.ca/covid19/vaccine/clinics.html'

r = requests.get(url)

supersOnly = r.text.split('<h2>Super-sites</h2>')[1].split('<h2>Pop-up Clinics</h2>')[0]
print(supersOnly)

soup = bs(supersOnly,features='lxml')

superSites = soup.findAll('li')
print(superSites)

#This is honestly like a pretty random output, not totally sure how to classify it. 

popupsOnly = r.text.split('<h2>Pop-up Clinics</h2>')[1].split('<h2>Focused Immunization Teams</h2>')[0]

print(popupsOnly)
soup = bs(popupsOnly,features='lxml')

popupSites = soup.findAll('tr')

allSites = []
for x in popupSites:
    print(x)
    if(x.findAll('td')[0].text !='Community'):
        allTDs = x.findAll('td')
        site = {}
        site['Community'] = allTDs[0].text
        site['Date'] = allTDs[1].text
        site['Location'] = allTDs[2].text
        site['Hours'] = allTDs[3].text

        allSites.append(site)

df = pd.DataFrame(allSites)

print(df)

