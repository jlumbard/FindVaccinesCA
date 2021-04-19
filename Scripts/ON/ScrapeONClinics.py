import requests
from bs4 import BeautifulSoup as bs


headers = {
    'authority': 'covid-19.ontario.ca',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    'sec-ch-ua-mobile': '?0',
    'referer': 'https://covid-19.ontario.ca/covid-19-vaccines-ontario',
    'accept-language': 'en-US,en;q=0.9',
    'cookie': '_ga=GA1.2.1508445344.1618084017; _gid=GA1.2.521039438.1618862333; _gat_UA-21003310-20=1',
}

response = requests.get('https://covid-19.ontario.ca/vaccine-locations/', headers=headers)

soup = bs(response.text)

allRows = soup.findAll('div',{'class':'ontario-assessment-centre-card__wrapper'})

splitText = "urn n}))},zNqT:function(e){e.exports=JSON.parse('"

# print(response.text)
print(response.text.find('www.rexall.ca'))
# print(len(allRows))

# whackClassName = "ontario-small-10 ontario-end ontario-columns ontario-assessment-centre-card__content ontario-assessment-centre__secondary-info ontario-assessment-centre__col-1-padding--left"
# for row in allRows:
#     print(row)
#     allinfo = row.findAll('div',{'class':whackClassName})
#     print(len(allinfo))
#     print(allinfo)