import requests
import json
from bs4 import BeautifulSoup

#Get the Areas/Cities for the walk in clinics
s = requests.session()



walkInredirect = 'https://oapp.saskatoonhealthregion.ca/apex/f?p=175:1:4167566702824::NO:::'
walkInredirectResult = s.get(walkInredirect)
print(walkInredirectResult)
print(s.cookies.get_dict())

walkIn = 'https://oapp.saskatoonhealthregion.ca/apex/f?p=175:1:10489813319958:::::'


walkInR = s.get(walkIn)
print("walk in request:")
print(walkInR)
print(s.cookies.get_dict())
soup = BeautifulSoup(walkInR.text, features="lxml")

options = soup.findAll('option')
print(options)

postURLForWait = 'https://oapp.saskatoonhealthregion.ca/apex/wwv_flow.ajax'


requestData = {'p_flow_id': 175,
'p_flow_step_id': 1,
'p_instance': 10489813319958,
'p_debug': False,
'p_request': 'PLUGIN=lsQCRK6EJKIW6lTCm44yXSH7WOBbtmMFHacwkkuro5ub_a1KxhYJV8IFkWgst8_9',
'p_json': {"pageItems":{"itemsToSubmit":[{"n":"P1_AREA","v":"Kindersley"}],"protected":"IZl8CyIOUKDjYXr826YIeqJ4ZvH4-TbnLiVOoeM853I","rowVersion":""},"salt":"212080446888475467097049047509913570441"}
}

PostLocationsAjax = {
    Accept':' application/json, text/javascript, */*; q=0.01
    Accept-Encoding: gzip, deflate, br
    Accept-Language: en-US,en;q=0.9
    Connection: keep-alive
    Content-Length: 430
    Content-Type: application/x-www-form-urlencoded; charset=UTF-8
    Cookie: ORA_WWV_APP_175=ORA_WWV-RBY54kBsyUjHDVwy2SW453dV
    Host: oapp.saskatoonhealthregion.ca
    Origin: https://oapp.saskatoonhealthregion.ca
    Referer: https://oapp.saskatoonhealthregion.ca/apex/f?p=175:1:7176913157489:::::
    sec-ch-ua: "Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"
    sec-ch-ua-mobile: ?0
    Sec-Fetch-Dest: empty
    Sec-Fetch-Mode: cors
    Sec-Fetch-Site: same-origin
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36
    X-Requested-With: XMLHttpRequest
}

postResultForWaitLocations = s.post(postURLForWait,data=requestData)

print(s.cookies.get_dict())
requestDataFlow = {
'p_flow_id': 175,
'p_flow_step_id': 1,
'p_instance': 10489813319958,
'p_debug': False,
'p_request': 'P1_SITE',
'p_reload_on_submit': 'S',
'p_page_submission_id': 116966926695650079950079306953854020106,
'p_json': {"pageItems":{"itemsToSubmit":[{"n":"P1_TODAY","v":"14-APR-2021 14:58","ck":"n3ym03UTboJUtz_MTFgDxNeQEqw"},{"n":"P1_AREA","v":"Kindersley"},{"n":"P1_SITE","v":""},{"n":"P1_NO_DATA","v":"Please check back later.","ck":"z5J-dbjN-lCkfjqnZHyPGRtn5Ws"}],"protected":"5ftfLBa0axSiYOBmTzna4fYqdqFw4dXpGe0CB05Lqu0","rowVersion":""},"salt":"116966926695650079950079306953854020106"}
}

LocationsFlow = 'https://oapp.saskatoonhealthregion.ca/apex/wwv_flow.accept'
postResultForWaitLocationsFlow = s.post(LocationsFlow,data=requestDataFlow)
print(s.cookies.get_dict())
print(postResultForWaitLocationsFlow.headers)

print(postResultForWaitLocationsFlow)

finalHeaders = {
    'Connection':'keep-alive',
    'Cache-Control':'max-age=0',
    'sec-ch-ua':'"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    'sec-ch-ua-mobile':'?0',
    'Upgrade-Insecure-Requests':'1',
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Sec-Fetch-Site':'same-origin',
    'Sec-Fetch-Mode':'navigate',
    'Sec-Fetch-User':'?1',
    'Sec-Fetch-Dest':'document',
    'Referer':'https://oapp.saskatoonhealthregion.ca/apex/f?p=175:1:10489813319958::NO:::',
    'Accept-Encoding':'gzip, deflate, br',
    'Accept-Language':'en-US,en;q=0.9',
}

r = s.get('https://oapp.saskatoonhealthregion.ca/apex/f?p=175:1:10489813319958::NO:::', headers=finalHeaders)

print(r.request.headers)

soup = BeautifulSoup(r.text, features="lxml")
print(soup.findAll('option'))
# print(r.text)

