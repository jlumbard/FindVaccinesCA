import pandas as pd
import requests
from bs4 import BeautifulSoup as bs 


r = requests.get('https://www.ab.bluecross.ca/news/covid-19-immunization-program-information.php')

soup = bs(r.text, features='lxml')

allLocations = soup.find('div',{'class':'row filter-cat-results justify-content-between'}).findAll('div',{'class':'col-12 col-md-5 f-cat padding-b-16 margin-b-16'})



pharmacyData = []

for x in allLocations:
    print(x)
    pharmacyDataEntry = {}
    pharmacyDataEntry['name'] = x.find('h4').text
    pharmacyDataEntry['vaccineType'] = x['vaccinetype']
    pharmacyDataEntry['city'] = x['city']
    pharmacyDataEntry['address'] = x.findAll('p')[0].text
    contactMethods = x.select('p a')
    print(contactMethods)
    for contact in contactMethods:
        if('tel:' in contact['href']):
            pharmacyDataEntry['contactTelephone'] = contact['href'].replace('tel:','')
        
        elif('http' in contact['href']):
            pharmacyDataEntry['contactWebsite'] = contact['href']
    pharmacyData.append(pharmacyDataEntry)

df = pd.DataFrame(pharmacyData)
print(df)

df['prov'] = "AB"