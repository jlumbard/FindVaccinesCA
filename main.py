from flask import Flask
import sys

#to run run these commands sequentially:
#export FLASK_APP=main.py  
#export FLASK_DEBUG=1  
#Flask run

# in case Sarah is living in 2011
if sys.version_info[0] < 3:
    raise Exception("Must be using Python 3")

app = Flask(__name__)
app.secret_key = '\xf0\x07\xee\xa1\xde\x92cQp\x8e\x0c\xf7\x9f\xd3x\xfa\xb1\xd0\x03\xfdIq\xe3'

@app.route('/')
@app.route('/index')
def home():
    return "hello!"