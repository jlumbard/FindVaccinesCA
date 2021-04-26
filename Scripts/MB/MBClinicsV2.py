import requests
import json
import pandas as pd
import datetime

def getMBClinicsFromMap():
    #url is from the bottom of the map site:
    #bottom of here: https://manitoba.ca/covid19/vaccine/finder.html
    url = 'https://services.arcgis.com/mMUesHYPkXjaFGfS/arcgis/rest/services/Manitoba_COVID_19_Vaccine_Eligible_Sites/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=%7B%22xmin%22%3A-12426536.87159711%2C%22ymin%22%3A5968374.570410628%2C%22xmax%22%3A-9178268.917591123%2C%22ymax%22%3A8057245.679387368%2C%22spatialReference%22%3A%7B%22wkid%22%3A102100%2C%22latestWkid%22%3A3857%7D%7D&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&orderByFields=ObjectId%20ASC&outSR=102100'

    r = requests.get(url)

    jsonR = json.loads(r.text)

    # print(jsonR)

    print(jsonR['features'])
    print(type(jsonR))

    df = pd.json_normalize(jsonR['features'])
    df['address'] = df['attributes.Address'] + " " + df['attributes.City'] +", " + "MB " + df['attributes.Postal_Code']
    df['province'] = "MB"

    df['availability'] = False
    df.loc[df['attributes.Status'] == 'Taking appointments','availability'] = True

    df = df.rename(columns={'attributes.Provider_Name':'name', 'attributes.Phone':'phone', 'geometry.x':'longitude','geometry.y':'latitude'})
    df = df.filter(['name','address','availability','available','phone','website','province','latitude','longitude'])

    df['timeScraped'] = datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
    # df['latitude'] = df['latitude']/100000
    # df['longitude'] = df['longitude']/100000

    # df['latitude'] = df['latitude'] - 15.0456019947
    # df['longitude'] = df['longitude'] + 11.46318

    del df['latitude']
    del df['longitude']
    return df