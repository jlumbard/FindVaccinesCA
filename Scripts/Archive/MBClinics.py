import pandas as pd

import time
import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import Select
import datetime

chromedriveLocation = '/Users/brocklumbard/Documents/20202021/Life admin/VaccineFinder/chromedriver'

browser = webdriver.Chrome(executable_path=chromedriveLocation)

r = browser.get('https://manitoba.maps.arcgis.com/apps/webappviewer/index.html?id=f23b4763cf1b4ded90763f9c409763f8')

classTofind ='esriPopup'

time.sleep(20)
# popups = browser.find_elements_by_class_name(classTofind)

images = browser.find_elements_by_css_selector('image')
print(images[0])
try:
    images[0].click()
except Exception as e:
    print(e)


# print(popups)