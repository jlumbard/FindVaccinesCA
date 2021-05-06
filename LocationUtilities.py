import re
from math import sin, cos, sqrt, atan2, radians

# def dist_between_two_lat_lon(*args):
#     from math import asin, cos, radians, sin, sqrt
#     lat1, lat2, long1, long2 = map(radians, args)

#     dist_lats = abs(lat2 - lat1) 
#     dist_longs = abs(long2 - long1) 
#     a = sin(dist_lats/2)**2 + cos(lat1) * cos(lat2) * sin(dist_longs/2)**2
#     c = asin(sqrt(a)) * 2
#     radius_earth = 6378 # the "Earth radius" R varies from 6356.752 km at the poles to 6378.137 km at the equator.
#     return c * radius_earth


def dist_between_two_lat_lon_v2(lat1,lon1,lat2,lon2):

    # approximate radius of earth in km
    R = 6373.0

    lat1 = radians(lat1)
    lon1 = radians(lon1)
    lat2 = radians(lat2)
    lon2 = radians(lon2)

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c

    print("Result:", distance)
    return distance
    # print("Should be:", 278.546, "km")


def find_closest_lat_lon(data, v):
    data['distance'] = 10000

    for i, row in data.iterrows():
        print(data.at[i,'address'])
        distReturned = dist_between_two_lat_lon_v2(v['lat'], v['lon'], data.at[i,'lat'], data.at[i,'lon'])
        try:
            data.at[i,'distance'] = distReturned
        except:
            data.at[i,'distance'] = 100000 # hacky fix

    return data

def isCanadianAddress(address):
    

    postalCode = address
    #read First Line
    line = postalCode

    if re.search("[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]", line , re.IGNORECASE | re.DOTALL):
        print('Match found - valid Canadian address: ', line)
        return True
    else:
        print('Error - no match - invalid Canadian address:', line)
        return False