import pandas as pd
import requests 
import os 
import MongoPush
import Config


#potential backup URL:
#https://geocoder.ca/?locate=S4V3M7&geoit=XML&json=1

def getAddressInfo(address):

    r = getAddressInfoRaw(address)

    atLeastOneSK = False
    try:
        for component in r['results'][0]['address_components']:
            if(component['long_name'] == 'Saskatchewan'):
                atLeastOneSK = True
        if(not atLeastOneSK):
            return False
    except:
        return False
    try:
        return r['results'][0]['geometry']['location']['lat'], r['results'][0]['geometry']['location']['lng']
    except:
        return False

def getAddressInfoRaw(address):

    params = (
        ('key', os.environ.get('GcloudPword')),
        ('address', address)
    )

    r = requests.get('https://maps.googleapis.com/maps/api/geocode/json', params=params)

    print(r.json())
    return r.json()


def replaceBlankAddresses(prov):

    llcombo = MongoPush.getAllLLByProvince(prov)

    print(llcombo)

    dfLL = pd.DataFrame(list(llcombo))

    print(dfLL)

    noLL = dfLL.loc[(dfLL['lat'] == -1.1) | (dfLL['lon'] == -1.1)]

    print(noLL)

    print(len(noLL))

    for i, row in noLL.iterrows():
        print(noLL.at[i,'address'])
        result = getAddressInfo(noLL.at[i,'address'])
        if(result != False):
            lat,long = result
            newDict = {'address':noLL.at[i,'address'],'lat':lat,'lon':long, 'province':prov}
            MongoPush.dropOneLatLong(noLL.at[i,'_id'])
            MongoPush.addLatLongCombo(newDict)
            print("added")


def testAddrFinder():
    ll = getAddressInfo('S4V1E9')

    print(ll)

# replaceBlankAddresses('SK')
