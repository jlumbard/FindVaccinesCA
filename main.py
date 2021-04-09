from flask import Flask, render_template, redirect, url_for
import sys
import os
import Config

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

    return render_template('home.html', provinceGuidanceDict=provinceGuidanceDict)


@app.route('/Province/<Province>')
def Province(Province=None):
    # No one should ever get to this URL
    if Province == None:
        return redirect(url_for(home))
    else:
        return render_template('province.html',Province = Province)
