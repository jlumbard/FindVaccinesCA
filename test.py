# import Scripts.SK.SKAppointments
import pandas as pd
import urllib.parse
import requests
import MongoPush

# df = pd.DataFrame(list(MongoPush.getAllLocations()))

# def getLatLong(address):
#     url = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(address) +'?format=json'
#     print(url)
#     response = requests.get(url).json()
#     print(response[0]["lat"])
#     print(response[0]["lon"])
#     return response[0]["lat"], response[0]["lon"]

# allLocations = []

# df = df['SITE']
# df = df.unique()
# print(df)
# for i in df:
#     try:
#         print(i)
#         lat, lon = getLatLong(i)
#         allLocations.append({'addressName':i,'lat':lat,'lon':lon})
#     except:
#         allLocations.append({'addressName':i,'lat':"",'lon':""})
#         pass

# MongoPush.addManyLatLongCombo(allLocations)


# df = pd.DataFrame(list(MongoPush.getAllLatLong()))


df = MongoPush.joinLocationsLatLong()
print(df)

df.to_csv('test.csv')
print('imported')

