import requests
import json
import pandas as pd






#url is from the bottom of the map site:
#bottom of here: https://manitoba.ca/covid19/vaccine/finder.html
url = 'https://services.arcgis.com/mMUesHYPkXjaFGfS/arcgis/rest/services/Manitoba_COVID_19_Vaccine_Eligible_Sites/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=%7B%22xmin%22%3A-12428432.569615008%2C%22ymin%22%3A6524308.541682109%2C%22xmax%22%3A-9940865.921102894%2C%22ymax%22%3A8405270.933723226%2C%22spatialReference%22%3A%7B%22wkid%22%3A102100%2C%22latestWkid%22%3A3857%7D%7D&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&orderByFields=ObjectId%20ASC&outSR=102100'

r = requests.get(url)

jsonR = json.loads(r.text)

# print(jsonR)

print(jsonR['features'])

df = pd.DataFrame(jsonR['features'])

print(df)