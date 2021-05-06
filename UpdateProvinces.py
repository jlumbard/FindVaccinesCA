import Scripts.BC.BCBlueCrossPharmacies as BCBlueCrossPharmacies
import Scripts.AB.ABClinics as ABClinics
import Scripts.MB.MBClinicsV2 as MBClinicsV2
import Scripts.MB.MBSuperSitesPopups as MBSuperSitesPopups
import Scripts.ON.ONClinicsV2 as ONClinicsV2
import Scripts.QC.QCLocationsScrape as QCLocationsScrape
import Scripts.SK.SKAppointments as SKAppointments
import Scripts.SK.SKWaitTimesDrive as SKWaitTimesDrive
import Scripts.SK.SKWaitTimesWalk as SKWaitTimesWalk
import Scripts.SK.SKPharmacies as SKPharmacies
import Scripts.NS.ScrapeNSAppts as ScrapeNSAppts
import MongoPush
import pandas as pd
import requests
import urllib


provinceScrapersDict = {'BC':
[BCBlueCrossPharmacies.getBCPharmcies],

'AB':
[ABClinics.getABClinics],

'MB':
[MBClinicsV2.getMBClinicsFromMap],
 
 #MBSuperSitesPopups
 #This one isn't 1:1

'ON':
[ONClinicsV2.scrapeONClinics],

'QC':
[QCLocationsScrape.scrapeQCLocations],

'SK':
[
SKWaitTimesDrive.scrapeSKWaitsDriving,
SKWaitTimesWalk.scrapeSKWaitsWalk,
SKPharmacies.getPharmacies,
SKAppointments.GetSKAppointments
],

'NS': [ScrapeNSAppts.getNSAppointments]



}

def getLatLong(address):
    url = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(address) +'?format=json'
    print(url)
    response = requests.get(url).json()
    try:
        print(response[0].get('lat',-1.1))
        print(response[0].get('lon',-1.1))
        return response[0].get('lat',-1.1), response[0].get("lon",-1.1)
    except:
        return -1.1,-1.1

def DeleteProvinceAndReAdd(Province):
    dfAllLocations = pd.DataFrame()
    for func in provinceScrapersDict[Province]:
        df = func()
        print(df.columns)
        df = df.rename(columns={'latitude':'lat','longitude':'lon'})
        print(df)
        dfAllLocations = dfAllLocations.append(df,ignore_index=True)
    dfAllLocations.to_csv(Province+"allLocations.csv")
    if('availability' in dfAllLocations):
        dfAllLocations[['availability']] = dfAllLocations[['availability']].astype(object).where(dfAllLocations[['availability']].notnull(), None)
  
    
    MongoPush.dropRecordsByProvince(Province)
    MongoPush.addManyAppointmentTimes(dfAllLocations.to_dict('records'))
    #Haven't thoroughly tested the above dataframe translation

    #Also need to check if there are any that do not have latlongCombos
    #But only try once, because if the function doesnt work to build the combo then it needs to be input manually
    addresses = []



    allAddressLatLongs = pd.DataFrame(list(MongoPush.getAllLatLong()))
    print(allAddressLatLongs)

    scrapedLocationsWithoutLatLon = pd.DataFrame()
    if( not allAddressLatLongs.empty):
        if('lat' in dfAllLocations.columns and 'lon' in dfAllLocations.columns):
            scrapedLocationsWithoutLatLon = dfAllLocations.loc[(pd.isna(dfAllLocations['lat'])) | (pd.isna(dfAllLocations['lon']))].copy()
            del scrapedLocationsWithoutLatLon['lon']
            del scrapedLocationsWithoutLatLon['lat']
            scrapedLocationWithLatLon = pd.merge(scrapedLocationsWithoutLatLon,allAddressLatLongs, on="address",how="left")
            dfAllLocations = scrapedLocationWithLatLon.append(dfAllLocations.loc[(pd.notna(dfAllLocations['lat'])) | (pd.notna(dfAllLocations['lon']))])
        else:
            scrapedLocationsWithoutLatLon = dfAllLocations.copy()
            dfAllLocations = pd.merge(scrapedLocationsWithoutLatLon,allAddressLatLongs, on="address",how="left")
        
    print("df all locations")
    print(dfAllLocations)


    addressesWithoutLatLong = pd.DataFrame()
    if('lon' not in dfAllLocations.columns or 'lat' not in dfAllLocations.columns ):
        print("LAT OR LON NOT IN THE DATAFRAME")
        #none of them have lat/long, i.e. saskatchewan
        for i, row in dfAllLocations.iterrows():
            lat, long = getLatLong(dfAllLocations.at[i,'address'])
            # if(lat != None):
            addresses.append({'address':dfAllLocations.at[i,'address'],'lat':lat,'lon':long,'province':Province})
            # print(addresses)

        if(len(addresses)>0):
            print(addresses)
            MongoPush.addManyLatLongCombo(addresses)

    else:
        addressesWithoutLatLong = dfAllLocations.loc[(pd.isna(dfAllLocations['lat'])) | (pd.isna(dfAllLocations['lon']))]    
    print('addr without lat long')
    print(addressesWithoutLatLong)

    if(not addressesWithoutLatLong.empty):
        print("not empty")
        for i, row in addressesWithoutLatLong.iterrows():
            lat, long = getLatLong(dfAllLocations.at[i,'address'])
            # if(lat != None):
            addresses.append({'address':dfAllLocations.at[i,'address'],'lat':lat,'lon':long,'province':Province})
            # print(addresses)
        if(len(addresses)>0):
            print(addresses)
            MongoPush.addManyLatLongCombo(addresses)

    allAddressLatLongs = pd.DataFrame(list(MongoPush.getAllLatLong()))

#The format for the dataframe should be something like:

#"name"
#"address"      Street,  number, City, Prov.
#"availability"   if it exists.  
#"available"    Has stock - boolean on if its active or not
#"phone"
#"website"
#'province
#'timeScraped'
#'type' - important if its walk in or not "walkIn", "driveThru", 'govtClinic', 'pharmacy'



# DeleteProvinceAndReAdd('BC')
# DeleteProvinceAndReAdd('AB')
# DeleteProvinceAndReAdd('MB')
# DeleteProvinceAndReAdd('ON')
# DeleteProvinceAndReAdd('QC')
DeleteProvinceAndReAdd('SK')
# DeleteProvinceAndReAdd('NS')