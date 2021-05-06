import time
import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import Select
import datetime
import pandas as pd


def scrapeSKWaitsDriving():
    chromedriveLocation = '/Users/brocklumbard/Documents/20202021/Life admin/VaccineFinder/chromedriver'

    browser = webdriver.Chrome(executable_path=chromedriveLocation)

    browser.get('https://www.saskhealthauthority.ca/news/service-alerts-emergency-events/Pages/COVID-19-Vaccine-Drive-Thru-Wait-Times.aspx')

    waitTimePageURL = browser.find_elements_by_css_selector("#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField a")

    print(waitTimePageURL)

    for x in waitTimePageURL:
        print(x.get_attribute('href'))

    browser.get(waitTimePageURL[0].get_attribute('href'))


    #first dropdown 
    select1 = Select(browser.find_element_by_id('P1_AREA'))
    options1 = browser.find_element_by_id('P1_AREA').find_elements_by_css_selector('option')
    print("number of options:")
    print(len(options1))

    finalTriplesArray = []

    nonStaleOptions = []
    for option in options1:
        nonStaleOptions.append(option.text)

    for option in nonStaleOptions:
        if(option != ""):
            select1 = Select(browser.find_element_by_id('P1_AREA'))
            print("Selecting "+option)
            select1.select_by_visible_text(option)
            print("redirectingFirst")
            time.sleep(5)
            options2 = browser.find_element_by_id('P1_SITE').find_elements_by_css_selector('option')
            nonStaleOptions2 = []

            for option2 in options2:
                nonStaleOptions2.append(option2.text)
            for nonStaleoption in nonStaleOptions2:
                if(nonStaleoption != ""):
                    select2 = Select(browser.find_element_by_id('P1_SITE'))
                    print("Selecting "+nonStaleoption)
                    select2.select_by_visible_text(nonStaleoption)
                    print('Redirecting Final')
                    time.sleep(7)
                    print(browser.find_elements_by_class_name('display_only'))
                    tempTriples=[]
                    for display in browser.find_elements_by_class_name('display_only'): #get only the last one for now. Will scrape often enough to be up to date
                        if(display.get_attribute('id') != 'P1_TODAY_DISPLAY'):
                            print(display.text)
                            tempTriples.append({'timeScraped':datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),'AREA':option,'SITE':nonStaleoption,'Wait':display.text})
                    print(tempTriples[-1:][0])
                    finalTriplesArray.append(tempTriples[-1:][0])

    print(finalTriplesArray)
    df = pd.DataFrame(finalTriplesArray)
    df['address'] = df['SITE'] +" " + df['AREA']
    df['available'] = True
    df['province'] = "SK"
    df['website'] = 'http://bit.ly/saskvaxdt'
    df['availability'] = df['Wait']
    df['type'] = "driveThru"
    
    df.loc[(df['Wait'] == 'Please check back later.') | (df['Wait'].str.contains('Closed')), 'available'] = False
    df.loc[(df['Wait'] == 'Please check back later.') | (df['Wait'].str.contains('Closed')), 'availability'] = "Not Currently Open"

    df = df.filter(['type','name','address','availability','available','phone','website','province','latitude','longitude','timeScraped'])
    

    return df