from flask import Flask, render_template, redirect, url_for
import sys
import os
import Config
import MongoPush
import pandas as pd

# to run run these commands sequentially:
# export FLASK_APP=main.py
# export FLASK_DEBUG=1
# Flask run

# in case Sarah is living in 2011
if sys.version_info[0] < 3:
    raise Exception("Must be using Python 3")

app = Flask(__name__)

app.secret_key = os.environ.get('SECRET_KEY')


@app.route('/')
@app.route('/index')
def home():
    # return "hello!"
    provinceGuidanceDict = {'SK': '''In xyz province, you can get a vaccine if you are over age 55 or if you are over age 50 and living in an xyz administrative zone. Vaccines can be booked for appointments, or you can attend a drive through center.''',
    'MB':'',
    'AB':'',
    'BC':'',
    'QC':'',
    'ON':'',
    'NS':'',
    'NB':'',
    'PEI':'',
    'NFL':'',
    'YK':'',
    'NWT':'',
    'NVT':''
    }

    return render_template('main.html', provinceGuidanceDict=provinceGuidanceDict)


@app.route('/Province/<Province>')
def Province(Province=None):

    ProvinceCenters = {'NWT':{'LL':[-133.1405165,64.4021426],'Zoom':5},'NWT':{'LL':[-118.8582899,65.0123132],'Zoom':5},'NVT':{'LL':[-87.6790912,66.2495897],'Zoom':5},'PEI':{'LL':[-63.4297036,46.376635],'Zoom':5},'NFL':{'LL':[-58.3710946,52.0241321],'Zoom':5},'NB':{'LL':[-65.8786972,46.8797689],'Zoom':5},'NS':{'LL':[-63.7892021,45.1180219],'Zoom':5},'SK':{'LL':[-105.7520351,52],'Zoom':5}, 'ON':{'LL':[-80.2207983,44.4713452],'Zoom':5}, 'QC':{'LL':[-73.5048354, 48.0306551],'Zoom':5},'MB':{'LL':[-98.0561298,51.2537912],'Zoom':5}, 'AB':{'LL':[-114.2950713, 51.5017414],'Zoom':5},'BC':{'LL':[-121.5070517,51.0690983],'Zoom':5}}
    
    ListOfLocations = pd.DataFrame(list(MongoPush.getAllLocationsByProvince(Province)))


    
    allAddressLatLongs = pd.DataFrame(list(MongoPush.getAllLatLong()))

    if('lat' in ListOfLocations.columns and 'lon' in ListOfLocations.columns):
        ListOfLocationsNoLL = ListOfLocations.loc[pd.notna(ListOfLocations['lat']) & pd.notna(ListOfLocations['lon'])]
    else:
        ListOfLocationsNoLL = ListOfLocations
    dfAllLocations = pd.merge(allAddressLatLongs,ListOfLocationsNoLL, on="address",how="inner")
    print(dfAllLocations)

    dfAllLocations = ListOfLocations.append(dfAllLocations,ignore_index=True)



    dfOnlyWithLatLong = dfAllLocations.loc[pd.notna(dfAllLocations['lat']) & pd.notna(dfAllLocations['lon'])]
    print(dfOnlyWithLatLong)
    print(dfOnlyWithLatLong.columns)
    dfOnlyWithLatLong.to_csv('dfOnlyWithLatLong.csv')
    print("list")
    print(dfOnlyWithLatLong.to_dict('records'))
    

    #Do some voodoo here to add the LL if it isn't already in here 
    
    if Province == None:
        # No one should ever get to this URL
        return redirect(url_for(home))
    else:
        print(dfOnlyWithLatLong)
        return render_template('province.html',Province = Province, ProvinceCenter = ProvinceCenters[Province], ListOfLocations = dfOnlyWithLatLong.to_dict('records'))
