import pandas as pd
import json
import requests

headers = {
    'authority': 'api3.clicsante.ca',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    'accept': 'application/json, text/plain, */*',
    'authorization': 'Basic cHVibGljQHRyaW1vei5jb206MTIzNDU2Nzgh',
    'x-trimoz-role': 'public',
    'sec-ch-ua-mobile': '?0',
    'product': 'clicsante',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36',
    'origin': 'https://portal3.clicsante.ca',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://portal3.clicsante.ca/',
    'accept-language': 'en-US,en;q=0.9',
    'cookie': '_ga=GA1.2.973896744.1617993936; _gid=GA1.2.1124151031.1618868865; _gat=1',
}

params = (
    ('dateStart', '2021-04-19'),
    ('dateStop', '2021-08-17'),
    ('latitude', '46.8263944'),
    ('longitude', '-71.2464147'),
    ('maxDistance', '10000000'),
    ('serviceUnified', '237'),
    ('postalCode', 'H2Y'),
)

response = requests.get('https://api3.clicsante.ca/v3/availabilities', headers=headers, params=params)

#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.get('https://api3.clicsante.ca/v3/availabilities?dateStart=2021-04-19&dateStop=2021-08-17&latitude=45.5063944&longitude=-73.5544147&maxDistance=100000&serviceUnified=237&postalCode=H2Y%202Z7', headers=headers)


jsResp = json.loads(response.text)

df = pd.DataFrame(jsResp['establishments'])
print(df)

