import pymongo
import Config
import os
import pandas as pd

def getDB():
    client = pymongo.MongoClient("mongodb+srv://brocklumbard:"+os.environ.get('MongoPword')+"@cluster0.t1x3n.mongodb.net/production?retryWrites=true&w=majority")
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

def dropRecords():
    mydb = getDB()
    mycol = mydb["apptTimes"]
    myquery = {}
    mycol.delete_many(myquery)