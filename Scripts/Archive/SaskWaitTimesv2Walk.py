import requests
import json
from bs4 import BeautifulSoup


def requestSHAPage(session):

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Referer': 'https://www.saskatchewan.ca/',
        'Accept-Language': 'en-US,en;q=0.9',
    }

    response = session.get('https://www.saskhealthauthority.ca/news/service-alerts-emergency-events/Pages/COVID-19-Vaccine-Drive-Thru-Wait-Times.aspx', headers=headers)
    print("----- Requesting first health authority page -----")
    print(response)
    return response

def doRedirectRequest(url,session):

    # cookies = {
    #     'ORA_WWV_APP_175': 'ORA_WWV-sQX_xrIij3pE7UC8orf5kaxb',
    # }

    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Accept-Language': 'en-US,en;q=0.9',
    }

    params = (
        ('p', '175:1:5057174586987'),
    )

    response = session.get(url, headers=headers, params=params)
    print("----- requesting the redirects to the waittime page -----")
    print(response)
    return response

def firstAjax(session,pageState,areaState):
    pageSoup = BeautifulSoup(pageState.text, features='lxml')

    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://oapp.saskatoonhealthregion.ca',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://oapp.saskatoonhealthregion.ca/apex/f?p=175:1:10636982098707:::::',
        'Accept-Language': 'en-US,en;q=0.9',
    }

    data = {
    'p_flow_id': '175',
    'p_flow_step_id': '1',
    'p_instance': pageState.url.split('oapp.saskatoonhealthregion.ca/apex/f?p=175:1:')[1].split(':')[0],
    'p_debug': '',
    'p_request': 'PLUGIN=' + pageState.text.split('(function(){apex.widget.selectList("#P1_SITE",{"nullValue":"","dependingOnSelector":"#P1_AREA","optimizeRefresh":true,"ajaxIdentifier":"')[1].split('"});')[0],
    'p_json': '{"pageItems":{"itemsToSubmit":[{"n":"P1_AREA","v":"'+areaState+'"}],"protected":"'+pageSoup.find('input',{'id':'pPageItemsProtected'})['value']+'","rowVersion":""},"salt":"'+pageSoup.find('input',{'id':'pSalt'})['value']+'"}'
    }


    print("----- requesting the first ajax -----")
    response = session.post('https://oapp.saskatoonhealthregion.ca/apex/wwv_flow.ajax', headers=headers,  data=data)
    print(response)
    return response

def secondAjax(session,pageState,areaState):
    pageSoup = BeautifulSoup(pageState.text, features='lxml')

    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://oapp.saskatoonhealthregion.ca',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://oapp.saskatoonhealthregion.ca/apex/f?p=175:1:10636982098707:::::',
        'Accept-Language': 'en-US,en;q=0.9',
    }

    data = {
    'p_flow_id': '175',
    'p_flow_step_id': '1',
    'p_instance': pageState.url.split('oapp.saskatoonhealthregion.ca/apex/f?p=175:1:')[1].split(':')[0],
    'p_debug': '',
    'p_request': 'P1_SITE',
    'p_reload_on_submit': 'S',
    'p_page_submission_id': pageSoup.find('input',{'id':'pPageSubmissionId'})['value'],
    'p_json': '{"pageItems":{"itemsToSubmit":[{"n":"P1_TODAY","v":"'+pageSoup.find('input',{'id':'P1_TODAY'})['value']+'","ck":"'+pageSoup.find('input',{'data-for':'P1_TODAY'})['value']+'"},{"n":"P1_AREA","v":"'+areaState+'"},{"n":"P1_SITE","v":""},{"n":"P1_NO_DATA","v":"'+pageSoup.find('input',{'id':'P1_NO_DATA'})['value']+'","ck":"'+pageSoup.find('input',{'data-for':'P1_NO_DATA'})['value']+'"}],"protected":"'+pageSoup.find('input',{'id':'pPageItemsProtected'})['value']+'","rowVersion":""},"salt":"'+pageSoup.find('input',{'id':'pSalt'})['value']+'"}'
    }
    print('----- requesting the second ajax -----')
    response = session.post('https://oapp.saskatoonhealthregion.ca/apex/wwv_flow.accept', headers=headers, data=data)
    print(response)
    return response

