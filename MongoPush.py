from bson.objectid import ObjectId
import pymongo
import Config
import os
import pandas as pd

def getDB():
    client = pymongo.MongoClient("mongodb+srv://brocklumbard:"+os.environ.get('MongoPword')+"@cluster0.t1x3n.mongodb.net/production?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE")
    db = client.test

    print(db)
    print(client.list_database_names())
    dblist = client.list_database_names()
    if "production" in dblist:
        print("The database exists.")

    mydb = client["production"]
    return mydb

def addOneRecordWaitTimes(record):
    mydb = getDB()
    mycol = mydb["waitTimes"]
    #need to define the column names here. 
    #area, location, wait time, time scraped? 
    #Thas the minimum.
    mycol.insert_one(record)

def addOneRecordAppointmentTimes(record):
    mydb = getDB()
    mycol = mydb["apptTimes"]
    #need to define the column names here. 
    #area, location, wait time, time scraped? 
    #Thas the minimum.
    mycol.insert_one(record)

def addManyAppointmentTimes(records):
    mydb = getDB()
    mycol = mydb["apptTimes"]
    #need to define the column names here. 
    #area, location, wait time, time scraped? 
    #Thas the minimum.
    mycol.insert_many(records)

def addLatLongCombo(record):
    mydb = getDB()
    mycol = mydb["latLongCombo"]
    #need to define the column names here. 
    #area, location, wait time, time scraped? 
    #Thas the minimum.
    mycol.insert_one(record)

def addManyLatLongCombo(records):
    mydb = getDB()
    mycol = mydb["latLongCombo"]
    #need to define the column names here. 
    #area, location, wait time, time scraped? 
    #Thas the minimum.
    mycol.insert_many(records)

def getAllLocations():
    mydb = getDB()
    mycol = mydb["apptTimes"]
    print(mycol.find())
    return mycol.find()

def getAllLocationsByProvince(prov):
    mydb = getDB()
    mycol = mydb["apptTimes"]
    print(mycol.find())
    return mycol.find({'province':prov})

def getAllLLByProvince(prov):
    mydb = getDB()
    mycol = mydb["latLongCombo"]
    print(mycol.find())
    return mycol.find({'province':prov})

def getAllLatLong():
    mydb = getDB()
    mycol = mydb["latLongCombo"]
    print(mycol.find())
    return mycol.find()

def joinLocationsLatLong():
    dfLocations = pd.DataFrame(list(getAllLocations()))
    dfLatLong = pd.DataFrame(list(getAllLatLong()))
    joinedDF = pd.merge(dfLocations,dfLatLong, left_on='SITE',right_on='addressName')
    return joinedDF


#these dont work
def dropDupsLatLong():
    mydb = getDB()
    mycol = mydb["latLongCombo"]
    mycol.pages.ensureIndex( { 'scan_id':1, 'leaf_num':1 }, { 'unique':True, 'dropDups':True } )

def dropDupsAppointments():
    mydb = getDB()
    mycol = mydb["apptTimes"]
    mycol.ensureIndex( { 'scan_id':1, 'leaf_num':1 }, { 'unique':True, 'dropDups':True } )

def dropRecordsByProvince(prov):
    mydb = getDB()
    mycol = mydb["apptTimes"]

    myquery = { "province": prov }

    mycol.delete_many(myquery)

def dropLLByProvince(prov):
    mydb = getDB()
    mycol = mydb["latLongCombo"]

    myquery = { "province": prov }

    mycol.delete_many(myquery)

def dropRecords():
    mydb = getDB()
    mycol = mydb["apptTimes"]
    myquery = {}
    mycol.delete_many(myquery)

# def dropLatLong():
#     mydb = getDB()
#     mycol = mydb["latLongCombo"]
#     myquery = {}
#     mycol.delete_many(myquery)

def dropOneLatLong(id):
    mydb = getDB()
    mycol = mydb["latLongCombo"]
    myquery = {'_id': ObjectId(id)}
    deleteResult = mycol.delete_many(myquery)
    print("delete result:")
    print(deleteResult.deleted_count)


def dropOneLatLongByAddr(address):
    mydb = getDB()
    mycol = mydb["latLongCombo"]
    myquery = {'address': address}
    deleteResult = mycol.delete_many(myquery)
    print("delete result:")
    print(deleteResult.deleted_count)


def mergeLatLong(prov):
    allLocations = pd.DataFrame(list(getAllLocationsByProvince(prov)))
    allLL = pd.DataFrame(list(getAllLLByProvince(prov)))

    joinedDF = pd.merge(allLocations,allLL,left_on='address',right_on='address',how='left')

    if('lat' not in allLocations.columns and 'lon' not in allLocations.columns):#all the LL come from the db
        return joinedDF
    else:#there are some or all LL in the locations table
        joinedDF['lat'] = 0.0
        joinedDF['lon'] = 0.0

        joinedDF.loc[pd.notnull(joinedDF['lat_x']), 'lat'] = joinedDF['lat_x']
        joinedDF.loc[pd.notnull(joinedDF['lon_x']), 'lon'] = joinedDF['lon_x']

        #any remaining
        joinedDF.loc[pd.isnull(joinedDF['lat']), 'lat'] = joinedDF['lat_y']
        joinedDF.loc[pd.isnull(joinedDF['lon']), 'lon'] = joinedDF['lon_y']

        return joinedDF

def dumpMessageInfo(messageInfo):
    mydb = getDB()
    mycol = mydb["messageReceived"]
    #need to define the column names here. 
    #area, location, wait time, time scraped? 
    #Thas the minimum.
    mycol.insert_one(messageInfo)

def printNumberOfRows():
    mydb = getDB()
    mycol = mydb["messageReceived"]
    print(len(pd.DataFrame(list(mycol.find()))))


def getMessageRows():
    mydb = getDB()
    mycol = mydb["messageReceived"]
    return pd.DataFrame(list(mycol.find()))
    