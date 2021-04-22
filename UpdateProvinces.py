import Scripts.BC.BCBlueCrossPharmacies as BCBlueCrossPharmacies
import Scripts.AB.ABClinics as ABClinics
import Scripts.MB.MBClinicsV2 as MBClinicsV2
import Scripts.MB.MBSuperSitesPopups as MBSuperSitesPopups
import Scripts.ON.ONClinicsV2 as ONClinicsV2
import Scripts.QC.QCLocationsScrape as QCLocationsScrape
import Scripts.SK.SKAppointments as SKAppointments
import Scripts.SK.SKWaitTimesDrive as SKWaitTimesDrive
import Scripts.SK.SKWaitTimesWalk as SKWaitTimesWalk
import MongoPush
import pandas as pd


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
# [SKWaitTimesDrive.scrapeSKWaitsDriving,
# SKWaitTimesWalk.scrapeSKWaitsWalk,
[SKAppointments.GetSKAppointments]


}

def DeleteProvinceAndReAdd(Province):
    MongoPush.dropRecordsByProvince(Province)
    dfAllLocations = pd.DataFrame()
    for func in provinceScrapersDict[Province]:
        df = func()
        print(df.columns)
        print(df)
        dfAllLocations = dfAllLocations.append(df,ignore_index=True)
    df.to_csv(Province+"allLocations.csv")
    MongoPush.addManyAppointmentTimes(dfAllLocations.to_dict('records'))
    #Haven't thoroughly tested the above dataframe translation

    #Also need to check if there are any that do not have latlongCombos
    #But only try once, because if the function doesnt work to build the combo then it needs to be input manually

#The format for the dataframe should be something like:

#"name"
#"address"      Street,  number, City, Prov.
#"availability"   if it exists.  
#"available"    Has stock - boolean on if its active or not 
#"phone"
#"website"
#'province
#'timeScraped'
#'type' - important if its walk in or not 



# DeleteProvinceAndReAdd('BC')
# DeleteProvinceAndReAdd('AB')
# DeleteProvinceAndReAdd('MB')
# DeleteProvinceAndReAdd('ON')
# DeleteProvinceAndReAdd('QC') 
DeleteProvinceAndReAdd('SK')