def thirdAjax(session,pageState, siteState):
    pageSoup = BeautifulSoup(pageState.text, features='lxml')
    print("PAGESOUP")
    # print(pageSoup.findAll('option',{'selected':True}))

    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://oapp.saskatoonhealthregion.ca',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://oapp.saskatoonhealthregion.ca/apex/f?p=175:1:5648678170735::NO:::',
        'Accept-Language': 'en-US,en;q=0.9',
    }

    data = {
    'p_flow_id': '175',
    'p_flow_step_id': '1',
    'p_instance': pageState.url.split('oapp.saskatoonhealthregion.ca/apex/f?p=175:1:')[1].split(':')[0],
    'p_debug': '',
    'p_request': 'P1_SITE',
    'p_reload_on_submit': 'S',
    'p_page_submission_id': pageSoup.find('input',{'id':'pPageSubmissionId'})['value'],
    'p_json': '{"pageItems":{"itemsToSubmit":[{"n":"P1_TODAY","v":"'+pageSoup.find('input',{'id':'P1_TODAY'})['value']+'","ck":"'+pageSoup.find('input',{'data-for':'P1_TODAY'})['value']+'"},{"n":"P1_AREA","v":"'+pageSoup.find('option',{'selected':True})['value']+'"},{"n":"P1_SITE","v":"6-1061 Central Ave."},{"n":"P1_NO_DATA","v":"'+pageSoup.find('input',{'id':'P1_NO_DATA'})['value']+'","ck":"'+pageSoup.find('input',{'data-for':'P1_NO_DATA'})['value']+'"}],"protected":"'+pageSoup.find('input',{'id':'pPageItemsProtected'})['value']+'","rowVersion":""},"salt":"'+pageSoup.find('input',{'id':'pSalt'})['value']+'"}'
    }
    print("----- requesting the third ajax -----")
    response = session.post('https://oapp.saskatoonhealthregion.ca/apex/wwv_flow.accept', headers=headers,  data=data)
    print(response)
    return response



sesh = requests.Session()
SHAPage = requestSHAPage(sesh)
#get the page from the sask health authority home. [1] is the walk ins and [0] is probably the drive throughs. 
SHAPageSoup = BeautifulSoup(SHAPage.text,features="lxml")
waitTimePageURL = SHAPageSoup.find("div", {"id": "ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField"}).findAll('a')[1]['href']
redirectRequest = doRedirectRequest(waitTimePageURL,sesh)

colinedURL = redirectRequest.url

print("----- Options scraped are: -----")
redirectSoup = BeautifulSoup(redirectRequest.text,features="lxml")
print(redirectSoup.findAll('option'))

for x in redirectSoup.findAll('option'):

    print(x['value'])
    if(x['value'] != ""):
        print('----- Now Scraping -----')
        print(x['value'])

        firstAjaxResponse = firstAjax(sesh,redirectRequest,x['value'])
        secondAjaxResponse = secondAjax(sesh,redirectRequest,x['value'])

        print(secondAjaxResponse.url)

        recolinedURL = colinedURL.replace(':::::','::NO:::')
        print("----- Requesting the page without area -----")
        lastRedirectRequest = sesh.get(recolinedURL)
        print(lastRedirectRequest)
        firstIterSoup = BeautifulSoup(lastRedirectRequest.text,features="lxml")
        # print(firstIterSoup.findAll('option'))
        # print(firstIterSoup.find('select',{'id':'P1_SITE'}).findAll('option'))
        for site in firstIterSoup.find('select',{'id':'P1_SITE'}).findAll('option'):

            thirdAjaxResponse = thirdAjax(sesh, lastRedirectRequest, site['value'])

            
            print("----- Requesting the final page with everything -----")
            FinalRequest = sesh.get(recolinedURL)
            print(FinalRequest)

            finalSoup = BeautifulSoup(FinalRequest.text,features='lxml')
            finalTimes = finalSoup.findAll('span',{'class':'display_only'})
            print(finalTimes)
            for time in finalTimes:
                # print(time)
                if(time['id'] != "P1_TODAY_DISPLAY"):
                    print("In "+x['value'] + " at the address "+site['value']+" at time "+time.text)