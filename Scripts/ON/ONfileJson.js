(window.webpackJsonp=window.webpackJsonp||[]).push([
    [
        0
    ],
    {
        "+ar0":function(e,a,t){var n=t("P8UN");n(n.S+n.F*!t("QPJK"),
            "Object",
            {defineProperties:t("YmeT")
            })
        },
        "0HXF":function(e,a,t){
            "use strict";t.d(a,
            "a",(function(){return o
            }));var n={lastWeek: "'last' eeee 'at' p",yesterday: "'yesterday at' p",today: "'today at' p",tomorrow: "'tomorrow at' p",nextWeek: "eeee 'at' p",other: "P"
            };function o(e,a,t,o){return n[e
                ]
            }
        },
        "2W6z":function(e,a,t){
            "use strict";t("sC2a");var n=function(){};e.exports=n
        },
        "7Qib":function(e,a,t){
            "use strict";t.d(a,
            "h",(function(){return n
            })),t.d(a,
            "i",(function(){return o
            })),t.d(a,
            "a",(function(){return s
            })),t.d(a,
            "j",(function(){return r
            })),t.d(a,
            "b",(function(){return c
            })),t.d(a,
            "f",(function(){return v
            })),t.d(a,
            "g",(function(){return g
            })),t.d(a,
            "d",(function(){return Y
            })),t.d(a,
            "c",(function(){return N
            })),t.d(a,
            "e",(function(){return k
            })),t.d(a,
            "k",(function(){return C
            }));t("zGcK"),t("v9g0");function n(e){return e.reduce((function(e,a){var t=e.find((function(e){return e.title===(null==a?void 0:a.city.trim())
                    }));return t?t.centres.push(a):e.push({title:a.city.trim(),centres: [a
                        ]
                    }),e
                }),
                []).map((function(e){return e.centres=r(e.centres),e
                }))
            }function o(e){var a=e.latitude,t=e.longitude;return e.locationList.map((function(e){var n,o,s,i,r,d,c,p,l,u;return e.dist=(n=a,o=t,s=e.latitude,i=e.longitude,r="K",d=Math.PI*n/180,c=Math.PI*s/180,p=o-i,l=Math.PI*p/180,(u=Math.sin(d)*Math.sin(c)+Math.cos(d)*Math.cos(c)*Math.cos(l))>1&&(u=1),u=180*Math.acos(u)/Math.PI*60*1.1515,
                    "K"===r&&(u*=1.609344),
                    "N"===r&&(u*=.8684),u),e
                })).filter((function(e){return e.dist
                })).sort((function(e,a){return e.dist>a.dist?1: -1
                }))
            }function s(e){return e&&"yes"===(null==e?void 0:e.trim().toLowerCase())
            }function i(e){return s(e.pharmacy)?0:s(e.community_lab)?1: 2
            }function r(e){return e.sort((function(e,a){return i(e)>i(a)?1:i(e)<i(a)?-1:e.location_name>a.location_name?1: -1
                }))
            }t("sC2a"),t("HQhv");function d(e,a){if("00:00-00:00"===e)return"24 "+("fr"===a?"heures": "hours");var t=e.split("-").map((function(e){return function(e,a){var t=e.split(":").map((function(e){return parseInt(e,
                            10)
                        })),n=t[
                            0
                        ],o=t[
                            1
                        ];if("fr"===a)return o?n+" h "+o:n+" h";var s=n>11?"p.m.": "a.m.",i=0===n?12:n>12?n-12:n;return 12!==n||o||(s+=" (noon)"),n||o||(s+=" (midnight)"),o?i+":"+o+" "+s:i+" "+s
                    }(e,a)
                })),n=t[
                    0
                ],o=t[
                    1
                ];return n+" "+("fr"===a?"à": "to")+" "+o
            }var c=function(e,a){switch(null==e?void 0:e.trim().toLowerCase()){case"as needed":return"fr"===a?"comme requis": "as needed";case"closed":return"fr"===a?"fermé": "closed";default:var t=e.replace(/\s+/g,
                    "");if(-1===t.indexOf("&"))return d(e,a);var n=t.split("&").map((function(e){return d(e,a)
                    })),o=n[
                        0
                    ],s=n[
                        1
                    ];return o+" "+("fr"===a?"et": "and")+" "+s
                }
            },p=(t("rzGZ"),t("Dq+y"),t("8npG"),t("YbXK"),t("cFtU"),t("q1tI")),l=t.n(p),u=t("sWYD"),h=t("QVOa"),m=t("WmGZ"),y={en: "EEEE, -MMMM-MMM- dd",fr: "EEEE dd -MMMM-MMM-"
            },_={en:h.a,fr:m.a
            },w=[
                "Apr_2",
                "Apr_3",
                "Apr_4",
                "Apr_5"
            ];function v(){var e=new Date;return 3===e.getMonth()&&e.getDate()>0&&e.getDate()<6
            }function g(e){return w.some((function(a){return e[a
                    ]
                }))
            }function Y(e,a){return(t=new Date,Array.from(Array(7).keys()).map((function(e){return new Date(t).setDate(t.getDate()+e)
                }))).map((function(t){return function(e,a,t){var n=new Date(e),o=Object(u.a)(n,
                        "MMM")+"_"+n.getDate();if(3===n.getMonth()&&n.getDate()>1&&a[o
                        ])return f(n,t,a[o
                        ]);var s=a[Object(u.a)(n,
                            "EEEE").toLowerCase()
                        ]||"closed";return f(n,t,s)
                    }(t,e,a)
                }));var t
            }function f(e,a,t){var n=function(e){var a=e.split("-");return l.a.createElement("span",
                    null,a[
                        0
                    ],l.a.createElement("abbr",
                    {title:a[
                            1
                        ]
                    },a[
                        2
                    ]),a[
                        3
                    ])
                }(function(e,a){return Object(u.a)(e,y[a
                    ],
                    {locale:_[a
                        ]
                    })
                }(e,a)+("fr"===a?" ": "")+": ");return l.a.createElement("span",
                null,n,c(t,a))
            }t("WevN");var b={en: {callToConfirm: "Call to check if the centre tests all ages",allAges: "Can test all ages"
                },fr: {callToConfirm: "Téléphonez pour vérifier si le centre procède au dépistage chez tous les groupes d’âge",allAges: "Peut procéder au dépistage chez tous les groupes d’âge"
                }
            },N=function(e,a){if(!e)return b[a
                ].callToConfirm;var t=e.replace(" ",
                "");if("0y"===t||"0m"===t)return b[a
                ].allAges;var n=t.endsWith("m")?"m": "y";return function(e,a,t){return"en"===t?"Can test anyone over "+e+" "+("m"===a?"months": "1"===e?"year": "years")+" old": "Peut procéder au dépistage chez quiconque âgé de plus de "+e+" "+("m"===a?"mois": "1"===e?"an": "ans")
                }(t.substring(0,t.length-1),n,a)
            },k=function(e,a,t){return"fr"===t&&e[a+"_fr"
                ]||e[a
                ]
            };t("pJf4"),t("q8oJ"),t("m210"),t("4DPX"),t("gu/5"),t("eoYm");function S(e){return function(e){if(Array.isArray(e))return H(e)
                }(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)
                }(e)||function(e,a){if(!e)return;if("string"==typeof e)return H(e,a);var t=Object.prototype.toString.call(e).slice(8,
                    -1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?: 8|16|32)(?:Clamped)?Array$/.test(t))return H(e,a)
                }(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }function H(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t
                ]=e[t
                ];return n
            }var P=function(e){return e.reduce((function(e,a){return function(t){return e(t)&&a(t)
                    }
                }),(function(){return!0
                }))
            },O=function(e){return e.reduce((function(e,a){var t=a.filters.filter((function(e){return e.checked
                    })).map((function(e){return e.test
                    }));return t.length?[].concat(S(e),
                    [
                        {logic:a.logic,filters:S(t)
                        }
                    ]):e
                }),
                [])
            },M=function(e){return e.reduce((function(e,a){if(!a.filters||!a.filters.length)return e;var t=1===a.filters.length?a.filters[
                        0
                    ]: "or"===a.logic?a.filters.reduce((function(e,a){return function(t){return e(t)||a(t)
                        }
                    }),(function(){return!1
                    })):P(a.filters);return P([e,t
                    ])
                }),(function(){return!0
                }))
            };var C=function(e){var a=Object(p.useState)(e),t=a[
                    0
                ],n=a[
                    1
                ],o=Object(p.useState)(),s=o[
                    0
                ],i=o[
                    1
                ];return{filters:t,handleFilterChange:function(){for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o
                        ]=arguments[o
                        ];var s=!1,r=t.map((function(e){return{heading:e.heading,logic:e.logic,filters:e.filters.map((function(e){return a.includes(e.id)&&(e.checked=!e.checked),s=s||e.checked,e
                                }))
                            }
                        }));n(r),i(s?function(){return function(e){return M(O(r))(e)
                            }
                        }:null)
                    },clearAllFilters:function(){var e=t.map((function(e){return{heading:e.heading,logic:e.logic,filters:e.filters.map((function(e){return e.checked=!1,e
                                }))
                            }
                        }));n(e),i(null)
                    },aggregatedFilters:s
                }
            }
        },
        "9kja":function(e,a,t){},
        "9yz4":function(e){e.exports=JSON.parse('[
                {
                    "pcd": "P0R",
                    "loc": "Algoma Southwest (Blind River)",
                    "loc_fr": "Algoma Sud-Ouest(Blind River)",
                    "mun": "Algoma",
                    "lat": "46.5984",
                    "lng": "-83.0385"
                },
                {
                    "pcd": "N3P",
                    "loc": "Brantford Northeast",
                    "loc_fr": "Brantford Nord-Est",
                    "mun": "Brant",
                    "lat": "43.1818",
                    "lng": "-80.2367"
                },
                {
                    "pcd": "N3R",
                    "loc": "Brantford Central",
                    "loc_fr": "Brantford Central",
                    "mun": "Brant",
                    "lat": "43.1692",
                    "lng": "-80.2684"
                },
                {
                    "pcd": "N3S",
                    "loc": "Brantford Southeast",
                    "loc_fr": "Brantford Sud-Est",
                    "mun": "Brant",
                    "lat": "43.1394",
                    "lng": "-80.2357"
                },
                {
                    "pcd": "N3T",
                    "loc": "Brantford Southwest",
                    "loc_fr": "Brantford Sud-Ouest",
                    "mun": "Brant",
                    "lat": "43.131",
                    "lng": "-80.3254"
                },
                {
                    "pcd": "N3V",
                    "loc": "Brantford Northwest",
                    "loc_fr": "Brantford Nord-Ouest",
                    "mun": "Brant",
                    "lat": "43.1734",
                    "lng": "-80.298"
                },
                {
                    "pcd": "L0N",
                    "loc": "Dufferin County (Shelburne)",
                    "loc_fr": "Dufferin County (Shelburne)",
                    "mun": "Dufferin County",
                    "lat": "44.0317",
                    "lng": "-80.2068"
                },
                {
                    "pcd": "K0H",
                    "loc": "Frontenac County, Addington County, Loyalist Shores and Southwest Leeds (Inverary)",
                    "loc_fr": "Frontenac County, Addington County, Loyalist Shores and Sud-OuestLeeds (Inverary)",
                    "mun": "Frontenac County",
                    "lat": "44.7208",
                    "lng": "-76.8334"
                },
                {
                    "pcd": "L0P",
                    "loc": "Halton Regional Municipality (Campbellville)",
                    "loc_fr": "Halton Regional Municipality (Campbellville)",
                    "mun": "Halton",
                    "lat": "43.4906",
                    "lng": "-79.9998"
                },
                {
                    "pcd": "L9E",
                    "loc": "Milton",
                    "loc_fr": "Milton",
                    "mun": "Halton",
                    "lat": "43.5168",
                    "lng": "-79.8829"
                },
                {
                    "pcd": "L8E",
                    "loc": "Hamilton (Confederation Park / Nashdale / East Kentley / Riverdale / Lakely / Grayside / North Stoney Creek)",
                    "loc_fr": "Hamilton (Confederation Park / Nashdale / Est Kentley / Riverdale / Lakely / Grayside / Nord Stoney Creek)",
                    "mun": "Hamilton",
                    "lat": "43.2245",
                    "lng": "-79.6988"
                },
                {
                    "pcd": "L8G",
                    "loc": "Hamilton (Greenford / North Gershome / West Stoney Creek)",
                    "loc_fr": "Hamilton (Greenford / Nord Gershome / Ouest Stoney Creek)",
                    "mun": "Hamilton",
                    "lat": "43.2164",
                    "lng": "-79.7423"
                },
                {
                    "pcd": "L8H",
                    "loc": "Hamilton (West Kentley / McQuesten / Parkview / Hamilton Beach / East Industrial Sector / Normanhurst / Homeside / East Crown Point)",
                    "loc_fr": "Hamilton (Ouest Kentley / McQuesten / Parkview / Hamilton Beach / Est Industrial Sector / Normanhurst / Homeside / Est Crown Point)",
                    "mun": "Hamilton",
                    "lat": "43.2596",
                    "lng": "-79.7925"
                },
                {
                    "pcd": "L8J",
                    "loc": "Hamilton (East Albion Falls / South Stoney Creek)",
                    "loc_fr": "Hamilton (Est Albion Falls / Sud Stoney Creek)",
                    "mun": "Hamilton",
                    "lat": "43.1836",
                    "lng": "-79.721"
                },
                {
                    "pcd": "L8K",
                    "loc":"Hamilton (East Delta / Bartonville / Glenview / Rosedale / Lower King\'s Forest / Red Hill / Corman / Vincent / South Gershome)",
                    "loc_fr":"Hamilton (Est Delta / Bartonville / Glenview / Rosedale / Lower King\'s Forest / Red Hill / Corman / Vincent / Sud Gershome)",
                    "mun": "Hamilton",
                    "lat": "43.2211",
                    "lng": "-79.7994"
                },
                {
                    "pcd": "L8L",
                    "loc": "Hamilton (West Industrial Sector / West Crown Point / North Stipley / North Gibson / Landsdale / Keith / North End / Beasley)",
                    "loc_fr": "Hamilton (Ouest Industrial Sector / Ouest Crown Point / Nord Stipley / Nord Gibson / Landsdale / Keith / Nord End / Beasley)",
                    "mun": "Hamilton",
                    "lat": "43.2783",
                    "lng": "-79.8344"
                },
                {
                    "pcd": "L8M",
                    "loc": "Hamilton (West Delta / Blakeley / South Stipley / South Gibson / St. Clair)",
                    "loc_fr": "Hamilton (Ouest Delta / Blakeley / Sud Stipley / Sud Gibson / St. Clair)",
                    "mun": "Hamilton",
                    "lat": "43.2441",
                    "lng": "-79.8359"
                },
                {
                    "pcd": "L8N",
                    "loc": "Hamilton (Stinson / Corktown)",
                    "loc_fr": "Hamilton (Stinson / Corktown)",
                    "mun": "Hamilton",
                    "lat": "43.4017",
                    "lng": "-80.017"
                },
                {
                    "pcd": "L8P",
                    "loc": "Hamilton (Durand / Kirkendall / Chedoke Park)",
                    "loc_fr": "Hamilton (Durand / Kirkendall / Chedoke Park)",
                    "mun": "Hamilton",
                    "lat": "43.2514",
                    "lng": "-79.8925"
                },
                {
                    "pcd": "L8R",
                    "loc": "Hamilton (Central / Strathcona / South Dundurn)",
                    "loc_fr": "Hamilton (Central / Strathcona / Sud Dundurn)",
                    "mun": "Hamilton",
                    "lat": "43.2726",
                    "lng": "-79.8792"
                },
                {
                    "pcd": "L8S",
                    "loc": "Hamilton (Westdale / Cootes Paradise / Ainslie Wood)",
                    "loc_fr": "Hamilton (Ouestdale / Cootes Paradise / Ainslie Wood)",
                    "mun": "Hamilton",
                    "lat": "43.2606",
                    "lng": "-79.9161"
                },
                {
                    "pcd": "L8T",
                    "loc":"Hamilton (Sherwood / Huntington / Upper King\'s Forest / Lisgar / Berrisfield / Hampton Heights / Sunninghill)",
                    "loc_fr":"Hamilton (Sherwood / Huntington / Upper King\'s Forest / Lisgar / Berrisfield / Hampton Heights / Sunninghill)",
                    "mun": "Hamilton",
                    "lat": "43.2199",
                    "lng": "-79.8286"
                },
                {
                    "pcd": "L8V",
                    "loc": "Hamilton (Raleigh / Macassa / Lawfield / Thorner / Burkholme / Eastmount)",
                    "loc_fr": "Hamilton (Raleigh / Macassa / Lawfield / Thorner / Burkholme / Estmount)",
                    "mun": "Hamilton",
                    "lat": "43.2266",
                    "lng": "-79.8499"
                },
                {
                    "pcd": "L8W",
                    "loc": "Hamilton (West Albion Falls / Hannon / Rymal / Trenholme / Quinndale / Templemead / Broughton / Eleanor / Randall / Rushdale / Butler / East Chappel)",
                    "loc_fr": "Hamilton (Ouest Albion Falls / Hannon / Rymal / Trenholme / Quinndale / Templemead / Broughton / Eleanor / Randall / Rushdale / Butler / Est Chappel)",
                    "mun": "Hamilton",
                    "lat": "43.1958",
                    "lng": "-79.8458"
                },
                {
                    "pcd": "L9A",
                    "loc": "Hamilton (Crerar / Bruleville / Hill Park / Inch Park / Centremount / Balfour / Greeningdon / Jerome)",
                    "loc_fr": "Hamilton (Crerar / Bruleville / Hill Park / Inch Park / Centremount / Balfour / Greeningdon / Jerome)",
                    "mun": "Hamilton",
                    "lat": "43.2271",
                    "lng": "-79.871"
                },
                {
                    "pcd": "L9B",
                    "loc": "Hamilton (Barnstown / West Chappel / Allison / Ryckmans / Mewburn / Sheldon / Falkirk / Carpenter / Kennedy / Southwest Outskirts)",
                    "loc_fr": "Hamilton (Barnstown / Ouest Chappel / Allison / Ryckmans / Mewburn / Sheldon / Falkirk / Carpenter / Kennedy / Sud-OuestOutskirts)",
                    "mun": "Hamilton",
                    "lat": "43.2055",
                    "lng": "-79.9004"
                },
                {
                    "pcd": "L9C",
                    "loc": "Hamilton (Southam / Bonnington / Yeoville / Kernighan / Gourley / Rolston / Buchanan / Mohawk / Westcliffe / Gilbert / Gilkson / Gurnett / Fessenden / Mountview)",
                    "loc_fr": "Hamilton (Sudam / Bonnington / Yeoville / Kernighan / Gourley / Rolston / Buchanan / Mohawk / Ouestcliffe / Gilbert / Gilkson / Gurnett / Fessenden / Mountview)",
                    "mun": "Hamilton",
                    "lat": "43.2313",
                    "lng": "-79.9049"
                },
                {
                    "pcd": "K0L",
                    "loc": "Peterborough County and North Hastings County (Lakefield)",
                    "loc_fr": "Peterborough County and Nord Hastings County (Lakefield)",
                    "mun": "Peterborough County",
                    "lat": "44.7767",
                    "lng": "-77.9687"
                },
                {
                    "pcd": "K0J",
                    "loc": "Renfrew County and Lanark Highlands Township (Deep River)",
                    "loc_fr": "Renfrew County and Lanark Highlands Township (Deep River)",
                    "mun": "Renfrew County",
                    "lat": "45.6606",
                    "lng": "-77.5886"
                },
                {
                    "pcd": "M3K",
                    "loc": "Downsview East (CFB Toronto)",
                    "loc_fr": "Downsview Est (CFB Toronto)",
                    "mun": "Toronto",
                    "lat": "43.739",
                    "lng": "-79.4692"
                },
                {
                    "pcd": "M4E",
                    "loc": "East Toronto (The Beaches)",
                    "loc_fr": "Est Toronto (The Beaches)",
                    "mun": "Toronto",
                    "lat": "43.6784",
                    "lng": "-79.2941"
                },
                {
                    "pcd": "M4J",
                    "loc": "East Toronto (The Danforth East)",
                    "loc_fr": "Est Toronto (The Danforth Est)",
                    "mun": "Toronto",
                    "lat": "43.6872",
                    "lng": "-79.3368"
                },
                {
                    "pcd": "M4K",
                    "loc": "East Toronto (The Danforth West / Riverdale)",
                    "loc_fr": "Est Toronto (The Danforth Ouest / Riverdale)",
                    "mun": "Toronto",
                    "lat": "43.6803",
                    "lng": "-79.3538"
                },
                {
                    "pcd": "M4L",
                    "loc": "East Toronto (India Bazaar / The Beaches West)",
                    "loc_fr": "Est Toronto (India Bazaar / The Beaches Ouest)",
                    "mun": "Toronto",
                    "lat": "43.6693",
                    "lng": "-79.3155"
                },
                {
                    "pcd": "M4M",
                    "loc": "East Toronto (Studio District)",
                    "loc_fr": "Est Toronto (Studio District)",
                    "mun": "Toronto",
                    "lat": "43.6561",
                    "lng": "-79.3406"
                },
                {
                    "pcd": "M4N",
                    "loc": "Central Toronto (Lawrence Park East)",
                    "loc_fr": "Central Toronto (Lawrence Park Est)",
                    "mun": "Toronto",
                    "lat": "43.7301",
                    "lng": "-79.3935"
                },
                {
                    "pcd": "M4P",
                    "loc": "Central Toronto (Davisville North)",
                    "loc_fr": "Central Toronto (Davisville Nord)",
                    "mun": "Toronto",
                    "lat": "43.7135",
                    "lng": "-79.3887"
                },
                {
                    "pcd": "M4R",
                    "loc": "Central Toronto (North Toronto West)",
                    "loc_fr": "Central Toronto (Nord Toronto Ouest)",
                    "mun": "Toronto",
                    "lat": "43.7143",
                    "lng": "-79.4065"
                },
                {
                    "pcd": "M4S",
                    "loc": "Central Toronto (Davisville)",
                    "loc_fr": "Central Toronto (Davisville)",
                    "mun": "Toronto",
                    "lat": "43.702",
                    "lng": "-79.3853"
                },
                {
                    "pcd": "M4T",
                    "loc": "Central Toronto (Moore Park / Summerhill East)",
                    "loc_fr": "Central Toronto (Moore Park / Summerhill Est)",
                    "mun": "Toronto",
                    "lat": "43.6899",
                    "lng": "-79.3853"
                },
                {
                    "pcd": "M4V",
                    "loc": "Central Toronto (Summerhill West / Rathnelly / South Hill / Forest Hill SE / Deer Park)",
                    "loc_fr": "Central Toronto (Summerhill Ouest / Rathnelly / Sud Hill / Forest Hill SE / Deer Park)",
                    "mun": "Toronto",
                    "lat": "43.6861",
                    "lng": "-79.4025"
                },
                {
                    "pcd": "M4W",
                    "loc": "Downtown Toronto (Rosedale)",
                    "loc_fr": "Centre-ville de Toronto (Rosedale)",
                    "mun": "Toronto",
                    "lat": "43.6827",
                    "lng": "-79.373"
                },
                {
                    "pcd": "M4X",
                    "loc": "Downtown Toronto (St. James Town / Cabbagetown)",
                    "loc_fr": "Centre-ville de Toronto (St. James Town / Cabbagetown)",
                    "mun": "Toronto",
                    "lat": "43.6684",
                    "lng": "-79.3689"
                },
                {
                    "pcd": "M4Y",
                    "loc": "Downtown Toronto (Church and Wellesley)",
                    "loc_fr": "Centre-ville de Toronto (Church and Wellesley)",
                    "mun": "Toronto",
                    "lat": "43.6656",
                    "lng": "-79.383"
                },
                {
                    "pcd": "M5A",
                    "loc": "Downtown Toronto (Regent Park / Port of Toronto)",
                    "loc_fr": "Centre-ville de Toronto (Regent Park / Port of Toronto)",
                    "mun": "Toronto",
                    "lat": "43.6555",
                    "lng": "-79.3626"
                },
                {
                    "pcd": "M5B",
                    "loc": "Downtown Toronto (Ryerson)",
                    "loc_fr": "Centre-ville de Toronto (Ryerson)",
                    "mun": "Toronto",
                    "lat": "43.6572",
                    "lng": "-79.3783"
                },
                {
                    "pcd": "M5C",
                    "loc": "Downtown Toronto (St. James Park)",
                    "loc_fr": "Centre-ville de Toronto (St. James Park)",
                    "mun": "Toronto",
                    "lat": "43.6513",
                    "lng": "-79.3756"
                },
                {
                    "pcd": "M5E",
                    "loc": "Downtown Toronto (Berczy Park)",
                    "loc_fr": "Centre-ville de Toronto (Berczy Park)",
                    "mun": "Toronto",
                    "lat": "43.6456",
                    "lng": "-79.3754"
                },
                {
                    "pcd": "M5G",
                    "loc": "Downtown Toronto (Central Bay Street)",
                    "loc_fr": "Centre-ville de Toronto (Central Bay Street)",
                    "mun": "Toronto",
                    "lat": "43.6564",
                    "lng": "-79.386"
                },
                {
                    "pcd": "M5H",
                    "loc": "Downtown Toronto (Richmond / Adelaide / King)",
                    "loc_fr": "Centre-ville de Toronto (Richmond / Adelaide / King)",
                    "mun": "Toronto",
                    "lat": "43.6496",
                    "lng": "-79.3833"
                },
                {
                    "pcd": "M5J",
                    "loc": "Downtown Toronto (Harbourfront East / Union Station / Toronto Island)",
                    "loc_fr": "Centre-ville de Toronto (Harbourfront Est / Union Station / Toronto Island)",
                    "mun": "Toronto",
                    "lat": "43.623",
                    "lng": "-79.3936"
                },
                {
                    "pcd": "M5K",
                    "loc": "Downtown Toronto (Toronto Dominion Centre / Design Exchange)",
                    "loc_fr": "Centre-ville de Toronto (Toronto Dominion Centre / Design Exchange)",
                    "mun": "Toronto",
                    "lat": "43.6469",
                    "lng": "-79.3823"
                },
                {
                    "pcd": "M5L",
                    "loc": "Downtown Toronto (Commerce Court / Victoria Hotel)",
                    "loc_fr": "Centre-ville de Toronto (Commerce Court / Victoria Hotel)",
                    "mun": "Toronto",
                    "lat": "43.6492",
                    "lng": "-79.3823"
                },
                {
                    "pcd": "M5N",
                    "loc": "Central Toronto (Roselawn)",
                    "loc_fr": "Central Toronto (Roselawn)",
                    "mun": "Toronto",
                    "lat": "43.7113",
                    "lng": "-79.4195"
                },
                {
                    "pcd": "M5P",
                    "loc": "Central Toronto (Forest Hill North & West)",
                    "loc_fr": "Central Toronto (Forest Hill Nord & Ouest)",
                    "mun": "Toronto",
                    "lat": "43.6966",
                    "lng": "-79.412"
                },
                {
                    "pcd": "M5R",
                    "loc": "Central Toronto (The Annex / North Midtown / Yorkville)",
                    "loc_fr": "Central Toronto (The Annex / Nord Midtown / Yorkville)",
                    "mun": "Toronto",
                    "lat": "43.6736",
                    "lng": "-79.4035"
                },
                {
                    "pcd": "M5S",
                    "loc": "Downtown Toronto (University of Toronto / Harbord)",
                    "loc_fr": "Centre-ville de Toronto (University of Toronto / Harbord)",
                    "mun": "Toronto",
                    "lat": "43.6629",
                    "lng": "-79.3987"
                },
                {
                    "pcd": "M5T",
                    "loc": "Downtown Toronto (Kensington Market / Chinatown / Grange Park)",
                    "loc_fr": "Centre-ville de Toronto (Kensington Market / Chinatown / Grange Park)",
                    "mun": "Toronto",
                    "lat": "43.6541",
                    "lng": "-79.3978"
                },
                {
                    "pcd": "M5V",
                    "loc": "Downtown Toronto (CN Tower / King and Spadina / Railway Lands / Harbourfront West / Bathurst Quay / South Niagara / YTZ)",
                    "loc_fr": "Centre-ville de Toronto (CN Tower / King and Spadina / Railway Lands / Harbourfront Ouest / Bathurst Quay / Sud Niagara / YTZ)",
                    "mun": "Toronto",
                    "lat": "43.6404",
                    "lng": "-79.3995"
                },
                {
                    "pcd": "M5W",
                    "loc": "Downtown Toronto Stn A PO Boxes 25 The Esplanade (Enclave of M5E)",
                    "loc_fr": "Centre-ville de Toronto Stn A PO Boxes 25 The Esplanade (Enclave of M5E)",
                    "mun": "Toronto",
                    "lat": "43.6437",
                    "lng": "-79.3787"
                },
                {
                    "pcd": "M5X",
                    "loc": "Downtown Toronto (Underground city)",
                    "loc_fr": "Centre-ville de Toronto (Underground city)",
                    "mun": "Toronto",
                    "lat": "43.6492",
                    "lng": "-79.3823"
                },
                {
                    "pcd": "M6G",
                    "loc": "Downtown Toronto (Christie)",
                    "loc_fr": "Centre-ville de Toronto (Christie)",
                    "mun": "Toronto",
                    "lat": "43.6683",
                    "lng": "-79.4205"
                },
                {
                    "pcd": "M6H",
                    "loc": "West Toronto (Dufferin / Dovercourt Village)",
                    "loc_fr": "Ouest Toronto (Dufferin / Dovercourt Village)",
                    "mun": "Toronto",
                    "lat": "43.6655",
                    "lng": "-79.4378"
                },
                {
                    "pcd": "M6J",
                    "loc": "West Toronto (Rua Aþores / Trinity)",
                    "loc_fr": "Ouest Toronto (Rua Aþores / Trinity)",
                    "mun": "Toronto",
                    "lat": "43.648",
                    "lng": "-79.4177"
                },
                {
                    "pcd": "M6K",
                    "loc": "West Toronto (Brockton / Parkdale Village / Exhibition Place)",
                    "loc_fr": "Ouest Toronto (Brockton / Parkdale Village / Exhibition Place)",
                    "mun": "Toronto",
                    "lat": "43.6383",
                    "lng": "-79.4301"
                },
                {
                    "pcd": "M6P",
                    "loc": "West Toronto (High Park / The Junction South)",
                    "loc_fr": "Ouest Toronto (High Park / The Junction Sud)",
                    "mun": "Toronto",
                    "lat": "43.6605",
                    "lng": "-79.4633"
                },
                {
                    "pcd": "M6R",
                    "loc": "West Toronto (Parkdale / Roncesvalles Village)",
                    "loc_fr": "Ouest Toronto (Parkdale / Roncesvalles Village)",
                    "mun": "Toronto",
                    "lat": "43.6469",
                    "lng": "-79.4521"
                },
                {
                    "pcd": "M6S",
                    "loc": "West Toronto (Bloor West Village / Swansea)",
                    "loc_fr": "Ouest Toronto (Bloor Ouest Village / Swansea)",
                    "mun": "Toronto",
                    "lat": "43.6512",
                    "lng": "-79.4828"
                },
                {
                    "pcd": "M7Y",
                    "loc": "East Toronto Business Reply Mail Processing Centre 969 Eastern (Enclave of M4L)",
                    "loc_fr": "Est Toronto Business Reply Mail Processing Centre 969 Estern (Enclave of M4L)",
                    "mun": "Toronto",
                    "lat": "43.7804",
                    "lng": "-79.2505"
                },
                {
                    "pcd": "M8V",
                    "loc": "Etobicoke (New Toronto / Mimico South / Humber Bay Shores)",
                    "loc_fr": "Etobicoke (New Toronto / Mimico Sud / Humber Bay Shores)",
                    "mun": "Toronto",
                    "lat": "43.6075",
                    "lng": "-79.5013"
                },
                {
                    "pcd": "K1A",
                    "loc": "Government of Canada Ottawa and Gatineau offices",
                    "loc_fr": "Government of Canada Ottawa and Gatineau offices",
                    "mun": "Ottawa",
                    "lat": "45.4207",
                    "lng": "-75.7023"
                },
                {
                    "pcd": "K1G",
                    "loc": "Ottawa (Riverview / Hawthorne)",
                    "loc_fr": "Ottawa (Riverview / Hawthorne)",
                    "mun": "Ottawa",
                    "lat": "45.3548",
                    "lng": "-75.5773"
                },
                {
                    "pcd": "K1H",
                    "loc": "Ottawa (Alta Vista)",
                    "loc_fr": "Ottawa (Alta Vista)",
                    "mun": "Ottawa",
                    "lat": "45.3876",
                    "lng": "-75.6593"
                },
                {
                    "pcd": "K1K",
                    "loc": "Ottawa (Overbrook)",
                    "loc_fr": "Ottawa (Overbrook)",
                    "mun": "Ottawa",
                    "lat": "45.4448",
                    "lng": "-75.6431"
                },
                {
                    "pcd": "K1L",
                    "loc": "Ottawa (Vanier)",
                    "loc_fr": "Ottawa (Vanier)",
                    "mun": "Ottawa",
                    "lat": "45.44",
                    "lng": "-75.663"
                },
                {
                    "pcd": "K1M",
                    "loc": "Ottawa (Rockcliffe Park / New Edinburgh)",
                    "loc_fr": "Ottawa (Rockcliffe Park / New Edinburgh)",
                    "mun": "Ottawa",
                    "lat": "45.4491",
                    "lng": "-75.6818"
                },
                {
                    "pcd": "K1N",
                    "loc": "Ottawa (Lower Town / Sandy Hill / University of Ottawa)",
                    "loc_fr": "Ottawa (Lower Town / Sandy Hill / University of Ottawa)",
                    "mun": "Ottawa",
                    "lat": "45.4289",
                    "lng": "-75.6844"
                },
                {
                    "pcd": "K1P",
                    "loc": "Ottawa (Parliament Hill)",
                    "loc_fr": "Ottawa (Parliament Hill)",
                    "mun": "Ottawa",
                    "lat": "45.4225",
                    "lng": "-75.7026"
                },
                {
                    "pcd": "K1R",
                    "loc": "Ottawa (West Downtown area)",
                    "loc_fr": "Ottawa (Ouest Centre-ville de area)",
                    "mun": "Ottawa",
                    "lat": "45.4123",
                    "lng": "-75.7108"
                },
                {
                    "pcd": "K1S",
                    "loc": "Ottawa (The Glebe / Ottawa South / Ottawa East)",
                    "loc_fr": "Ottawa (The Glebe / Ottawa Sud / Ottawa Est)",
                    "mun": "Ottawa",
                    "lat": "45.399",
                    "lng": "-75.6871"
                },
                {
                    "pcd": "K1V",
                    "loc": "Ottawa (Riverside Park / Hunt Club West / Riverside South / YOW)",
                    "loc_fr": "Ottawa (Riverside Park / Hunt Club Ouest / Riverside Sud / YOW)",
                    "mun": "Ottawa",
                    "lat": "45.3281",
                    "lng": "-75.6719"
                },
                {
                    "pcd": "K1Y",
                    "loc": "Ottawa West",
                    "loc_fr": "Ottawa Ouest",
                    "mun": "Ottawa",
                    "lat": "45.4023",
                    "lng": "-75.7329"
                },
                {
                    "pcd": "K1Z",
                    "loc": "Ottawa (Westboro)",
                    "loc_fr": "Ottawa (Ouestboro)",
                    "mun": "Ottawa",
                    "lat": "45.3867",
                    "lng": "-75.7405"
                },
                {
                    "pcd": "K2A",
                    "loc": "Ottawa (Highland Park / Carlingwood)",
                    "loc_fr": "Ottawa (Highland Park / Carlingwood)",
                    "mun": "Ottawa",
                    "lat": "45.3805",
                    "lng": "-75.7636"
                },
                {
                    "pcd": "K2B",
                    "loc": "Ottawa (Britannia / Pinecrest)",
                    "loc_fr": "Ottawa (Britannia / Pinecrest)",
                    "mun": "Ottawa",
                    "lat": "45.3645",
                    "lng": "-75.7934"
                },
                {
                    "pcd": "K2C",
                    "loc": "Ottawa (Queensway / Copeland / Carlington / Carleton Heights)",
                    "loc_fr": "Ottawa (Queensway / Copeland / Carlington / Carleton Heights)",
                    "mun": "Ottawa",
                    "lat": "45.3679",
                    "lng": "-75.7381"
                },
                {
                    "pcd": "K2P",
                    "loc": "Ottawa (Centre Town)",
                    "loc_fr": "Ottawa (Centre Town)",
                    "mun": "Ottawa",
                    "lat": "45.4166",
                    "lng": "-75.6904"
                },
                {
                    "pcd": "K0A",
                    "loc": "National Capital Region (Almonte)",
                    "loc_fr": "National Capital Region (Almonte)",
                    "lat": "45.2557",
                    "lng": "-76.2754"
                },
                {
                    "pcd": "K0B",
                    "loc": "Prescott and Russell United Counties (Alfred)",
                    "loc_fr": "Prescott and Russell United Counties (Alfred)",
                    "lat": "45.5029",
                    "lng": "-74.7479"
                },
                {
                    "pcd": "K0C",
                    "loc": "Stormont, Dundas and Glengarry United Counties (Alexandria)",
                    "loc_fr": "Stormont, Dundas and Glengarry United Counties (Alexandria)",
                    "lat": "45.1686",
                    "lng": "-74.8966"
                },
                {
                    "pcd": "K0E",
                    "loc": "South Leeds and Grenville United Counties (Prescott)",
                    "loc_fr": "Sud Leeds and Grenville United Counties (Prescott)",
                    "lat": "44.8734",
                    "lng": "-75.4416"
                },
                {
                    "pcd": "K0G",
                    "loc": "Rideau Lakes area (Kemptville)",
                    "loc_fr": "Rideau Lakes area (Kemptville)",
                    "lat": "45.0466",
                    "lng": "-76.4757"
                },
                {
                    "pcd": "K0K",
                    "loc": "Quinte Shores, East Northumberland County & Prince Edward County (Picton)",
                    "loc_fr": "Quinte Shores, Est Nordumberland County & Prince Edward County (Picton)",
                    "lat": "44.3261",
                    "lng": "-77.4318"
                },
                {
                    "pcd": "K0M",
                    "loc": "Kawartha lakes and Haliburton County (Bobcaygeon)",
                    "loc_fr": "Kawartha lakes and Haliburton County (Bobcaygeon)",
                    "lat": "44.8645",
                    "lng": "-78.6553"
                },
                {
                    "pcd": "K1B",
                    "loc": "Gloucester (Blackburn Hamlet / Pine View)",
                    "loc_fr": "Gloucester (Blackburn Hamlet / Pine View)",
                    "mun": "Gloucester",
                    "lat": "45.4284",
                    "lng": "-75.5875"
                },
                {
                    "pcd": "K1C",
                    "loc": "Gloucester (West Orleans)",
                    "loc_fr": "Gloucester (Ouest Orleans)",
                    "mun": "Gloucester",
                    "lat": "45.4677",
                    "lng": "-75.5399"
                },
                {
                    "pcd": "K1E",
                    "loc": "Orleans (Queenswood)",
                    "loc_fr": "Orleans (Queenswood)",
                    "lat": "45.4771",
                    "lng": "-75.5046"
                },
                {
                    "pcd": "K1J",
                    "loc": "Gloucester (Beacon Hill / Cyrville)",
                    "loc_fr": "Gloucester (Beacon Hill / Cyrville)",
                    "mun": "Gloucester",
                    "lat": "45.4519",
                    "lng": "-75.6036"
                },
                {
                    "pcd": "K1T",
                    "loc": "Gloucester (Blossom Park / Hunt Club East / Leitrim)",
                    "loc_fr": "Gloucester (Blossom Park / Hunt Club Est / Leitrim)",
                    "mun": "Gloucester",
                    "lat": "45.3295",
                    "lng": "-75.6156"
                },
                {
                    "pcd": "K1W",
                    "loc": "Gloucester (South Orleans)",
                    "loc_fr": "Gloucester (Sud Orleans)",
                    "mun": "Gloucester",
                    "lat": "45.4365",
                    "lng": "-75.5158"
                },
                {
                    "pcd": "K1X",
                    "loc": "Gloucester South",
                    "loc_fr": "Gloucester Sud",
                    "mun": "Gloucester",
                    "lat": "45.2756",
                    "lng": "-75.6283"
                },
                {
                    "pcd": "K2E",
                    "loc": "Nepean East",
                    "loc_fr": "Nepean Est",
                    "mun": "Nepean",
                    "lat": "45.3438",
                    "lng": "-75.7157"
                },
                {
                    "pcd": "K2G",
                    "loc": "Nepean (Davidson Heights)",
                    "loc_fr": "Nepean (Davidson Heights)",
                    "mun": "Nepean",
                    "lat": "45.3211",
                    "lng": "-75.7391"
                },
                {
                    "pcd": "K2H",
                    "loc": "Nepean (Bells Corners)",
                    "loc_fr": "Nepean (Bells Corners)",
                    "mun": "Nepean",
                    "lat": "45.3433",
                    "lng": "-75.8265"
                },
                {
                    "pcd": "K2J",
                    "loc": "Nepean (Barrhaven)",
                    "loc_fr": "Nepean (Barrhaven)",
                    "mun": "Nepean",
                    "lat": "45.2691",
                    "lng": "-75.7518"
                },
                {
                    "pcd": "K2K",
                    "loc": "Kanata (Beaverbrook / South March)",
                    "loc_fr": "Kanata (Beaverbrook / Sud March)",
                    "mun": "Kanata",
                    "lat": "45.3704",
                    "lng": "-75.9198"
                },
                {
                    "pcd": "K2L",
                    "loc": "Kanata (Katimavik-Hazeldean / Glen Cairn)",
                    "loc_fr": "Kanata (Katimavik-Hazeldean / Glen Cairn)",
                    "mun": "Kanata",
                    "lat": "45.3001",
                    "lng": "-75.9244"
                },
                {
                    "pcd": "K2M",
                    "loc": "Kanata (Bridlewood)",
                    "loc_fr": "Kanata (Bridlewood)",
                    "mun": "Kanata",
                    "lat": "45.2861",
                    "lng": "-75.8562"
                },
                {
                    "pcd": "K2R",
                    "loc": "Nepean (Fallowfield Village / Cedarhill Estates / Orchard Estates)",
                    "loc_fr": "Nepean (Fallowfield Village / Cedarhill Estates / Orchard Estates)",
                    "mun": "Nepean",
                    "lat": "45.2899",
                    "lng": "-75.8126"
                },
                {
                    "pcd": "K2S",
                    "loc": "Stittsville",
                    "loc_fr": "Stittsville",
                    "lat": "45.2501",
                    "lng": "-75.9161"
                },
                {
                    "pcd": "K2T",
                    "loc": "Kanata (Marchwood)",
                    "loc_fr": "Kanata (Marchwood)",
                    "mun": "Kanata",
                    "lat": "45.317",
                    "lng": "-75.9367"
                },
                {
                    "pcd": "K2V",
                    "loc": "Kanata (Terry Fox / Palladium)",
                    "loc_fr": "Kanata (Terry Fox / Palladium)",
                    "mun": "Kanata",
                    "lat": "45.2854",
                    "lng": "-75.8928"
                },
                {
                    "pcd": "K2W",
                    "loc": "Kanata (North March)",
                    "loc_fr": "Kanata (Nord March)",
                    "mun": "Kanata",
                    "lat": "45.3699",
                    "lng": "-75.9887"
                },
                {
                    "pcd": "K4A",
                    "loc": "Orleans (Fallingbrook)",
                    "loc_fr": "Orleans (Fallingbrook)",
                    "lat": "45.4697",
                    "lng": "-75.4715"
                },
                {
                    "pcd": "K4B",
                    "loc": "Cumberland Township",
                    "loc_fr": "Cumberland Township",
                    "lat": "45.4101",
                    "lng": "-75.3638"
                },
                {
                    "pcd": "K4C",
                    "loc": "Cumberland",
                    "loc_fr": "Cumberland",
                    "lat": "45.498",
                    "lng": "-75.3916"
                },
                {
                    "pcd": "K4K",
                    "loc": "Rockland",
                    "loc_fr": "Rockland",
                    "lat": "45.5501",
                    "lng": "-75.291"
                },
                {
                    "pcd": "K4M",
                    "loc": "Manotick",
                    "loc_fr": "Manotick",
                    "lat": "45.2154",
                    "lng": "-75.6528"
                },
                {
                    "pcd": "K4P",
                    "loc": "Greely",
                    "loc_fr": "Greely",
                    "lat": "45.2434",
                    "lng": "-75.5674"
                },
                {
                    "pcd": "K4R",
                    "loc": "Russell",
                    "loc_fr": "Russell",
                    "lat": "45.2388",
                    "lng": "-75.3527"
                },
                {
                    "pcd": "K6A",
                    "loc": "Hawkesbury",
                    "loc_fr": "Hawkesbury",
                    "lat": "45.6001",
                    "lng": "-74.616"
                },
                {
                    "pcd": "K6H",
                    "loc": "Cornwall East",
                    "loc_fr": "Cornwall Est",
                    "mun": "Cornwall",
                    "lat": "45.0565",
                    "lng": "-74.6852"
                },
                {
                    "pcd": "K6J",
                    "loc": "Cornwall West",
                    "loc_fr": "Cornwall Ouest",
                    "mun": "Cornwall",
                    "lat": "45.0223",
                    "lng": "-74.7569"
                },
                {
                    "pcd": "K6K",
                    "loc": "Cornwall North",
                    "loc_fr": "Cornwall Nord",
                    "mun": "Cornwall",
                    "lat": "45.061",
                    "lng": "-74.7774"
                },
                {
                    "pcd": "K6T",
                    "loc": "Elizabethtown",
                    "loc_fr": "Elizabethtown",
                    "lat": "44.6301",
                    "lng": "-75.7448"
                },
                {
                    "pcd": "K6V",
                    "loc": "Brockville",
                    "loc_fr": "Brockville",
                    "lat": "44.6573",
                    "lng": "-75.7146"
                },
                {
                    "pcd": "K7A",
                    "loc": "Smiths Falls",
                    "loc_fr": "Smiths Falls",
                    "lat": "44.9001",
                    "lng": "-76.0161"
                },
                {
                    "pcd": "K7C",
                    "loc": "Carleton Place",
                    "loc_fr": "Carleton Place",
                    "lat": "45.1334",
                    "lng": "-76.1494"
                },
                {
                    "pcd": "K7G",
                    "loc": "Gananoque",
                    "loc_fr": "Gananoque",
                    "lat": "44.3334",
                    "lng": "-76.1661"
                },
                {
                    "pcd": "K7H",
                    "loc": "Perth",
                    "loc_fr": "Perth",
                    "lat": "44.9001",
                    "lng": "-76.2494"
                },
                {
                    "pcd": "K7K",
                    "loc": "Kingston (SW Pittsburgh Township)",
                    "loc_fr": "Kingston (SW Pittsburgh Township)",
                    "mun": "Kingston",
                    "lat": "44.2569",
                    "lng": "-76.4717"
                },
                {
                    "pcd": "K7L",
                    "loc": "Kingston (Downtown)",
                    "loc_fr": "Kingston (Centre-ville de)",
                    "mun": "Kingston",
                    "lat": "44.2955",
                    "lng": "-76.428"
                },
                {
                    "pcd": "K7M",
                    "loc": "Kingston (Reddendale / Cataraqui / Collins Bay)",
                    "loc_fr": "Kingston (Reddendale / Cataraqui / Collins Bay)",
                    "mun": "Kingston",
                    "lat": "44.2411",
                    "lng": "-76.5788"
                },
                {
                    "pcd": "K7N",
                    "loc": "Amherstview",
                    "loc_fr": "Amherstview",
                    "lat": "44.2224",
                    "lng": "-76.65"
                },
                {
                    "pcd": "K7P",
                    "loc": "Kingston (Westbrook / Cataraqui Woods / Cedarwood)",
                    "loc_fr": "Kingston (Ouestbrook / Cataraqui Woods / Cedarwood)",
                    "mun": "Kingston",
                    "lat": "44.2814",
                    "lng": "-76.6111"
                },
                {
                    "pcd": "K7R",
                    "loc": "Napanee",
                    "loc_fr": "Napanee",
                    "lat": "44.2501",
                    "lng": "-76.9494"
                },
                {
                    "pcd": "K7S",
                    "loc": "Arnprior",
                    "loc_fr": "Arnprior",
                    "lat": "45.4334",
                    "lng": "-76.3494"
                },
                {
                    "pcd": "K7V",
                    "loc": "Renfrew",
                    "loc_fr": "Renfrew",
                    "lat": "45.4668",
                    "lng": "-76.6827"
                },
                {
                    "pcd": "K8A",
                    "loc": "Pembroke Central and northern subdivisions",
                    "loc_fr": "Pembroke Central and Nordern subdivisions",
                    "mun": "Pembroke",
                    "lat": "45.7466",
                    "lng": "-77.2047"
                },
                {
                    "pcd": "K8B",
                    "loc": "Pembroke (Pleasant View / Fairview)",
                    "loc_fr": "Pembroke (Pleasant View / Fairview)",
                    "mun": "Pembroke",
                    "lat": "45.808",
                    "lng": "-77.0806"
                },
                {
                    "pcd": "K8H",
                    "loc": "Petawawa",
                    "loc_fr": "Petawawa",
                    "lat": "45.8945",
                    "lng": "-77.2801"
                },
                {
                    "pcd": "K8N",
                    "loc": "Belleville East",
                    "loc_fr": "Belleville Est",
                    "mun": "Belleville",
                    "lat": "44.1735",
                    "lng": "-77.3684"
                },
                {
                    "pcd": "K8P",
                    "loc": "Belleville West",
                    "loc_fr": "Belleville Ouest",
                    "mun": "Belleville",
                    "lat": "44.1665",
                    "lng": "-77.4037"
                },
                {
                    "pcd": "K8R",
                    "loc": "Belleville (SE Sidney Township / Avondale)",
                    "loc_fr": "Belleville (SE Sidney Township / Avondale)",
                    "mun": "Belleville",
                    "lat": "44.1399",
                    "lng": "-77.4683"
                },
                {
                    "pcd": "K8V",
                    "loc": "Trenton",
                    "loc_fr": "Trenton",
                    "lat": "44.0992",
                    "lng": "-77.5776"
                },
                {
                    "pcd": "K9A",
                    "loc": "Cobourg",
                    "loc_fr": "Cobourg",
                    "lat": "43.9598",
                    "lng": "-78.1651"
                },
                {
                    "pcd": "K9H",
                    "loc": "Peterborough North",
                    "loc_fr": "Peterborough Nord",
                    "mun": "Peterborough",
                    "lat": "44.3245",
                    "lng": "-78.3184"
                },
                {
                    "pcd": "K9J",
                    "loc": "Peterborough South",
                    "loc_fr": "Peterborough Sud",
                    "mun": "Peterborough",
                    "lat": "44.3104",
                    "lng": "-78.2396"
                },
                {
                    "pcd": "K9K",
                    "loc": "Peterborough (Fairbairn Meadows / Jackson Heights)",
                    "loc_fr": "Peterborough (Fairbairn Meadows / Jackson Heights)",
                    "mun": "Peterborough",
                    "lat": "44.3138",
                    "lng": "-78.3606"
                },
                {
                    "pcd": "K9L",
                    "loc": "Peterborough (Terra View Heights / Woodland Acres / Donwood)",
                    "loc_fr": "Peterborough (Terra View Heights / Woodland Acres / Donwood)",
                    "mun": "Peterborough",
                    "lat": "44.3552",
                    "lng": "-78.3199"
                },
                {
                    "pcd": "K9V",
                    "loc": "Lindsay",
                    "loc_fr": "Lindsay",
                    "lat": "44.3501",
                    "lng": "-78.7329"
                },
                {
                    "pcd": "L0A",
                    "loc": "West Northumberland County (Millbrook)",
                    "loc_fr": "Ouest Nordumberland County (Millbrook)",
                    "lat": "44.1263",
                    "lng": "-78.5193"
                },
                {
                    "pcd": "L0B",
                    "loc": "East Durham Regional Municipality (Orono)",
                    "loc_fr": "Est Durham Regional Municipality (Orono)",
                    "lat": "44.0773",
                    "lng": "-78.7465"
                },
                {
                    "pcd": "L0C",
                    "loc": "West Durham Regional Municipality (Sunderland)",
                    "loc_fr": "Ouest Durham Regional Municipality (Sunderland)",
                    "lat": "44.2094",
                    "lng": "-79.0725"
                },
                {
                    "pcd": "L0E",
                    "loc": "Lake Simcoe Southeast Shore (Sutton West)",
                    "loc_fr": "Lake Simcoe Sud-Est Shore (Sutton Ouest)",
                    "mun": "Lake Simcoe",
                    "lat": "44.3199",
                    "lng": "-79.2778"
                },
                {
                    "pcd": "L0G",
                    "loc": "Ontario Centre (Queensville)",
                    "loc_fr": "Ontario Centre (Queensville)",
                    "lat": "44.0586",
                    "lng": "-79.6235"
                },
                {
                    "pcd": "L0H",
                    "loc": "Whitby Region (Gormley)",
                    "loc_fr": "Whitby Region (Gormley)",
                    "lat": "43.9023",
                    "lng": "-79.1554"
                },
                {
                    "pcd": "L0J",
                    "loc": "North Peel Regional Municipality (Kleinburg)",
                    "loc_fr": "Nord Peel Regional Municipality (Kleinburg)",
                    "lat": "43.8566",
                    "lng": "-79.6485"
                },
                {
                    "pcd": "L0K",
                    "loc": "Lake Simcoe North Shore (Coldwater)",
                    "loc_fr": "Lake Simcoe Nord Shore (Coldwater)",
                    "mun": "Lake Simcoe",
                    "lat": "44.6233",
                    "lng": "-79.1235"
                },
                {
                    "pcd": "L0L",
                    "loc": "Lake Simcoe West Shore (Oro)",
                    "loc_fr": "Lake Simcoe Ouest Shore (Oro)",
                    "mun": "Lake Simcoe",
                    "lat": "44.4548",
                    "lng": "-79.7352"
                },
                {
                    "pcd": "L0M",
                    "loc": "Georgian Bay South Shore (Angus)",
                    "loc_fr": "Georgian Bay Sud Shore (Angus)",
                    "lat": "44.3269",
                    "lng": "-80.0333"
                },
                {
                    "pcd": "L0R",
                    "loc": "East Haldimand County (Waterdown)",
                    "loc_fr": "Est Haldimand County (Waterdown)",
                    "lat": "43.1607",
                    "lng": "-79.7463"
                },
                {
                    "pcd": "L0S",
                    "loc": "Niagara Regional Municipality (Fonthill)",
                    "loc_fr": "Niagara Regional Municipality (Fonthill)",
                    "lat": "42.9071",
                    "lng": "-79.0832"
                },
                {
                    "pcd": "L0V",
                    "loc": "Westminster Abbey",
                    "loc_fr": "Ouestminster Abbey",
                    "lat": "45.4689",
                    "lng": "-75.0079"
                },
                {
                    "pcd": "L1A",
                    "loc": "Port Hope",
                    "loc_fr": "Port Hope",
                    "lat": "44.0168",
                    "lng": "-78.3995"
                },
                {
                    "pcd": "L1B",
                    "loc": "Bowmanville East",
                    "loc_fr": "Bowmanville Est",
                    "mun": "Bowmanville",
                    "lat": "43.9235",
                    "lng": "-78.5457"
                },
                {
                    "pcd": "L1C",
                    "loc": "Bowmanville West",
                    "loc_fr": "Bowmanville Ouest",
                    "mun": "Bowmanville",
                    "lat": "43.9714",
                    "lng": "-78.7095"
                },
                {
                    "pcd": "L1E",
                    "loc": "Courtice",
                    "loc_fr": "Courtice",
                    "lat": "43.8969",
                    "lng": "-78.7683"
                },
                {
                    "pcd": "L1G",
                    "loc": "Oshawa Central",
                    "loc_fr": "Oshawa Central",
                    "mun": "Oshawa",
                    "lat": "43.9233",
                    "lng": "-78.8684"
                },
                {
                    "pcd": "L1H",
                    "loc": "Oshawa Southeast",
                    "loc_fr": "Oshawa Sud-Est",
                    "mun": "Oshawa",
                    "lat": "43.9721",
                    "lng": "-78.8837"
                },
                {
                    "pcd": "L1J",
                    "loc": "Oshawa Southwest",
                    "loc_fr": "Oshawa Sud-Ouest",
                    "mun": "Oshawa",
                    "lat": "43.8852",
                    "lng": "-78.8771"
                },
                {
                    "pcd": "L1K",
                    "loc": "Oshawa East",
                    "loc_fr": "Oshawa Est",
                    "mun": "Oshawa",
                    "lat": "43.9251",
                    "lng": "-78.8287"
                },
                {
                    "pcd": "L1L",
                    "loc": "Oshawa North",
                    "loc_fr": "Oshawa Nord",
                    "mun": "Oshawa",
                    "lat": "43.9581",
                    "lng": "-78.8972"
                },
                {
                    "pcd": "L1M",
                    "loc": "Whitby North",
                    "loc_fr": "Whitby Nord",
                    "mun": "Whitby",
                    "lat": "43.9566",
                    "lng": "-78.9779"
                },
                {
                    "pcd": "L1N",
                    "loc": "Whitby Southeast",
                    "loc_fr": "Whitby Sud-Est",
                    "mun": "Whitby",
                    "lat": "43.8721",
                    "lng": "-78.9273"
                },
                {
                    "pcd": "L1P",
                    "loc": "Whitby Southwest",
                    "loc_fr": "Whitby Sud-Ouest",
                    "mun": "Whitby",
                    "lat": "43.8866",
                    "lng": "-78.975"
                },
                {
                    "pcd": "L1R",
                    "loc": "Whitby Central",
                    "loc_fr": "Whitby Central",
                    "mun": "Whitby",
                    "lat": "43.9215",
                    "lng": "-78.9412"
                },
                {
                    "pcd": "L1S",
                    "loc": "Ajax Southwest",
                    "loc_fr": "Ajax Sud-Ouest",
                    "mun": "Ajax",
                    "lat": "43.8404",
                    "lng": "-79.0251"
                },
                {
                    "pcd": "L1T",
                    "loc": "Ajax Northwest",
                    "loc_fr": "Ajax Nord-Ouest",
                    "mun": "Ajax",
                    "lat": "43.8843",
                    "lng": "-79.0534"
                },
                {
                    "pcd": "L1V",
                    "loc": "Pickering Southwest",
                    "loc_fr": "Pickering Sud-Ouest",
                    "mun": "Pickering",
                    "lat": "43.8605",
                    "lng": "-79.1618"
                },
                {
                    "pcd": "L1W",
                    "loc": "Pickering South",
                    "loc_fr": "Pickering Sud",
                    "mun": "Pickering",
                    "lat": "43.8197",
                    "lng": "-79.0803"
                },
                {
                    "pcd": "L1X",
                    "loc": "Pickering Central",
                    "loc_fr": "Pickering Central",
                    "mun": "Pickering",
                    "lat": "43.8558",
                    "lng": "-79.0972"
                },
                {
                    "pcd": "L1Y",
                    "loc": "Pickering North",
                    "loc_fr": "Pickering Nord",
                    "mun": "Pickering",
                    "lat": "43.9555",
                    "lng": "-79.1194"
                },
                {
                    "pcd": "L1Z",
                    "loc": "Ajax East",
                    "loc_fr": "Ajax Est",
                    "mun": "Ajax",
                    "lat": "43.8773",
                    "lng": "-79.0055"
                },
                {
                    "pcd": "L2A",
                    "loc": "Fort Erie",
                    "loc_fr": "Fort Erie",
                    "lat": "42.9001",
                    "lng": "-78.9329"
                },
                {
                    "pcd": "L2E",
                    "loc": "Niagara Falls Central",
                    "loc_fr": "Niagara Falls Central",
                    "mun": "Niagara Falls",
                    "lat": "43.0537",
                    "lng": "-79.1018"
                },
                {
                    "pcd": "L2G",
                    "loc": "Niagara Falls Southeast",
                    "loc_fr": "Niagara Falls Sud-Est",
                    "mun": "Niagara Falls",
                    "lat": "43.0696",
                    "lng": "-79.0818"
                },
                {
                    "pcd": "L2H",
                    "loc": "Niagara Falls West",
                    "loc_fr": "Niagara Falls Ouest",
                    "mun": "Niagara Falls",
                    "lat": "43.1009",
                    "lng": "-79.1379"
                },
                {
                    "pcd": "L2J",
                    "loc": "Niagara Falls North",
                    "loc_fr": "Niagara Falls Nord",
                    "mun": "Niagara Falls",
                    "lat": "43.1296",
                    "lng": "-79.1034"
                },
                {
                    "pcd": "L2M",
                    "loc": "St. Catharines Northeast",
                    "loc_fr": "St. Catharines Nord-Est",
                    "mun": "St. Catharines",
                    "lat": "43.196",
                    "lng": "-79.2161"
                },
                {
                    "pcd": "L2N",
                    "loc": "St. Catharines Northwest",
                    "loc_fr": "St. Catharines Nord-Ouest",
                    "mun": "St. Catharines",
                    "lat": "43.1923",
                    "lng": "-79.2559"
                },
                {
                    "pcd": "L2P",
                    "loc": "St. Catharines East",
                    "loc_fr": "St. Catharines Est",
                    "mun": "St. Catharines",
                    "lat": "43.1527",
                    "lng": "-79.2091"
                },
                {
                    "pcd": "L2R",
                    "loc": "St. Catharines Central",
                    "loc_fr": "St. Catharines Central",
                    "mun": "St. Catharines",
                    "lat": "43.1419",
                    "lng": "-79.2966"
                },
                {
                    "pcd": "L2S",
                    "loc": "St. Catharines Southwest",
                    "loc_fr": "St. Catharines Sud-Ouest",
                    "mun": "St. Catharines",
                    "lat": "43.1447",
                    "lng": "-79.2634"
                },
                {
                    "pcd": "L2T",
                    "loc": "St. Catharines South",
                    "loc_fr": "St. Catharines Sud",
                    "mun": "St. Catharines",
                    "lat": "43.1313",
                    "lng": "-79.2317"
                },
                {
                    "pcd": "L2V",
                    "loc": "St. Catharines Southeast",
                    "loc_fr": "St. Catharines Sud-Est",
                    "mun": "St. Catharines",
                    "lat": "43.1142",
                    "lng": "-79.2035"
                },
                {
                    "pcd": "L2W",
                    "loc": "St. Catharines West",
                    "loc_fr": "St. Catharines Ouest",
                    "mun": "St. Catharines",
                    "lat": "43.1688",
                    "lng": "-79.2794"
                },
                {
                    "pcd": "L3B",
                    "loc": "Welland East",
                    "loc_fr": "Welland Est",
                    "mun": "Welland",
                    "lat": "42.9878",
                    "lng": "-79.2219"
                },
                {
                    "pcd": "L3C",
                    "loc": "Welland West",
                    "loc_fr": "Welland Ouest",
                    "mun": "Welland",
                    "lat": "42.9998",
                    "lng": "-79.2656"
                },
                {
                    "pcd": "L3K",
                    "loc": "Port Colborne",
                    "loc_fr": "Port Colborne",
                    "lat": "42.9001",
                    "lng": "-79.2329"
                },
                {
                    "pcd": "L3M",
                    "loc": "Grimsby",
                    "loc_fr": "Grimsby",
                    "lat": "43.2001",
                    "lng": "-79.5663"
                },
                {
                    "pcd": "L3P",
                    "loc": "Markham Central",
                    "loc_fr": "Markham Central",
                    "mun": "Markham",
                    "lat": "43.8769",
                    "lng": "-79.2686"
                },
                {
                    "pcd": "L3R",
                    "loc": "Markham Outer Southwest",
                    "loc_fr": "Markham Outer Sud-Ouest",
                    "mun": "Markham",
                    "lat": "43.8479",
                    "lng": "-79.3288"
                },
                {
                    "pcd": "L3S",
                    "loc": "Markham Southeast",
                    "loc_fr": "Markham Sud-Est",
                    "mun": "Markham",
                    "lat": "43.8486",
                    "lng": "-79.2617"
                },
                {
                    "pcd": "L3T",
                    "loc": "Thornhill East",
                    "loc_fr": "Thornhill Est",
                    "lat": "43.8227",
                    "lng": "-79.3946"
                },
                {
                    "pcd": "L3V",
                    "loc": "Orillia",
                    "loc_fr": "Orillia",
                    "lat": "44.6087",
                    "lng": "-79.4207"
                },
                {
                    "pcd": "L3X",
                    "loc": "Newmarket Southwest",
                    "loc_fr": "Newmarket Sud-Ouest",
                    "mun": "Newmarket",
                    "lat": "44.0433",
                    "lng": "-79.4912"
                },
                {
                    "pcd": "L3Y",
                    "loc": "Newmarket Northeast",
                    "loc_fr": "Newmarket Nord-Est",
                    "mun": "Newmarket",
                    "lat": "44.0565",
                    "lng": "-79.4555"
                },
                {
                    "pcd": "L3Z",
                    "loc": "Bradford",
                    "loc_fr": "Bradford",
                    "lat": "44.1168",
                    "lng": "-79.5663"
                },
                {
                    "pcd": "L4A",
                    "loc": "Stouffville",
                    "loc_fr": "Stouffville",
                    "lat": "43.9668",
                    "lng": "-79.2496"
                },
                {
                    "pcd": "L4B",
                    "loc": "Richmond Hill Southeast",
                    "loc_fr": "Richmond Hill Sud-Est",
                    "mun": "Richmond Hill",
                    "lat": "43.8582",
                    "lng": "-79.3985"
                },
                {
                    "pcd": "L4C",
                    "loc": "Richmond Hill Southwest",
                    "loc_fr": "Richmond Hill Sud-Ouest",
                    "mun": "Richmond Hill",
                    "lat": "43.8669",
                    "lng": "-79.4414"
                },
                {
                    "pcd": "L4E",
                    "loc": "Richmond Hill North",
                    "loc_fr": "Richmond Hill Nord",
                    "mun": "Richmond Hill",
                    "lat": "43.9394",
                    "lng": "-79.4349"
                },
                {
                    "pcd": "L4G",
                    "loc": "Aurora",
                    "loc_fr": "Aurora",
                    "lat": "44.0001",
                    "lng": "-79.4663"
                },
                {
                    "pcd": "L4H",
                    "loc": "Woodbridge North",
                    "loc_fr": "Woodbridge Nord",
                    "mun": "Woodbridge",
                    "lat": "43.8432",
                    "lng": "-79.5644"
                },
                {
                    "pcd": "L4J",
                    "loc": "Thornhill West",
                    "loc_fr": "Thornhill Ouest",
                    "lat": "43.8156",
                    "lng": "-79.4534"
                },
                {
                    "pcd": "L4K",
                    "loc": "Concord",
                    "loc_fr": "Concord",
                    "lat": "43.8001",
                    "lng": "-79.4829"
                },
                {
                    "pcd": "L4L",
                    "loc": "Woodbridge South",
                    "loc_fr": "Woodbridge Sud",
                    "mun": "Woodbridge",
                    "lat": "43.8064",
                    "lng": "-79.5995"
                },
                {
                    "pcd": "L4M",
                    "loc": "Barrie North",
                    "loc_fr": "Barrie Nord",
                    "mun": "Barrie",
                    "lat": "44.4001",
                    "lng": "-79.6663"
                },
                {
                    "pcd": "L4N",
                    "loc": "Barrie South",
                    "loc_fr": "Barrie Sud",
                    "mun": "Barrie",
                    "lat": "44.3572",
                    "lng": "-79.6929"
                },
                {
                    "pcd": "L4P",
                    "loc": "Keswick",
                    "loc_fr": "Keswick",
                    "lat": "44.2501",
                    "lng": "-79.4663"
                },
                {
                    "pcd": "L4R",
                    "loc": "Midland",
                    "loc_fr": "Midland",
                    "lat": "44.7501",
                    "lng": "-79.883"
                },
                {
                    "pcd": "L4S",
                    "loc": "Richmond Hill Central",
                    "loc_fr": "Richmond Hill Central",
                    "mun": "Richmond Hill",
                    "lat": "43.8985",
                    "lng": "-79.4143"
                },
                {
                    "pcd": "L4T",
                    "loc": "Mississauga (Malton)",
                    "loc_fr": "Mississauga (Malton)",
                    "mun": "Mississauga",
                    "lat": "43.7139",
                    "lng": "-79.6434"
                },
                {
                    "pcd": "L4V",
                    "loc": "Mississauga (Wildwood)",
                    "loc_fr": "Mississauga (Wildwood)",
                    "mun": "Mississauga",
                    "lat": "43.6935",
                    "lng": "-79.6069"
                },
                {
                    "pcd": "L4W",
                    "loc": "Mississauga (Matheson / East Rathwood)",
                    "loc_fr": "Mississauga (Matheson / Est Rathwood)",
                    "mun": "Mississauga",
                    "lat": "43.6413",
                    "lng": "-79.6296"
                },
                {
                    "pcd": "L4X",
                    "loc": "Mississauga (East Applewood / East Dixie / NE Lakeview)",
                    "loc_fr": "Mississauga (Est Applewood / Est Dixie / NE Lakeview)",
                    "mun": "Mississauga",
                    "lat": "43.6178",
                    "lng": "-79.5786"
                },
                {
                    "pcd": "L4Y",
                    "loc": "Mississauga (West Applewood / West Dixie / NW Lakeview)",
                    "loc_fr": "Mississauga (Ouest Applewood / Ouest Dixie / NW Lakeview)",
                    "mun": "Mississauga",
                    "lat": "43.6028",
                    "lng": "-79.5929"
                },
                {
                    "pcd": "L4Z",
                    "loc": "Mississauga (West Rathwood / East Hurontario / SE Gateway)",
                    "loc_fr": "Mississauga (Ouest Rathwood / Est Hurontario / SE Gateway)",
                    "mun": "Mississauga",
                    "lat": "43.6192",
                    "lng": "-79.6538"
                },
                {
                    "pcd": "L5A",
                    "loc": "Mississauga (Mississauga Valleys / East Cooksville)",
                    "loc_fr": "Mississauga (Mississauga Valleys / Est Cooksville)",
                    "mun": "Mississauga",
                    "lat": "43.5883",
                    "lng": "-79.6091"
                },
                {
                    "pcd": "L5B",
                    "loc": "Mississauga (West Cooksville / Fairview / City Centre / East Creditview)",
                    "loc_fr": "Mississauga (Ouest Cooksville / Fairview / City Centre / Est Creditview)",
                    "mun": "Mississauga",
                    "lat": "43.5771",
                    "lng": "-79.6306"
                },
                {
                    "pcd": "L5C",
                    "loc": "Mississauga (West Creditview / Mavis / Erindale)",
                    "loc_fr": "Mississauga (Ouest Creditview / Mavis / Erindale)",
                    "mun": "Mississauga",
                    "lat": "43.5624",
                    "lng": "-79.6504"
                },
                {
                    "pcd": "L5E",
                    "loc": "Mississauga (Central Lakeview)",
                    "loc_fr": "Mississauga (Central Lakeview)",
                    "mun": "Mississauga",
                    "lat": "43.5836",
                    "lng": "-79.561"
                },
                {
                    "pcd": "L5G",
                    "loc": "Mississauga (SW Lakeview / Mineola / East Port Credit)",
                    "loc_fr": "Mississauga (SW Lakeview / Mineola / Est Port Credit)",
                    "mun": "Mississauga",
                    "lat": "43.5647",
                    "lng": "-79.5852"
                },
                {
                    "pcd": "L5H",
                    "loc": "Mississauga (West Port Credit / Lorne Park / East Sheridan)",
                    "loc_fr": "Mississauga (Ouest Port Credit / Lorne Park / Est Sheridan)",
                    "mun": "Mississauga",
                    "lat": "43.5419",
                    "lng": "-79.6164"
                },
                {
                    "pcd": "L5J",
                    "loc": "Mississauga (Clarkson / Southdown)",
                    "loc_fr": "Mississauga (Clarkson / Suddown)",
                    "mun": "Mississauga",
                    "lat": "43.5102",
                    "lng": "-79.6296"
                },
                {
                    "pcd": "L5K",
                    "loc": "Mississauga (West Sheridan)",
                    "loc_fr": "Mississauga (Ouest Sheridan)",
                    "mun": "Mississauga",
                    "lat": "43.5272",
                    "lng": "-79.6617"
                },
                {
                    "pcd": "L5L",
                    "loc": "Mississauga (Erin Mills / Western Business Park)",
                    "loc_fr": "Mississauga (Erin Mills / Ouestern Business Park)",
                    "mun": "Mississauga",
                    "lat": "43.5373",
                    "lng": "-79.6903"
                },
                {
                    "pcd": "L5M",
                    "loc": "Mississauga (Churchill Meadows / Central Erin Mills / South Streetsville)",
                    "loc_fr": "Mississauga (Churchill Meadows / Central Erin Mills / Sud Streetsville)",
                    "mun": "Mississauga",
                    "lat": "43.5637",
                    "lng": "-79.7202"
                },
                {
                    "pcd": "L5N",
                    "loc": "Mississauga (Lisgar / Meadowvale)",
                    "loc_fr": "Mississauga (Lisgar / Meadowvale)",
                    "mun": "Mississauga",
                    "lat": "43.5924",
                    "lng": "-79.7611"
                },
                {
                    "pcd": "L5P",
                    "loc": "Mississauga (YYZ)",
                    "loc_fr": "Mississauga (YYZ)",
                    "mun": "Mississauga",
                    "lat": "43.6904",
                    "lng": "-79.6238"
                },
                {
                    "pcd": "L5R",
                    "loc": "Mississauga (West Hurontario / SW Gateway)",
                    "loc_fr": "Mississauga (Ouest Hurontario / SW Gateway)",
                    "mun": "Mississauga",
                    "lat": "43.606",
                    "lng": "-79.6708"
                },
                {
                    "pcd": "L5S",
                    "loc": "Mississauga (Cardiff / NE Gateway)",
                    "loc_fr": "Mississauga (Cardiff / NE Gateway)",
                    "mun": "Mississauga",
                    "lat": "43.6801",
                    "lng": "-79.6783"
                },
                {
                    "pcd": "L5T",
                    "loc": "Mississauga (Courtney Park / East Gateway)",
                    "loc_fr": "Mississauga (Courtney Park / Est Gateway)",
                    "mun": "Mississauga",
                    "lat": "43.6683",
                    "lng": "-79.6182"
                },
                {
                    "pcd": "L5V",
                    "loc": "Mississauga (East Credit)",
                    "loc_fr": "Mississauga (Est Credit)",
                    "mun": "Mississauga",
                    "lat": "43.5972",
                    "lng": "-79.6931"
                },
                {
                    "pcd": "L5W",
                    "loc": "Mississauga (Meadowvale Village / West Gateway)",
                    "loc_fr": "Mississauga (Meadowvale Village / Ouest Gateway)",
                    "mun": "Mississauga",
                    "lat": "43.6313",
                    "lng": "-79.7148"
                },
                {
                    "pcd": "L6A",
                    "loc": "Maple",
                    "loc_fr": "Maple",
                    "lat": "43.8501",
                    "lng": "-79.5163"
                },
                {
                    "pcd": "L6B",
                    "loc": "Markham East",
                    "loc_fr": "Markham Est",
                    "mun": "Markham",
                    "lat": "43.9007",
                    "lng": "-79.2175"
                },
                {
                    "pcd": "L6C",
                    "loc": "Markham Northwest",
                    "loc_fr": "Markham Nord-Ouest",
                    "mun": "Markham",
                    "lat": "43.9045",
                    "lng": "-79.3392"
                },
                {
                    "pcd": "L6E",
                    "loc": "Markham Northeast",
                    "loc_fr": "Markham Nord-Est",
                    "mun": "Markham",
                    "lat": "43.9002",
                    "lng": "-79.2676"
                },
                {
                    "pcd": "L6G",
                    "loc": "Markham Inner Southwest",
                    "loc_fr": "Markham Inner Sud-Ouest",
                    "mun": "Markham",
                    "lat": "43.8485",
                    "lng": "-79.3346"
                },
                {
                    "pcd": "L6H",
                    "loc": "Oakville North",
                    "loc_fr": "Oakville Nord",
                    "mun": "Oakville",
                    "lat": "43.4881",
                    "lng": "-79.7098"
                },
                {
                    "pcd": "L6J",
                    "loc": "Oakville Northeast",
                    "loc_fr": "Oakville Nord-Est",
                    "mun": "Oakville",
                    "lat": "43.4757",
                    "lng": "-79.6591"
                },
                {
                    "pcd": "L6K",
                    "loc": "Oakville East",
                    "loc_fr": "Oakville Est",
                    "mun": "Oakville",
                    "lat": "43.4396",
                    "lng": "-79.6878"
                },
                {
                    "pcd": "L6L",
                    "loc": "Oakville South",
                    "loc_fr": "Oakville Sud",
                    "mun": "Oakville",
                    "lat": "43.4032",
                    "lng": "-79.7186"
                },
                {
                    "pcd": "L6M",
                    "loc": "Oakville West",
                    "loc_fr": "Oakville Ouest",
                    "mun": "Oakville",
                    "lat": "43.4464",
                    "lng": "-79.7593"
                },
                {
                    "pcd": "L6P",
                    "loc": "Brampton North",
                    "loc_fr": "Brampton Nord",
                    "mun": "Brampton",
                    "lat": "43.7942",
                    "lng": "-79.7021"
                },
                {
                    "pcd": "L6R",
                    "loc": "Brampton Northwest",
                    "loc_fr": "Brampton Nord-Ouest",
                    "mun": "Brampton",
                    "lat": "43.7592",
                    "lng": "-79.7605"
                },
                {
                    "pcd": "L6S",
                    "loc": "Brampton North Central",
                    "loc_fr": "Brampton Nord Central",
                    "mun": "Brampton",
                    "lat": "43.7379",
                    "lng": "-79.726"
                },
                {
                    "pcd": "L6T",
                    "loc": "Brampton East",
                    "loc_fr": "Brampton Est",
                    "mun": "Brampton",
                    "lat": "43.7196",
                    "lng": "-79.6854"
                },
                {
                    "pcd": "L6V",
                    "loc": "Brampton Central",
                    "loc_fr": "Brampton Central",
                    "mun": "Brampton",
                    "lat": "43.7059",
                    "lng": "-79.7626"
                },
                {
                    "pcd": "L6W",
                    "loc": "Brampton Southeast",
                    "loc_fr": "Brampton Sud-Est",
                    "mun": "Brampton",
                    "lat": "43.68",
                    "lng": "-79.7273"
                },
                {
                    "pcd": "L6X",
                    "loc": "Brampton Southwest",
                    "loc_fr": "Brampton Sud-Ouest",
                    "mun": "Brampton",
                    "lat": "43.6665",
                    "lng": "-79.8054"
                },
                {
                    "pcd": "L6Y",
                    "loc": "Brampton South",
                    "loc_fr": "Brampton Sud",
                    "mun": "Brampton",
                    "lat": "43.6249",
                    "lng": "-79.7876"
                },
                {
                    "pcd": "L6Z",
                    "loc": "Brampton West Central",
                    "loc_fr": "Brampton Ouest Central",
                    "mun": "Brampton",
                    "lat": "43.7328",
                    "lng": "-79.7953"
                },
                {
                    "pcd": "L7A",
                    "loc": "Brampton West",
                    "loc_fr": "Brampton Ouest",
                    "lat": "43.6909",
                    "lng": "-79.8377"
                },
                {
                    "pcd": "L7B",
                    "loc": "King City",
                    "loc_fr": "King City",
                    "lat": "43.9286",
                    "lng": "-79.5269"
                },
                {
                    "pcd": "L7C",
                    "loc": "Caledon",
                    "loc_fr": "Caledon",
                    "lat": "43.8753",
                    "lng": "-79.8558"
                },
                {
                    "pcd": "L7E",
                    "loc": "Bolton",
                    "loc_fr": "Bolton",
                    "lat": "43.8795",
                    "lng": "-79.7379"
                },
                {
                    "pcd": "L7G",
                    "loc": "Georgetown",
                    "loc_fr": "Georgetown",
                    "lat": "43.6501",
                    "lng": "-79.9163"
                },
                {
                    "pcd": "L7J",
                    "loc": "Acton",
                    "loc_fr": "Acton",
                    "lat": "43.6297",
                    "lng": "-80.0415"
                },
                {
                    "pcd": "L7K",
                    "loc": "Caledon Village",
                    "loc_fr": "Caledon Village",
                    "lat": "43.8602",
                    "lng": "-79.996"
                },
                {
                    "pcd": "L7L",
                    "loc": "Burlington Northeast",
                    "loc_fr": "Burlington Nord-Est",
                    "mun": "Burlington",
                    "lat": "43.3799",
                    "lng": "-79.7668"
                },
                {
                    "pcd": "L7M",
                    "loc": "Burlington North",
                    "loc_fr": "Burlington Nord",
                    "mun": "Burlington",
                    "lat": "43.4342",
                    "lng": "-79.8701"
                },
                {
                    "pcd": "L7N",
                    "loc": "Burlington East",
                    "loc_fr": "Burlington Est",
                    "mun": "Burlington",
                    "lat": "43.3512",
                    "lng": "-79.784"
                },
                {
                    "pcd": "L7P",
                    "loc": "Burlington West",
                    "loc_fr": "Burlington Ouest",
                    "mun": "Burlington",
                    "lat": "43.3806",
                    "lng": "-79.886"
                },
                {
                    "pcd": "L7R",
                    "loc": "Burlington Southeast",
                    "loc_fr": "Burlington Sud-Est",
                    "mun": "Burlington",
                    "lat": "43.375",
                    "lng": "-79.8434"
                },
                {
                    "pcd": "L7S",
                    "loc": "Burlington South",
                    "loc_fr": "Burlington Sud",
                    "mun": "Burlington",
                    "lat": "43.323",
                    "lng": "-79.8092"
                },
                {
                    "pcd": "L7T",
                    "loc": "Burlington Southwest",
                    "loc_fr": "Burlington Sud-Ouest",
                    "mun": "Burlington",
                    "lat": "43.3081",
                    "lng": "-79.8507"
                },
                {
                    "pcd": "L8B",
                    "loc": "Waterdown",
                    "loc_fr": "Waterdown",
                    "lat": "43.3334",
                    "lng": "-79.8829"
                },
                {
                    "pcd": "L9G",
                    "loc": "Ancaster West",
                    "loc_fr": "Ancaster Ouest",
                    "mun": "Ancaster",
                    "lat": "43.1836",
                    "lng": "-79.9902"
                },
                {
                    "pcd": "L9H",
                    "loc": "Dundas",
                    "loc_fr": "Dundas",
                    "lat": "43.2638",
                    "lng": "-79.9524"
                },
                {
                    "pcd": "L9J",
                    "loc": "Barrie",
                    "loc_fr": "Barrie",
                    "lat": "44.3186",
                    "lng": "-79.6761"
                },
                {
                    "pcd": "L9K",
                    "loc": "Ancaster East",
                    "loc_fr": "Ancaster Est",
                    "mun": "Ancaster",
                    "lat": "43.225",
                    "lng": "-79.9427"
                },
                {
                    "pcd": "L9L",
                    "loc": "Port Perry",
                    "loc_fr": "Port Perry",
                    "lat": "44.1068",
                    "lng": "-78.9444"
                },
                {
                    "pcd": "L9M",
                    "loc": "Penetanguishene",
                    "loc_fr": "Penetanguishene",
                    "lat": "44.7834",
                    "lng": "-79.9164"
                },
                {
                    "pcd": "L9N",
                    "loc": "Holland Landing",
                    "loc_fr": "Holland Landing",
                    "lat": "44.1149",
                    "lng": "-79.5014"
                },
                {
                    "pcd": "L9P",
                    "loc": "Uxbridge",
                    "loc_fr": "Uxbridge",
                    "lat": "44.1001",
                    "lng": "-79.1163"
                },
                {
                    "pcd": "L9R",
                    "loc": "Alliston",
                    "loc_fr": "Alliston",
                    "lat": "44.1501",
                    "lng": "-79.8663"
                },
                {
                    "pcd": "L9S",
                    "loc": "Innisfil",
                    "loc_fr": "Innisfil",
                    "lat": "44.3001",
                    "lng": "-79.6496"
                },
                {
                    "pcd": "L9T",
                    "loc": "Milton",
                    "loc_fr": "Milton",
                    "lat": "43.5148",
                    "lng": "-79.884"
                },
                {
                    "pcd": "L9V",
                    "loc": "Orangeville North",
                    "loc_fr": "Orangeville Nord",
                    "mun": "Orangeville",
                    "lat": "43.9597",
                    "lng": "-80.1079"
                },
                {
                    "pcd": "L9W",
                    "loc": "Orangeville South",
                    "loc_fr": "Orangeville Sud",
                    "mun": "Orangeville",
                    "lat": "43.9702",
                    "lng": "-80.016"
                },
                {
                    "pcd": "L9X",
                    "loc": "Midhurst",
                    "loc_fr": "Midhurst",
                    "lat": "44.4438",
                    "lng": "-79.7318"
                },
                {
                    "pcd": "L9X",
                    "loc": "Minesing",
                    "loc_fr": "Minesing",
                    "lat": "44.4334",
                    "lng": "-79.833"
                },
                {
                    "pcd": "L9X",
                    "loc": "Springwater",
                    "loc_fr": "Springwater",
                    "lat": "44.4954",
                    "lng": "-79.8503"
                },
                {
                    "pcd": "L9X",
                    "loc": "Barrie",
                    "loc_fr": "Barrie",
                    "lat": "44.4001",
                    "lng": "-79.6663"
                },
                {
                    "pcd": "L9Y",
                    "loc": "Collingwood",
                    "loc_fr": "Collingwood",
                    "lat": "44.4834",
                    "lng": "-80.2164"
                },
                {
                    "pcd": "L9Z",
                    "loc": "Wasaga Beach",
                    "loc_fr": "Wasaga Beach",
                    "lat": "44.5168",
                    "lng": "-80.0164"
                },
                {
                    "pcd": "M1B",
                    "loc": "Scarborough (Malvern / Rouge River)",
                    "loc_fr": "Scarborough (Malvern / Rouge River)",
                    "mun": "Scarborough",
                    "lat": "43.8113",
                    "lng": "-79.193"
                },
                {
                    "pcd": "M1C",
                    "loc": "Scarborough (Rouge Hill / Port Union / Highland Creek)",
                    "loc_fr": "Scarborough (Rouge Hill / Port Union / Highland Creek)",
                    "mun": "Scarborough",
                    "lat": "43.7878",
                    "lng": "-79.1564"
                },
                {
                    "pcd": "M1E",
                    "loc": "Scarborough (Guildwood / Morningside / Ellesmere)",
                    "loc_fr": "Scarborough (Guildwood / Morningside / Ellesmere)",
                    "mun": "Scarborough",
                    "lat": "43.7678",
                    "lng": "-79.1866"
                },
                {
                    "pcd": "M1G",
                    "loc": "Scarborough (Woburn)",
                    "loc_fr": "Scarborough (Woburn)",
                    "mun": "Scarborough",
                    "lat": "43.7712",
                    "lng": "-79.2144"
                },
                {
                    "pcd": "M1H",
                    "loc": "Scarborough (Cedarbrae)",
                    "loc_fr": "Scarborough (Cedarbrae)",
                    "mun": "Scarborough",
                    "lat": "43.7686",
                    "lng": "-79.2389"
                },
                {
                    "pcd": "M1J",
                    "loc": "Scarborough (Eglinton)",
                    "loc_fr": "Scarborough (Eglinton)",
                    "mun": "Scarborough",
                    "lat": "43.7464",
                    "lng": "-79.2323"
                },
                {
                    "pcd": "M1K",
                    "loc": "Scarborough (Kennedy Park / Ionview / East Birchmount Park)",
                    "loc_fr": "Scarborough (Kennedy Park / Ionview / Est Birchmount Park)",
                    "mun": "Scarborough",
                    "lat": "43.7298",
                    "lng": "-79.2639"
                },
                {
                    "pcd": "M1L",
                    "loc": "Scarborough (The Golden Mile / Clairlea / Oakridge / Birchmount Park East)",
                    "loc_fr": "Scarborough (The Golden Mile / Clairlea / Oakridge / Birchmount Park Est)",
                    "mun": "Scarborough",
                    "lat": "43.7122",
                    "lng": "-79.2843"
                },
                {
                    "pcd": "M1M",
                    "loc": "Scarborough (Cliffside / Cliffcrest / Scarborough Village West)",
                    "loc_fr": "Scarborough (Cliffside / Cliffcrest / Scarborough Village Ouest)",
                    "mun": "Scarborough",
                    "lat": "43.7247",
                    "lng": "-79.2312"
                },
                {
                    "pcd": "M1N",
                    "loc": "Scarborough (Birch Cliff / Cliffside West)",
                    "loc_fr": "Scarborough (Birch Cliff / Cliffside Ouest)",
                    "mun": "Scarborough",
                    "lat": "43.6952",
                    "lng": "-79.2646"
                },
                {
                    "pcd": "M1P",
                    "loc": "Scarborough (Dorset Park / Wexford Heights / Scarborough Town Centre)",
                    "loc_fr": "Scarborough (Dorset Park / Wexford Heights / Scarborough Town Centre)",
                    "mun": "Scarborough",
                    "lat": "43.7612",
                    "lng": "-79.2707"
                },
                {
                    "pcd": "M1R",
                    "loc": "Scarborough (Wexford / Maryvale)",
                    "loc_fr": "Scarborough (Wexford / Maryvale)",
                    "mun": "Scarborough",
                    "lat": "43.7507",
                    "lng": "-79.3003"
                },
                {
                    "pcd": "M1S",
                    "loc": "Scarborough (Agincourt)",
                    "loc_fr": "Scarborough (Agincourt)",
                    "mun": "Scarborough",
                    "lat": "43.7946",
                    "lng": "-79.2644"
                },
                {
                    "pcd": "M1T",
                    "loc":"Scarborough (Clarks Corners / Tam O\'Shanter / Sullivan)",
                    "loc_fr":"Scarborough (Clarks Corners / Tam O\'Shanter / Sullivan)",
                    "mun": "Scarborough",
                    "lat": "43.7812",
                    "lng": "-79.3036"
                },
                {
                    "pcd": "M1V",
                    "loc":"Scarborough (Milliken / Agincourt North / Steeles East / L\'Amoreaux East)",
                    "loc_fr":"Scarborough (Milliken / Agincourt Nord / Steeles Est / L\'Amoreaux Est)",
                    "mun": "Scarborough",
                    "lat": "43.8177",
                    "lng": "-79.2819"
                },
                {
                    "pcd": "M1W",
                    "loc":"Scarborough (Steeles West / L\'Amoreaux West)",
                    "loc_fr":"Scarborough (Steeles Ouest / L\'Amoreaux Ouest)",
                    "mun": "Scarborough",
                    "lat": "43.8016",
                    "lng": "-79.3216"
                },
                {
                    "pcd": "M1X",
                    "loc": "Scarborough (Upper Rouge)",
                    "loc_fr": "Scarborough (Upper Rouge)",
                    "mun": "Scarborough",
                    "lat": "43.834",
                    "lng": "-79.2069"
                },
                {
                    "pcd": "M2H",
                    "loc": "North York (Hillcrest Village)",
                    "loc_fr": "Nord York (Hillcrest Village)",
                    "mun": "North York",
                    "lat": "43.8015",
                    "lng": "-79.3577"
                },
                {
                    "pcd": "M2J",
                    "loc": "North York (Fairview / Henry Farm / Oriole)",
                    "loc_fr": "Nord York (Fairview / Henry Farm / Oriole)",
                    "mun": "North York",
                    "lat": "43.7801",
                    "lng": "-79.3479"
                },
                {
                    "pcd": "M2K",
                    "loc": "North York (Bayview Village)",
                    "loc_fr": "Nord York (Bayview Village)",
                    "mun": "North York",
                    "lat": "43.7797",
                    "lng": "-79.3813"
                },
                {
                    "pcd": "M2L",
                    "loc": "North York (York Mills / Silver Hills)",
                    "loc_fr": "Nord York (York Mills / Silver Hills)",
                    "mun": "North York",
                    "lat": "43.7547",
                    "lng": "-79.3764"
                },
                {
                    "pcd": "M2M",
                    "loc": "Willowdale East (Newtonbrook)",
                    "loc_fr": "Willowdale Est (Newtonbrook)",
                    "mun": "Willowdale",
                    "lat": "43.7915",
                    "lng": "-79.4103"
                },
                {
                    "pcd": "M2N",
                    "loc": "Willowdale South",
                    "loc_fr": "Willowdale Sud",
                    "mun": "Willowdale",
                    "lat": "43.7673",
                    "lng": "-79.4111"
                },
                {
                    "pcd": "M2P",
                    "loc": "North York (York Mills West)",
                    "loc_fr": "Nord York (York Mills Ouest)",
                    "mun": "North York",
                    "lat": "43.75",
                    "lng": "-79.3978"
                },
                {
                    "pcd": "M2R",
                    "loc": "Willowdale West",
                    "loc_fr": "Willowdale Ouest",
                    "mun": "Willowdale",
                    "lat": "43.7786",
                    "lng": "-79.445"
                },
                {
                    "pcd": "M3A",
                    "loc": "North York (York Heights / Victoria Village / Parkway East)",
                    "loc_fr": "Nord York (York Heights / Victoria Village / Parkway Est)",
                    "mun": "North York",
                    "lat": "43.7545",
                    "lng": "-79.33"
                },
                {
                    "pcd": "M3B",
                    "loc": "Don Mills North",
                    "loc_fr": "Don Mills Nord",
                    "mun": "Don Mills",
                    "lat": "43.745",
                    "lng": "-79.359"
                },
                {
                    "pcd": "M3C",
                    "loc": "Don Mills South (Flemingdon Park)",
                    "loc_fr": "Don Mills Sud (Flemingdon Park)",
                    "mun": "Don Mills",
                    "lat": "43.7334",
                    "lng": "-79.3329"
                },
                {
                    "pcd": "M3H",
                    "loc": "North York (Armour Heights / Wilson Heights / Downsview North)",
                    "loc_fr": "Nord York (Armour Heights / Wilson Heights / Downsview Nord)",
                    "mun": "North York",
                    "lat": "43.7535",
                    "lng": "-79.4472"
                },
                {
                    "pcd": "M3J",
                    "loc": "North York (Northwood Park / York University)",
                    "loc_fr": "Nord York (Nordwood Park / York University)",
                    "mun": "North York",
                    "lat": "43.7694",
                    "lng": "-79.4921"
                },
                {
                    "pcd": "M3L",
                    "loc": "Downsview West",
                    "loc_fr": "Downsview Ouest",
                    "mun": "Downsview",
                    "lat": "43.7334",
                    "lng": "-79.5116"
                },
                {
                    "pcd": "M3M",
                    "loc": "Downsview Central",
                    "loc_fr": "Downsview Central",
                    "mun": "Downsview",
                    "lat": "43.7319",
                    "lng": "-79.4928"
                },
                {
                    "pcd": "M3N",
                    "loc": "North York (Jane and Finch)",
                    "loc_fr": "Nord York (Jane and Finch)",
                    "mun": "North York",
                    "lat": "43.7568",
                    "lng": "-79.521"
                },
                {
                    "pcd": "M4A",
                    "loc": "North York (Sweeney Park / Wigmore Park)",
                    "loc_fr": "Nord York (Sweeney Park / Wigmore Park)",
                    "lat": "43.7276",
                    "lng": "-79.3148"
                },
                {
                    "pcd": "M4B",
                    "loc": "East York (Parkview Hill / Woodbine Gardens)",
                    "loc_fr": "Est York (Parkview Hill / Woodbine Gardens)",
                    "mun": "East York",
                    "lat": "43.7063",
                    "lng": "-79.3094"
                },
                {
                    "pcd": "M4C",
                    "loc": "East York (Woodbine Heights)",
                    "loc_fr": "Est York (Woodbine Heights)",
                    "mun": "East York",
                    "lat": "43.6913",
                    "lng": "-79.3116"
                },
                {
                    "pcd": "M4G",
                    "loc": "East York (Leaside)",
                    "loc_fr": "Est York (Leaside)",
                    "mun": "East York",
                    "lat": "43.7124",
                    "lng": "-79.3644"
                },
                {
                    "pcd": "M4H",
                    "loc": "East York (Thorncliffe Park)",
                    "loc_fr": "Est York (Thorncliffe Park)",
                    "mun": "East York",
                    "lat": "43.7059",
                    "lng": "-79.3464"
                },
                {
                    "pcd": "M5M",
                    "loc": "North York (Bedford Park / Lawrence Park West / Lawrence Manor East)",
                    "loc_fr": "Nord York (Bedford Park / Lawrence Park Ouest / Lawrence Manor Est)",
                    "lat": "43.7335",
                    "lng": "-79.4177"
                },
                {
                    "pcd": "M6A",
                    "loc": "North York (Lawrence Manor / Lawrence Heights)",
                    "loc_fr": "Nord York (Lawrence Manor / Lawrence Heights)",
                    "mun": "North York",
                    "lat": "43.7223",
                    "lng": "-79.4504"
                },
                {
                    "pcd": "M6B",
                    "loc": "North York (Glencairn)",
                    "loc_fr": "Nord York (Glencairn)",
                    "mun": "North York",
                    "lat": "43.7081",
                    "lng": "-79.4479"
                },
                {
                    "pcd": "M6C",
                    "loc": "York (Cedarvale)",
                    "loc_fr": "York (Cedarvale)",
                    "mun": "York",
                    "lat": "43.6915",
                    "lng": "-79.4307"
                },
                {
                    "pcd": "M6E",
                    "loc": "York (Fairbank / Oakwood)",
                    "loc_fr": "York (Fairbank / Oakwood)",
                    "mun": "York",
                    "lat": "43.6889",
                    "lng": "-79.4507"
                },
                {
                    "pcd": "M6L",
                    "loc": "North York (North Park / Maple Leaf Park / Upwood Park)",
                    "loc_fr": "Nord York (Nord Park / Maple Leaf Park / Upwood Park)",
                    "mun": "North York",
                    "lat": "43.7137",
                    "lng": "-79.4869"
                },
                {
                    "pcd": "M6M",
                    "loc": "York (Del Ray / Keelsdale / Mount Dennis / Silverthorne)",
                    "loc_fr": "York (Del Ray / Keelsdale / Mount Dennis / Silverthorne)",
                    "mun": "York",
                    "lat": "43.6934",
                    "lng": "-79.4857"
                },
                {
                    "pcd": "M6N",
                    "loc": "York (Runnymede / The Junction North)",
                    "loc_fr": "York (Runnymede / The Junction Nord)",
                    "mun": "York",
                    "lat": "43.6748",
                    "lng": "-79.4839"
                },
                {
                    "pcd": "M7A",
                    "loc":"Queen\'s Park Ontario Provincial Government",
                    "loc_fr":"Queen\'s Park Ontario Provincial Government",
                    "lat": "43.6641",
                    "lng": "-79.3889"
                },
                {
                    "pcd": "M8W",
                    "loc": "Etobicoke (Alderwood / Long Branch)",
                    "loc_fr": "Etobicoke (Alderwood / Long Branch)",
                    "mun": "Etobicoke",
                    "lat": "43.6021",
                    "lng": "-79.5402"
                },
                {
                    "pcd": "M8X",
                    "loc": "Etobicoke (The Kingsway / Montgomery Road / Old Mill North)",
                    "loc_fr": "Etobicoke (The Kingsway / Montgomery Road / Old Mill Nord)",
                    "mun": "Etobicoke",
                    "lat": "43.6518",
                    "lng": "-79.5076"
                },
                {
                    "pcd": "M8Y",
                    "loc":"Etobicoke (Old Mill South / King\'s Mill Park / Sunnylea / Humber Bay / Mimico NE / The Queensway East / Royal York South East / Kingsway Park South East)",
                    "loc_fr":"Etobicoke (Old Mill Sud / King\'s Mill Park / Sunnylea / Humber Bay / Mimico NE / The Queensway Est / Royal York Sud Est / Kingsway Park Sud Est)",
                    "mun": "Etobicoke",
                    "lat": "43.6325",
                    "lng": "-79.4939"
                },
                {
                    "pcd": "M8Z",
                    "loc": "Etobicoke (Mimico NW / The Queensway West / South of Bloor / Kingsway Park South West / Royal York South West)",
                    "loc_fr": "Etobicoke (Mimico NW / The Queensway Ouest / Sud of Bloor / Kingsway Park Sud-Ouest / Royal York Sud-Ouest)",
                    "mun": "Etobicoke",
                    "lat": "43.6256",
                    "lng": "-79.5231"
                },
                {
                    "pcd": "M9A",
                    "loc": "Etobicoke (Islington Avenue)",
                    "loc_fr": "Etobicoke (Islington Avenue)",
                    "mun": "Etobicoke",
                    "lat": "43.6662",
                    "lng": "-79.5282"
                },
                {
                    "pcd": "M9B",
                    "loc": "Etobicoke (West Deane Park / Princess Gardens / Martin Grove / Islington / Cloverdale)",
                    "loc_fr": "Etobicoke (Ouest Deane Park / Princess Gardens / Martin Grove / Islington / Cloverdale)",
                    "mun": "Etobicoke",
                    "lat": "43.6505",
                    "lng": "-79.5517"
                },
                {
                    "pcd": "M9C",
                    "loc": "Etobicoke (Eringate / Bloordale Gardens / Old Burnhamthorpe / Markland Woods)",
                    "loc_fr": "Etobicoke (Eringate / Bloordale Gardens / Old Burnhamthorpe / Markland Woods)",
                    "mun": "Etobicoke",
                    "lat": "43.6437",
                    "lng": "-79.5767"
                },
                {
                    "pcd": "M9L",
                    "loc": "North York (Humber Summit)",
                    "loc_fr": "Nord York (Humber Summit)",
                    "mun": "North York",
                    "lat": "43.7598",
                    "lng": "-79.5565"
                },
                {
                    "pcd": "M9M",
                    "loc": "North York (Humberlea / Emery)",
                    "loc_fr": "Nord York (Humberlea / Emery)",
                    "mun": "North York",
                    "lat": "43.7366",
                    "lng": "-79.5401"
                },
                {
                    "pcd": "M9N",
                    "loc": "Weston",
                    "loc_fr": "Oueston",
                    "lat": "43.7068",
                    "lng": "-79.517"
                },
                {
                    "pcd": "M9P",
                    "loc": "Etobicoke (Westmount)",
                    "loc_fr": "Etobicoke (Ouestmount)",
                    "mun": "Etobicoke",
                    "lat": "43.6949",
                    "lng": "-79.5323"
                },
                {
                    "pcd": "M9R",
                    "loc": "Etobicoke (Kingsview Village / St. Phillips / Martin Grove Gardens / Richview Gardens)",
                    "loc_fr": "Etobicoke (Kingsview Village / St. Phillips / Martin Grove Gardens / Richview Gardens)",
                    "mun": "Etobicoke",
                    "lat": "43.6898",
                    "lng": "-79.5582"
                },
                {
                    "pcd": "M9V",
                    "loc": "Etobicoke (South Steeles / Silverstone / Humbergate / Jamestown / Mount Olive / Beaumond Heights / Thistletown / Albion Gardens)",
                    "loc_fr": "Etobicoke (Sud Steeles / Silverstone / Humbergate / Jamestown / Mount Olive / Beaumond Heights / Thistletown / Albion Gardens)",
                    "mun": "Etobicoke",
                    "lat": "43.7432",
                    "lng": "-79.5876"
                },
                {
                    "pcd": "M9W",
                    "loc": "Etobicoke Northwest (Clairville / Humberwood / Woodbine Downs / West Humber / Kipling Heights / Rexdale / Elms / Tandridge / Old Rexdale)",
                    "loc_fr": "Etobicoke Nord-Ouest (Clairville / Humberwood / Woodbine Downs / Ouest Humber / Kipling Heights / Rexdale / Elms / Tandridge / Old Rexdale)",
                    "mun": "Etobicoke",
                    "lat": "43.7144",
                    "lng": "-79.5909"
                },
                {
                    "pcd": "N0A",
                    "loc": "West Haldimand (Port Dover)",
                    "loc_fr": "Ouest Haldimand (Port Dover)",
                    "lat": "42.9403",
                    "lng": "-79.945"
                },
                {
                    "pcd": "N0B",
                    "loc": "Wellington (Elora)",
                    "loc_fr": "Wellington (Elora)",
                    "lat": "43.5569",
                    "lng": "-80.4414"
                },
                {
                    "pcd": "N0C",
                    "loc": "Georgian Bay Southwest Shore (Dundalk)",
                    "loc_fr": "Georgian Bay Sud-OuestShore (Dundalk)",
                    "lat": "44.2561",
                    "lng": "-80.5029"
                },
                {
                    "pcd": "N0E",
                    "loc": "Brant and Norfolk (Waterford)",
                    "loc_fr": "Brant and Norfolk (Waterford)",
                    "lat": "42.6618",
                    "lng": "-80.5572"
                },
                {
                    "pcd": "N0G",
                    "loc": "Huron (Wingham)",
                    "loc_fr": "Huron (Wingham)",
                    "lat": "44.0024",
                    "lng": "-81.0676"
                },
                {
                    "pcd": "N0H",
                    "loc": "Bruce Peninsula (Wiarton)",
                    "loc_fr": "Bruce Peninsula (Wiarton)",
                    "lat": "44.6941",
                    "lng": "-81.0962"
                },
                {
                    "pcd": "N0J",
                    "loc": "Oxford (Norwich)",
                    "loc_fr": "Oxford (Norwich)",
                    "lat": "42.9775",
                    "lng": "-80.7057"
                },
                {
                    "pcd": "N0K",
                    "loc": "Perth (Mitchell)",
                    "loc_fr": "Perth (Mitchell)",
                    "lat": "43.5067",
                    "lng": "-81.1582"
                },
                {
                    "pcd": "N0L",
                    "loc": "Elgin (Dorchester)",
                    "loc_fr": "Elgin (Dorchester)",
                    "lat": "42.7557",
                    "lng": "-81.4533"
                },
                {
                    "pcd": "N0M",
                    "loc": "Middlesex (Clinton)",
                    "loc_fr": "Middlesex (Clinton)",
                    "lat": "43.2788",
                    "lng": "-81.5442"
                },
                {
                    "pcd": "N0N",
                    "loc": "Lambton (Forest)",
                    "loc_fr": "Lambton (Forest)",
                    "lat": "42.9062",
                    "lng": "-82.11"
                },
                {
                    "pcd": "N0P",
                    "loc": "Kent (Blenheim)",
                    "loc_fr": "Kent (Blenheim)",
                    "lat": "42.4045",
                    "lng": "-81.9107"
                },
                {
                    "pcd": "N0R",
                    "loc": "Essex (Belle River)",
                    "loc_fr": "Essex (Belle River)",
                    "lat": "42.1783",
                    "lng": "-82.7715"
                },
                {
                    "pcd": "N1A",
                    "loc": "Dunnville",
                    "loc_fr": "Dunnville",
                    "lat": "42.9001",
                    "lng": "-79.6163"
                },
                {
                    "pcd": "N1C",
                    "loc": "Guelph South",
                    "loc_fr": "Guelph Sud",
                    "mun": "Guelph",
                    "lat": "43.4921",
                    "lng": "-80.2267"
                },
                {
                    "pcd": "N1E",
                    "loc": "Guelph North",
                    "loc_fr": "Guelph Nord",
                    "mun": "Guelph",
                    "lat": "43.5677",
                    "lng": "-80.2418"
                },
                {
                    "pcd": "N1G",
                    "loc": "Guelph Central",
                    "loc_fr": "Guelph Central",
                    "mun": "Guelph",
                    "lat": "43.5184",
                    "lng": "-80.2257"
                },
                {
                    "pcd": "N1H",
                    "loc": "Guelph Northwest",
                    "loc_fr": "Guelph Nord-Ouest",
                    "mun": "Guelph",
                    "lat": "43.5588",
                    "lng": "-80.3004"
                },
                {
                    "pcd": "N1K",
                    "loc": "Guelph West",
                    "loc_fr": "Guelph Ouest",
                    "mun": "Guelph",
                    "lat": "43.526",
                    "lng": "-80.3051"
                },
                {
                    "pcd": "N1L",
                    "loc": "Guelph East",
                    "loc_fr": "Guelph Est",
                    "mun": "Guelph",
                    "lat": "43.516",
                    "lng": "-80.19"
                },
                {
                    "pcd": "N1M",
                    "loc": "Fergus",
                    "loc_fr": "Fergus",
                    "lat": "43.7001",
                    "lng": "-80.3664"
                },
                {
                    "pcd": "N1P",
                    "loc": "Cambridge South",
                    "loc_fr": "Cambridge Sud",
                    "mun": "Cambridge",
                    "lat": "43.3398",
                    "lng": "-80.2955"
                },
                {
                    "pcd": "N1R",
                    "loc": "Cambridge Central",
                    "loc_fr": "Cambridge Central",
                    "mun": "Cambridge",
                    "lat": "43.3666",
                    "lng": "-80.2239"
                },
                {
                    "pcd": "N1S",
                    "loc": "Cambridge Southwest",
                    "loc_fr": "Cambridge Sud-Ouest",
                    "mun": "Cambridge",
                    "lat": "43.3592",
                    "lng": "-80.3347"
                },
                {
                    "pcd": "N1T",
                    "loc": "Cambridge East",
                    "loc_fr": "Cambridge Est",
                    "mun": "Cambridge",
                    "lat": "43.3849",
                    "lng": "-80.2833"
                },
                {
                    "pcd": "N2A",
                    "loc": "Kitchener East",
                    "loc_fr": "Kitchener Est",
                    "mun": "Kitchener",
                    "lat": "43.4413",
                    "lng": "-80.4246"
                },
                {
                    "pcd": "N2B",
                    "loc": "Kitchener Northeast",
                    "loc_fr": "Kitchener Nord-Est",
                    "mun": "Kitchener",
                    "lat": "43.4646",
                    "lng": "-80.4467"
                },
                {
                    "pcd": "N2C",
                    "loc": "Kitchener South Central",
                    "loc_fr": "Kitchener Sud Central",
                    "mun": "Kitchener",
                    "lat": "43.4182",
                    "lng": "-80.4451"
                },
                {
                    "pcd": "N2E",
                    "loc": "Kitchener Southwest",
                    "loc_fr": "Kitchener Sud-Ouest",
                    "mun": "Kitchener",
                    "lat": "43.4106",
                    "lng": "-80.5011"
                },
                {
                    "pcd": "N2G",
                    "loc": "Kitchener Central",
                    "loc_fr": "Kitchener Central",
                    "mun": "Kitchener",
                    "lat": "43.4443",
                    "lng": "-80.4891"
                },
                {
                    "pcd": "N2H",
                    "loc": "Kitchener North Central",
                    "loc_fr": "Kitchener Nord Central",
                    "mun": "Kitchener",
                    "lat": "43.4581",
                    "lng": "-80.4818"
                },
                {
                    "pcd": "N2J",
                    "loc": "Waterloo Southeast",
                    "loc_fr": "Waterloo Sud-Est",
                    "mun": "Waterloo",
                    "lat": "43.504",
                    "lng": "-80.5366"
                },
                {
                    "pcd": "N2K",
                    "loc": "Kitchener North",
                    "loc_fr": "Kitchener Nord",
                    "mun": "Kitchener",
                    "lat": "43.4961",
                    "lng": "-80.4936"
                },
                {
                    "pcd": "N2L",
                    "loc": "Waterloo South",
                    "loc_fr": "Waterloo Sud",
                    "mun": "Waterloo",
                    "lat": "43.4715",
                    "lng": "-80.5454"
                },
                {
                    "pcd": "N2M",
                    "loc": "Kitchener Northwest",
                    "loc_fr": "Kitchener Nord-Ouest",
                    "mun": "Kitchener",
                    "lat": "43.4363",
                    "lng": "-80.5093"
                },
                {
                    "pcd": "N2N",
                    "loc": "Kitchener West",
                    "loc_fr": "Kitchener Ouest",
                    "mun": "Kitchener",
                    "lat": "43.426",
                    "lng": "-80.5438"
                },
                {
                    "pcd": "N2P",
                    "loc": "Kitchener Southeast",
                    "loc_fr": "Kitchener Sud-Est",
                    "mun": "Kitchener",
                    "lat": "43.3878",
                    "lng": "-80.4296"
                },
                {
                    "pcd": "N2R",
                    "loc": "Kitchener South",
                    "loc_fr": "Kitchener Sud",
                    "mun": "Kitchener",
                    "lat": "43.3849",
                    "lng": "-80.487"
                },
                {
                    "pcd": "N2T",
                    "loc": "Waterloo Southwest",
                    "loc_fr": "Waterloo Sud-Ouest",
                    "mun": "Waterloo",
                    "lat": "43.453",
                    "lng": "-80.5692"
                },
                {
                    "pcd": "N2V",
                    "loc": "Waterloo Northwest",
                    "loc_fr": "Waterloo Nord-Ouest",
                    "mun": "Waterloo",
                    "lat": "43.4764",
                    "lng": "-80.5842"
                },
                {
                    "pcd": "N2Z",
                    "loc": "Kincardine",
                    "loc_fr": "Kincardine",
                    "lat": "44.1664",
                    "lng": "-81.601"
                },
                {
                    "pcd": "N3A",
                    "loc": "Baden",
                    "loc_fr": "Baden",
                    "lat": "43.4001",
                    "lng": "-80.6497"
                },
                {
                    "pcd": "N3B",
                    "loc": "Elmira",
                    "loc_fr": "Elmira",
                    "lat": "43.6001",
                    "lng": "-80.5497"
                },
                {
                    "pcd": "N3C",
                    "loc": "Cambridge Northeast",
                    "loc_fr": "Cambridge Nord-Est",
                    "mun": "Cambridge",
                    "lat": "43.4389",
                    "lng": "-80.2649"
                },
                {
                    "pcd": "N3E",
                    "loc": "Cambridge Northwest",
                    "loc_fr": "Cambridge Nord-Ouest",
                    "mun": "Cambridge",
                    "lat": "43.4193",
                    "lng": "-80.3505"
                },
                {
                    "pcd": "N3H",
                    "loc": "Cambridge West",
                    "loc_fr": "Cambridge Ouest",
                    "mun": "Cambridge",
                    "lat": "43.4267",
                    "lng": "-80.3699"
                },
                {
                    "pcd": "N3L",
                    "loc": "Paris",
                    "loc_fr": "Paris",
                    "lat": "43.2",
                    "lng": "-80.3833"
                },
                {
                    "pcd": "N3W",
                    "loc": "Caledonia",
                    "loc_fr": "Caledonia",
                    "lat": "43.0668",
                    "lng": "-79.9329"
                },
                {
                    "pcd": "N3Y",
                    "loc": "Simcoe",
                    "loc_fr": "Simcoe",
                    "lat": "42.8334",
                    "lng": "-80.2997"
                },
                {
                    "pcd": "N4B",
                    "loc": "Delhi",
                    "loc_fr": "Delhi",
                    "lat": "42.8501",
                    "lng": "-80.4997"
                },
                {
                    "pcd": "N4G",
                    "loc": "Tillsonburg",
                    "loc_fr": "Tillsonburg",
                    "lat": "42.8599",
                    "lng": "-80.7262"
                },
                {
                    "pcd": "N4K",
                    "loc": "Owen Sound",
                    "loc_fr": "Owen Sound",
                    "lat": "44.5672",
                    "lng": "-80.9435"
                },
                {
                    "pcd": "N4L",
                    "loc": "Meaford",
                    "loc_fr": "Meaford",
                    "lat": "44.6001",
                    "lng": "-80.583"
                },
                {
                    "pcd": "N4N",
                    "loc": "Hanover",
                    "loc_fr": "Hanover",
                    "lat": "44.1501",
                    "lng": "-81.033"
                },
                {
                    "pcd": "N4S",
                    "loc": "Woodstock Central",
                    "loc_fr": "Woodstock Central",
                    "mun": "Woodstock",
                    "lat": "43.1432",
                    "lng": "-80.7338"
                },
                {
                    "pcd": "N4T",
                    "loc": "Woodstock North",
                    "loc_fr": "Woodstock Nord",
                    "mun": "Woodstock",
                    "lat": "43.1485",
                    "lng": "-80.7319"
                },
                {
                    "pcd": "N4V",
                    "loc": "Woodstock South",
                    "loc_fr": "Woodstock Sud",
                    "mun": "Woodstock",
                    "lat": "43.115",
                    "lng": "-80.743"
                },
                {
                    "pcd": "N4W",
                    "loc": "Listowel",
                    "loc_fr": "Listowel",
                    "lat": "43.7334",
                    "lng": "-80.9497"
                },
                {
                    "pcd": "N4X",
                    "loc":"St. Mary\'s",
                    "loc_fr":"St. Mary\'s",
                    "lat": "43.2655",
                    "lng": "-81.1687"
                },
                {
                    "pcd": "N4Z",
                    "loc": "Stratford South",
                    "loc_fr": "Stratford Sud",
                    "lat": "43.3634",
                    "lng": "-81.0069"
                },
                {
                    "pcd": "N5A",
                    "loc": "Stratford North",
                    "loc_fr": "Stratford Nord",
                    "lat": "43.3668",
                    "lng": "-80.9497"
                },
                {
                    "pcd": "N5C",
                    "loc": "Ingersoll",
                    "loc_fr": "Ingersoll",
                    "lat": "43.0334",
                    "lng": "-80.883"
                },
                {
                    "pcd": "N5H",
                    "loc": "Aylmer",
                    "loc_fr": "Aylmer",
                    "lat": "42.7668",
                    "lng": "-80.983"
                },
                {
                    "pcd": "N5L",
                    "loc": "Port Stanley",
                    "loc_fr": "Port Stanley",
                    "lat": "42.6668",
                    "lng": "-81.2164"
                },
                {
                    "pcd": "N5P",
                    "loc": "St. Thomas North",
                    "loc_fr": "St. Thomas Nord",
                    "mun": "St. Thomas",
                    "lat": "42.7779",
                    "lng": "-81.1769"
                },
                {
                    "pcd": "N5R",
                    "loc": "St. Thomas South",
                    "loc_fr": "St. Thomas Sud",
                    "mun": "St. Thomas",
                    "lat": "42.7597",
                    "lng": "-81.1762"
                },
                {
                    "pcd": "N5V",
                    "loc": "London (YXU / North and East Argyle / East Huron Heights)",
                    "loc_fr": "London (YXU / Nord and Est Argyle / Est Huron Heights)",
                    "mun": "London",
                    "lat": "43.0233",
                    "lng": "-81.1643"
                },
                {
                    "pcd": "N5W",
                    "loc": "London East (SW Argyle / Hamilton Road)",
                    "loc_fr": "London Est (SW Argyle / Hamilton Road)",
                    "mun": "London",
                    "lat": "42.9856",
                    "lng": "-81.1821"
                },
                {
                    "pcd": "N5X",
                    "loc": "London (Fanshawe / Stoneybrook / Stoney Creek / Uplands / East Masonville)",
                    "loc_fr": "London (Fanshawe / Stoneybrook / Stoney Creek / Uplands / Est Masonville)",
                    "mun": "London",
                    "lat": "43.0443",
                    "lng": "-81.2391"
                },
                {
                    "pcd": "N5Y",
                    "loc": "London (West Huron Heights / Carling)",
                    "loc_fr": "London (Ouest Huron Heights / Carling)",
                    "mun": "London",
                    "lat": "43.0123",
                    "lng": "-81.2307"
                },
                {
                    "pcd": "N5Z",
                    "loc": "London (Glen Cairn)",
                    "loc_fr": "London (Glen Cairn)",
                    "mun": "London",
                    "lat": "42.966",
                    "lng": "-81.2053"
                },
                {
                    "pcd": "N6A",
                    "loc": "London North (UWO)",
                    "loc_fr": "London Nord (UWO)",
                    "mun": "London",
                    "lat": "42.9976",
                    "lng": "-81.2563"
                },
                {
                    "pcd": "N6B",
                    "loc": "London Central",
                    "loc_fr": "London Central",
                    "mun": "London",
                    "lat": "42.9835",
                    "lng": "-81.2386"
                },
                {
                    "pcd": "N6C",
                    "loc": "London South (East Highland / North White Oaks / North Westminster)",
                    "loc_fr": "London Sud (Est Highland / Nord White Oaks / Nord-Ouestminster)",
                    "mun": "London",
                    "lat": "42.9582",
                    "lng": "-81.238"
                },
                {
                    "pcd": "N6E",
                    "loc": "London (South White Oaks / Central Westminster / East Longwoods / West Brockley)",
                    "loc_fr": "London (Sud White Oaks / Central Ouestminster / Est Longwoods / Ouest Brockley)",
                    "mun": "London",
                    "lat": "42.9185",
                    "lng": "-81.2244"
                },
                {
                    "pcd": "N6G",
                    "loc": "London (Sunningdale / West Masonville / Medway / NE Hyde Park / East Fox Hollow)",
                    "loc_fr": "London (Sunningdale / Ouest Masonville / Medway / NE Hyde Park / Est Fox Hollow)",
                    "mun": "London",
                    "lat": "43.0147",
                    "lng": "-81.3049"
                },
                {
                    "pcd": "N6H",
                    "loc": "London West (Central Hyde Park / Oakridge)",
                    "loc_fr": "London Ouest (Central Hyde Park / Oakridge)",
                    "mun": "London",
                    "lat": "42.9915",
                    "lng": "-81.3402"
                },
                {
                    "pcd": "N6J",
                    "loc": "London (Southcrest / East Westmount / West Highland)",
                    "loc_fr": "London (Sudcrest / Est Ouestmount / Ouest Highland)",
                    "mun": "London",
                    "lat": "42.9546",
                    "lng": "-81.2735"
                },
                {
                    "pcd": "N6K",
                    "loc": "London (Riverbend / Woodhull / North Sharon Creek / Byron / West Westmount)",
                    "loc_fr": "London (Riverbend / Woodhull / Nord Sharon Creek / Byron / Ouest Ouestmount)",
                    "mun": "London",
                    "lat": "42.9536",
                    "lng": "-81.3418"
                },
                {
                    "pcd": "N6L",
                    "loc": "London (East Tempo)",
                    "loc_fr": "London (Est Tempo)",
                    "mun": "London",
                    "lat": "42.8719",
                    "lng": "-81.2472"
                },
                {
                    "pcd": "N6M",
                    "loc": "London (Jackson / Old Victoria / Bradley / North Highbury)",
                    "loc_fr": "London (Jackson / Old Victoria / Bradley / Nord Highbury)",
                    "mun": "London",
                    "lat": "42.9632",
                    "lng": "-81.1392"
                },
                {
                    "pcd": "N6N",
                    "loc": "London (South Highbury / Glanworth / East Brockley / SE Westminster)",
                    "loc_fr": "London (Sud Highbury / Glanworth / Est Brockley / SE Ouestminster)",
                    "mun": "London",
                    "lat": "42.8997",
                    "lng": "-81.1592"
                },
                {
                    "pcd": "N6P",
                    "loc": "London (Talbot / Lambeth / West Tempo / South Sharon Creek)",
                    "loc_fr": "London (Talbot / Lambeth / Ouest Tempo / Sud Sharon Creek)",
                    "mun": "London",
                    "lat": "42.8909",
                    "lng": "-81.3236"
                },
                {
                    "pcd": "N7A",
                    "loc": "Goderich",
                    "loc_fr": "Goderich",
                    "lat": "43.7501",
                    "lng": "-81.7165"
                },
                {
                    "pcd": "N7G",
                    "loc": "Strathroy",
                    "loc_fr": "Strathroy",
                    "lat": "42.9551",
                    "lng": "-81.6223"
                },
                {
                    "pcd": "N7L",
                    "loc": "Chatham Northwest",
                    "loc_fr": "Chatham Nord-Ouest",
                    "mun": "Chatham",
                    "lat": "42.4209",
                    "lng": "-82.1993"
                },
                {
                    "pcd": "N7M",
                    "loc": "Chatham Southeast",
                    "loc_fr": "Chatham Sud-Est",
                    "mun": "Chatham",
                    "lat": "42.4238",
                    "lng": "-82.1183"
                },
                {
                    "pcd": "N7S",
                    "loc": "Sarnia Central",
                    "loc_fr": "Sarnia Central",
                    "mun": "Sarnia",
                    "lat": "42.9888",
                    "lng": "-82.3592"
                },
                {
                    "pcd": "N7T",
                    "loc": "Sarnia Southwest",
                    "loc_fr": "Sarnia Sud-Ouest",
                    "mun": "Sarnia",
                    "lat": "42.9578",
                    "lng": "-82.2777"
                },
                {
                    "pcd": "N7V",
                    "loc": "Sarnia Northwest",
                    "loc_fr": "Sarnia Nord-Ouest",
                    "mun": "Sarnia",
                    "lat": "42.9998",
                    "lng": "-82.3926"
                },
                {
                    "pcd": "N7W",
                    "loc": "Sarnia Southeast",
                    "loc_fr": "Sarnia Sud-Est",
                    "mun": "Sarnia",
                    "lat": "42.9644",
                    "lng": "-82.3259"
                },
                {
                    "pcd": "N7X",
                    "loc": "Sarnia Northeast",
                    "loc_fr": "Sarnia Nord-Est",
                    "mun": "Sarnia",
                    "lat": "43.0214",
                    "lng": "-82.3212"
                },
                {
                    "pcd": "N8A",
                    "loc": "Wallaceburg",
                    "loc_fr": "Wallaceburg",
                    "lat": "42.593",
                    "lng": "-82.3885"
                },
                {
                    "pcd": "N8H",
                    "loc": "Leamington",
                    "loc_fr": "Leamington",
                    "lat": "42.0549",
                    "lng": "-82.6062"
                },
                {
                    "pcd": "N8M",
                    "loc": "Essex",
                    "loc_fr": "Essex",
                    "lat": "42.1751",
                    "lng": "-82.8248"
                },
                {
                    "pcd": "N8N",
                    "loc": "Tecumseh Outskirts",
                    "loc_fr": "Tecumseh Outskirts",
                    "mun": "Tecumseh",
                    "lat": "42.2946",
                    "lng": "-82.8667"
                },
                {
                    "pcd": "N8P",
                    "loc": "Windsor (East Riverside)",
                    "loc_fr": "Windsor (Est Riverside)",
                    "mun": "Windsor",
                    "lat": "42.3276",
                    "lng": "-82.9104"
                },
                {
                    "pcd": "N8R",
                    "loc": "Windsor (East Forest Glade)",
                    "loc_fr": "Windsor (Est Forest Glade)",
                    "mun": "Windsor",
                    "lat": "42.3067",
                    "lng": "-82.915"
                },
                {
                    "pcd": "N8S",
                    "loc": "Windsor (Riverside)",
                    "loc_fr": "Windsor (Riverside)",
                    "mun": "Windsor",
                    "lat": "42.3283",
                    "lng": "-82.9472"
                },
                {
                    "pcd": "N8T",
                    "loc": "Windsor (West Forest Glade / East Fontainbleu)",
                    "loc_fr": "Windsor (Ouest Forest Glade / Est Fontainbleu)",
                    "mun": "Windsor",
                    "lat": "42.3037",
                    "lng": "-82.9459"
                },
                {
                    "pcd": "N8V",
                    "loc": "Tecumseh (YQG)",
                    "loc_fr": "Tecumseh (YQG)",
                    "mun": "Tecumseh",
                    "lat": "42.2773",
                    "lng": "-82.9447"
                },
                {
                    "pcd": "N8W",
                    "loc": "Windsor (South Walkerville / West Fontainbleu / Walker Farm / Devonshire)",
                    "loc_fr": "Windsor (Sud Walkerville / Ouest Fontainbleu / Walker Farm / Devonshire)",
                    "mun": "Windsor",
                    "lat": "42.2836",
                    "lng": "-82.9771"
                },
                {
                    "pcd": "N8X",
                    "loc": "Windsor South Central (West Walkerville / Remington Park)",
                    "loc_fr": "Windsor Sud Central (Ouest Walkerville / Remington Park)",
                    "mun": "Windsor",
                    "lat": "42.2926",
                    "lng": "-83.0186"
                },
                {
                    "pcd": "N8Y",
                    "loc": "Windsor East (East Walkerville)",
                    "loc_fr": "Windsor Est (Est Walkerville)",
                    "mun": "Windsor",
                    "lat": "42.3176",
                    "lng": "-82.9929"
                },
                {
                    "pcd": "N9A",
                    "loc": "Windsor (City Centre / NW Walkerville)",
                    "loc_fr": "Windsor (City Centre / NW Walkerville)",
                    "mun": "Windsor",
                    "lat": "42.2007",
                    "lng": "-83.0276"
                },
                {
                    "pcd": "N9B",
                    "loc": "Windsor (University / South Cameron)",
                    "loc_fr": "Windsor (University / Sud Cameron)",
                    "mun": "Windsor",
                    "lat": "42.2949",
                    "lng": "-83.052"
                },
                {
                    "pcd": "N9C",
                    "loc": "Windsor (Sandwich / Ojibway / West Malden)",
                    "loc_fr": "Windsor (Sandwich / Ojibway / Ouest Malden)",
                    "mun": "Windsor",
                    "lat": "42.2767",
                    "lng": "-83.0793"
                },
                {
                    "pcd": "N9E",
                    "loc": "Windsor South (East Malden)",
                    "loc_fr": "Windsor Sud (Est Malden)",
                    "mun": "Windsor",
                    "lat": "42.2652",
                    "lng": "-83.0314"
                },
                {
                    "pcd": "N9G",
                    "loc": "Windsor (Roseland)",
                    "loc_fr": "Windsor (Roseland)",
                    "mun": "Windsor",
                    "lat": "42.2481",
                    "lng": "-82.9952"
                },
                {
                    "pcd": "N9H",
                    "loc": "La Salle East",
                    "loc_fr": "La Salle Est",
                    "mun": "La Salle",
                    "lat": "42.2318",
                    "lng": "-83.0281"
                },
                {
                    "pcd": "N9J",
                    "loc": "La Salle West",
                    "loc_fr": "La Salle Ouest",
                    "mun": "La Salle",
                    "lat": "42.2187",
                    "lng": "-83.0801"
                },
                {
                    "pcd": "N9K",
                    "loc": "Tecumseh Central",
                    "loc_fr": "Tecumseh Central",
                    "lat": "42.2978",
                    "lng": "-82.8701"
                },
                {
                    "pcd": "N9V",
                    "loc": "Amherstburg",
                    "loc_fr": "Amherstburg",
                    "lat": "42.1168",
                    "lng": "-83.0498"
                },
                {
                    "pcd": "N9Y",
                    "loc": "Kingsville",
                    "loc_fr": "Kingsville",
                    "lat": "42.0502",
                    "lng": "-82.7598"
                },
                {
                    "pcd": "P0A",
                    "loc":"Nipissing Central (Burk\'s Falls)",
                    "loc_fr":"Nipissing Central (Burk\'s Falls)",
                    "mun": "Nipissing",
                    "lat": "45.5881",
                    "lng": "-79.3546"
                },
                {
                    "pcd": "P0B",
                    "loc": "Nipissing South (Utterson)",
                    "loc_fr": "Nipissing Sud (Utterson)",
                    "mun": "Nipissing",
                    "lat": "45.1863",
                    "lng": "-79.4115"
                },
                {
                    "pcd": "P0C",
                    "loc": "Parry Sound Mid-Shore (Bala)",
                    "loc_fr": "Parry Sound Mid-Shore (Bala)",
                    "mun": "Parry Sound",
                    "lat": "45.1275",
                    "lng": "-79.786"
                },
                {
                    "pcd": "P0E",
                    "loc": "Parry Sound South Shore (Kilworthy)",
                    "loc_fr": "Parry Sound Sud Shore (Kilworthy)",
                    "mun": "Parry Sound",
                    "lat": "44.8608",
                    "lng": "-79.5069"
                },
                {
                    "pcd": "P0G",
                    "loc": "Parry Sound North Shore (Nobel)",
                    "loc_fr": "Parry Sound Nord Shore (Nobel)",
                    "mun": "Parry Sound",
                    "lat": "45.6718",
                    "lng": "-80.3688"
                },
                {
                    "pcd": "P0H",
                    "loc": "Nipissing North (Callander)",
                    "loc_fr": "Nipissing Nord (Callander)",
                    "mun": "Nipissing",
                    "lat": "46.3109",
                    "lng": "-79.3617"
                },
                {
                    "pcd": "P0J",
                    "loc": "Timiskaming South (Temiskaming Shores)",
                    "loc_fr": "Timiskaming Sud (Temiskaming Shores)",
                    "mun": "Timiskaming",
                    "lat": "47.5776",
                    "lng": "-80.2036"
                },
                {
                    "pcd": "P0K",
                    "loc": "Timiskaming North (Iroquois Falls A)",
                    "loc_fr": "Timiskaming Nord (Iroquois Falls A)",
                    "mun": "Timiskaming",
                    "lat": "48.5234",
                    "lng": "-80.3081"
                },
                {
                    "pcd": "P0L",
                    "loc": "Cochrane Region (Hearst)",
                    "loc_fr": "Cochrane Region (Hearst)",
                    "lat": "51.97",
                    "lng": "-83.5369"
                },
                {
                    "pcd": "P0M",
                    "loc": "Algoma, Sudbury District and Greater Sudbury (Chelmsford)",
                    "loc_fr": "Algoma, Sudbury District and Greater Sudbury (Chelmsford)",
                    "lat": "47.6526",
                    "lng": "-82.4753"
                },
                {
                    "pcd": "P0N",
                    "loc": "Timmins Region (South Porcupine)",
                    "loc_fr": "Timmins Region (Sud Porcupine)",
                    "lat": "48.6027",
                    "lng": "-81.0115"
                },
                {
                    "pcd": "P0P",
                    "loc": "Manitoulin (Little Current)",
                    "loc_fr": "Manitoulin (Little Current)",
                    "lat": "45.7565",
                    "lng": "-82.2151"
                },
                {
                    "pcd": "P0S",
                    "loc": "Lake Superior East Shore (Wawa)",
                    "loc_fr": "Lake Superior Est Shore (Wawa)",
                    "mun": "Lake Superior",
                    "lat": "48.048",
                    "lng": "-84.6727"
                },
                {
                    "pcd": "P0T",
                    "loc": "Lake Superior North Shore (Marathon)",
                    "loc_fr": "Lake Superior Nord Shore (Marathon)",
                    "mun": "Lake Superior",
                    "lat": "49.2924",
                    "lng": "-88.756"
                },
                {
                    "pcd": "P0V",
                    "loc": "Northwestern Ontario (Red Lake)",
                    "loc_fr": "Nord-Ouestern Ontario (Red Lake)",
                    "lat": "52.9648",
                    "lng": "-90.1505"
                },
                {
                    "pcd": "P0W",
                    "loc": "Rainy River Region (Emo)",
                    "loc_fr": "Rainy River Region (Emo)",
                    "lat": "48.875",
                    "lng": "-93.7522"
                },
                {
                    "pcd": "P0X",
                    "loc": "Kenora Region (Keewatin)",
                    "loc_fr": "Kenora Region (Keewatin)",
                    "lat": "50.9293",
                    "lng": "-93.3095"
                },
                {
                    "pcd": "P0Y",
                    "loc": "Lake of the Woods East Shore (Ingolf)",
                    "loc_fr": "Lake of the Woods Est Shore (Ingolf)",
                    "lat": "49.7603",
                    "lng": "-95.1003"
                },
                {
                    "pcd": "P1A",
                    "loc": "North Bay South",
                    "loc_fr": "Nord Bay Sud",
                    "mun": "North Bay",
                    "lat": "46.2801",
                    "lng": "-79.4502"
                },
                {
                    "pcd": "P1B",
                    "loc": "North Bay Central",
                    "loc_fr": "Nord Bay Central",
                    "mun": "North Bay",
                    "lat": "46.3364",
                    "lng": "-79.583"
                },
                {
                    "pcd": "P1C",
                    "loc": "North Bay North",
                    "loc_fr": "Nord Bay Nord",
                    "mun": "North Bay",
                    "lat": "46.3397",
                    "lng": "-79.4223"
                },
                {
                    "pcd": "P1H",
                    "loc": "Huntsville",
                    "loc_fr": "Huntsville",
                    "lat": "45.3334",
                    "lng": "-79.2163"
                },
                {
                    "pcd": "P1L",
                    "loc": "Bracebridge",
                    "loc_fr": "Bracebridge",
                    "lat": "45.0334",
                    "lng": "-79.3163"
                },
                {
                    "pcd": "P1P",
                    "loc": "Gravenhurst",
                    "loc_fr": "Gravenhurst",
                    "lat": "44.9168",
                    "lng": "-79.3663"
                },
                {
                    "pcd": "P2A",
                    "loc": "Parry Sound",
                    "loc_fr": "Parry Sound",
                    "lat": "45.3501",
                    "lng": "-80.033"
                },
                {
                    "pcd": "P2B",
                    "loc": "Sturgeon Falls",
                    "loc_fr": "Sturgeon Falls",
                    "lat": "46.3668",
                    "lng": "-79.9164"
                },
                {
                    "pcd": "P2N",
                    "loc": "Kirkland Lake",
                    "loc_fr": "Kirkland Lake",
                    "lat": "48.1446",
                    "lng": "-80.0377"
                },
                {
                    "pcd": "P3A",
                    "loc": "Greater Sudbury (New Sudbury)",
                    "loc_fr": "Greater Sudbury (New Sudbury)",
                    "mun": "Greater Sudbury",
                    "lat": "46.5187",
                    "lng": "-80.934"
                },
                {
                    "pcd": "P3B",
                    "loc": "Greater Sudbury (Downtown / Minnow Lake)",
                    "loc_fr": "Greater Sudbury (Centre-ville de / Minnow Lake)",
                    "mun": "Greater Sudbury",
                    "lat": "46.4847",
                    "lng": "-80.9304"
                },
                {
                    "pcd": "P3C",
                    "loc": "Greater Sudbury (Gatchell / West End / Little Britain)",
                    "loc_fr": "Greater Sudbury (Gatchell / Ouest End / Little Britain)",
                    "mun": "Greater Sudbury",
                    "lat": "46.5133",
                    "lng": "-81.0225"
                },
                {
                    "pcd": "P3E",
                    "loc": "Greater Sudbury (Robinson / Lockerby)",
                    "loc_fr": "Greater Sudbury (Robinson / Lockerby)",
                    "mun": "Greater Sudbury",
                    "lat": "46.2676",
                    "lng": "-80.9063"
                },
                {
                    "pcd": "P3G",
                    "loc": "Greater Sudbury (Lo-Ellen / McFarlane Lake)",
                    "loc_fr": "Greater Sudbury (Lo-Ellen / McFarlane Lake)",
                    "mun": "Greater Sudbury",
                    "lat": "46.4031",
                    "lng": "-80.9745"
                },
                {
                    "pcd": "P3L",
                    "loc": "Greater Sudbury (Garson)",
                    "loc_fr": "Greater Sudbury (Garson)",
                    "mun": "Greater Sudbury",
                    "lat": "46.5942",
                    "lng": "-80.85"
                },
                {
                    "pcd": "P3N",
                    "loc": "Greater Sudbury (Val Caron)",
                    "loc_fr": "Greater Sudbury (Val Caron)",
                    "mun": "Greater Sudbury",
                    "lat": "46.5845",
                    "lng": "-81.0029"
                },
                {
                    "pcd": "P3P",
                    "loc": "Greater Sudbury (Hanmer)",
                    "loc_fr": "Greater Sudbury (Hanmer)",
                    "mun": "Greater Sudbury",
                    "lat": "46.7259",
                    "lng": "-81.0166"
                },
                {
                    "pcd": "P3Y",
                    "loc": "Greater Sudbury (Lively)",
                    "loc_fr": "Greater Sudbury (Lively)",
                    "mun": "Greater Sudbury",
                    "lat": "46.4431",
                    "lng": "-81.127"
                },
                {
                    "pcd": "P4N",
                    "loc": "Timmins Southeast",
                    "loc_fr": "Timmins Sud-Est",
                    "mun": "Timmins",
                    "lat": "48.4669",
                    "lng": "-81.3331"
                },
                {
                    "pcd": "P4P",
                    "loc": "Timmins North",
                    "loc_fr": "Timmins Nord",
                    "mun": "Timmins",
                    "lat": "48.4985",
                    "lng": "-81.3448"
                },
                {
                    "pcd": "P4R",
                    "loc": "Timmins West",
                    "loc_fr": "Timmins Ouest",
                    "mun": "Timmins",
                    "lat": "48.4702",
                    "lng": "-81.3997"
                },
                {
                    "pcd": "P5A",
                    "loc": "Elliot Lake",
                    "loc_fr": "Elliot Lake",
                    "lat": "46.3834",
                    "lng": "-82.6332"
                },
                {
                    "pcd": "P5E",
                    "loc": "Espanola",
                    "loc_fr": "Espanola",
                    "lat": "46.2584",
                    "lng": "-81.7665"
                },
                {
                    "pcd": "P5N",
                    "loc": "Kapuskasing",
                    "loc_fr": "Kapuskasing",
                    "lat": "49.4169",
                    "lng": "-82.4331"
                },
                {
                    "pcd": "P6A",
                    "loc": "Sault Ste. Marie East",
                    "loc_fr": "Sault Ste. Marie Est",
                    "mun": "Sault Ste.",
                    "lat": "46.5168",
                    "lng": "-84.3333"
                },
                {
                    "pcd": "P6B",
                    "loc": "Sault Ste. Marie Central",
                    "loc_fr": "Sault Ste. Marie Central",
                    "mun": "Sault Ste.",
                    "lat": "46.5307",
                    "lng": "-84.3046"
                },
                {
                    "pcd": "P6C",
                    "loc": "Sault Ste. Marie North",
                    "loc_fr": "Sault Ste. Marie Nord",
                    "mun": "Sault Ste.",
                    "lat": "46.5353",
                    "lng": "-84.3732"
                },
                {
                    "pcd": "P7A",
                    "loc": "Thunder Bay Northeast",
                    "loc_fr": "Thunder Bay Nord-Est",
                    "mun": "Thunder Bay",
                    "lat": "48.4601",
                    "lng": "-89.2035"
                },
                {
                    "pcd": "P7B",
                    "loc": "Thunder Bay North Central",
                    "loc_fr": "Thunder Bay Nord Central",
                    "mun": "Thunder Bay",
                    "lat": "48.9475",
                    "lng": "-89.4063"
                },
                {
                    "pcd": "P7C",
                    "loc": "Thunder Bay Central",
                    "loc_fr": "Thunder Bay Central",
                    "mun": "Thunder Bay",
                    "lat": "48.352",
                    "lng": "-89.4649"
                },
                {
                    "pcd": "P7E",
                    "loc": "Thunder Bay South Central",
                    "loc_fr": "Thunder Bay Sud Central",
                    "mun": "Thunder Bay",
                    "lat": "48.3684",
                    "lng": "-89.284"
                },
                {
                    "pcd": "P7G",
                    "loc": "Thunder Bay North",
                    "loc_fr": "Thunder Bay Nord",
                    "mun": "Thunder Bay",
                    "lat": "48.4001",
                    "lng": "-89.3168"
                },
                {
                    "pcd": "P7J",
                    "loc": "Thunder Bay South",
                    "loc_fr": "Thunder Bay Sud",
                    "mun": "Thunder Bay",
                    "lat": "48.2834",
                    "lng": "-89.3668"
                },
                {
                    "pcd": "P7K",
                    "loc": "Thunder Bay West",
                    "loc_fr": "Thunder Bay Ouest",
                    "mun": "Thunder Bay",
                    "lat": "48.3728",
                    "lng": "-89.3484"
                },
                {
                    "pcd": "P7L",
                    "loc": "Neebing",
                    "loc_fr": "Neebing",
                    "lat": "48.1668",
                    "lng": "-89.4168"
                },
                {
                    "pcd": "P8N",
                    "loc": "Dryden",
                    "loc_fr": "Dryden",
                    "lat": "49.7833",
                    "lng": "-92.7503"
                },
                {
                    "pcd": "P8T",
                    "loc": "Sioux Lookout",
                    "loc_fr": "Sioux Lookout",
                    "lat": "50.0668",
                    "lng": "-91.9836"
                },
                {
                    "pcd": "P9A",
                    "loc": "Fort Frances",
                    "loc_fr": "Fort Frances",
                    "lat": "48.6393",
                    "lng": "-93.4469"
                },
                {
                    "pcd": "P9N",
                    "loc": "Kenora",
                    "loc_fr": "Kenora",
                    "lat": "49.7573",
                    "lng": "-94.3427"
                }
            ]')
        },AVhD:function(e,a){e.exports="data:image/png;base64,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"
        },BGeV:function(e,a,t){},Bl7J:function(e,a,t){
            "use strict";var n=t("q1tI"),o=t.n(n),s=t("JI7f"),i=(t("9kja"),function(e){var a=e.children;return o.a.createElement("div",
                {className: "critical-alert-wrapper"
                },o.a.createElement("div",
                {className: "ontario-row"
                },o.a.createElement("div",
                {className: "ontario-column ontario-small-12"
                },o.a.createElement("span",
                {className: "critical-alert-icon"
                }),o.a.createElement("div",
                {className: "critical-alert-body"
                },a))))
            }),r=t("d+rA"),d=(t("HWyL"),t("N5by")),c=t.n(d),p=t("AVhD"),l=t.n(p),u=function(e){var a=e.lang,t=e.basePaths,n="fr"===a?"en": "fr";return o.a.createElement("header",
                {className: "ontario-main-header"
                },o.a.createElement("div",
                {className: "ontario-row"
                },o.a.createElement("div",
                {className: "ontario-small-5 ontario-columns"
                },o.a.createElement("a",
                {href: "https://www.ontario.ca",className: "ontario-main-header__logo-link"
                },o.a.createElement("img",
                {className: "ontario-header-logo ontario-hide-for-print",src:c.a,alt: "Government of Ontario homepage"
                })),o.a.createElement("img",
                {className: "ontario-site-logo-print ontario-show-for-print",src:l.a,alt: "Government of Ontario logo"
                })),o.a.createElement("div",
                {className: "ontario-small-7 ontario-columns ontario-text-right ontario-main-header__link"
                },o.a.createElement("a",
                {href:t[n
                    ],className: "ontario-hide-for-small-only"
                },r.k[n
                ].lang),o.a.createElement("a",
                {href:t[n
                    ],className: "ontario-show-for-small-only"
                },r.k[n
                ].lang_abbr))))
            },h=(t("y7hu"),t("Ogn5"),function(e){var a=e.lang;return o.a.createElement("footer",
                {className: "footer"
                },o.a.createElement("div",
                {className: "ontario-row"
                },o.a.createElement("div",
                {className: "ontario-columns ontario-small-12"
                },o.a.createElement("ul",
                {className: "footer__links-container footer__links-container--inline"
                },r.i&&r.i[a
                ].map((function(e,a){return o.a.createElement("li",
                    {key:a
                    },o.a.createElement("a",
                    {href:e.link,target: "_blank",className: "footer__link",rel: "noopener"
                    },e.text,
                    " ",o.a.createElement("span",
                    {className: "ontario-show-for-sr"
                    },
                    "This link will open in a new window.")))
                }))),o.a.createElement("div",
                {className: "footer__copyright"
                },o.a.createElement("a",
                {className: "footer__link",href:r.m[a
                    ].link,target: "_blank",rel: "noopener"
                },r.m[a
                ].text,o.a.createElement("span",
                {className: "ontario-show-for-sr"
                },
                "This link will open in a new window."))))))
            }),m=t("CVFZ"),y=t("TJpk"),_=t.n(y);var w=function(e){var a=e.lang,t=e.isVaccine,n=e.meta,s=void 0===n?{}:n,i=m.data.site.siteMetadata[t?"vaccinationLocations": "assessmentCentres"
                ];return o.a.createElement(_.a,
                {htmlAttributes: {lang:a
                    },title:i[a
                    ].title,meta: [
                        {name: "description",content:i[a
                            ].description
                        },
                        {property: "og:title",content:i[a
                            ].title
                        },
                        {property: "og:description",content:i[a
                            ].description
                        },
                        {property: "og:type",content: "website"
                        },
                        {property: "og:url",content:i[a
                            ].og_url
                        },
                        {property: "og:image",content:i[a
                            ].og_image
                        },
                        {property: "og:locale",content:i[a
                            ].og_locale
                        },
                        {name: "twitter:card",content: "summary_large_image"
                        },
                        {name: "twitter:site",content:i[a
                            ].twitter_site
                        },
                        {name: "twitter:creator",content:i[a
                            ].twitter_site
                        },
                        {name: "twitter:title",content:i[a
                            ].title
                        },
                        {name: "twitter:description",content:i[a
                            ].description
                        }
                    ].concat(s)
                })
            };t("BGeV"),t("PP/8"),t("ZS31"),t("we77"),a.a=function(e){var a=e.lang,t=e.basePaths,n=e.isVaccine,d=e.children;return o.a.createElement(o.a.Fragment,
                null,o.a.createElement(w,
                {lang:a,isVaccine:n
                }),o.a.createElement("div",
                {className: "ontario-text-center ontario-hide-for-print"
                },o.a.createElement(s.b,
                null,r.k[a
                ].skipNavText)),o.a.createElement(i,
                null,r.k[a
                ].lockdownAlert),o.a.createElement(u,
                {lang:a,basePaths:t
                }),o.a.createElement("main",
                {id: "main-content"
                },o.a.createElement("div",
                {className: "ontario-row"
                },o.a.createElement("div",
                {className: "ontario-small-12 ontario-columns"
                },d))),o.a.createElement(h,
                {lang:a
                }))
            }
        },CVFZ:function(e){e.exports=JSON.parse('{
                "data": {
                    "site": {
                        "siteMetadata": {
                            "assessmentCentres": {
                                "en": {
                                    "title": "COVID-19 testing locations",
                                    "description": "Find your closest Ontario testing location to get a COVID‑19 test.",
                                    "author": "@ONThealth",
                                    "twitter_site": "@ONThealth",
                                    "og_url": "https://covid-19.ontario.ca/assessment-centre-locations/",
                                    "og_title": "COVID-19 testing locations",
                                    "og_image": "https://covid-19.ontario.ca/covid-19-sat-assets/social_image_en.jpeg",
                                    "og_locale": "en_CA"
                                },
                                "fr": {
                                    "title": "Les centres de dépistage de la COVID-19",
                                    "description": "Trouvez un centre de dépistage de l’Ontario près de chez vous pour passer un test de dépistage de la COVID‑19.  ",
                                    "author": "@ONThealth",
                                    "twitter_site": "@ONThealth",
                                    "og_url": "https://covid-19.ontario.ca/centres-depistage/",
                                    "og_title": "Les centres de dépistage de la COVID-19",
                                    "og_image": "https://covid-19.ontario.ca/covid-19-sat-assets/social_image_fr.jpeg",
                                    "og_locale": "fr_CA"
                                }
                            },
                            "vaccinationLocations": {
                                "en": {
                                    "title": "COVID-19 pharmacy vaccine locations",
                                    "description": "Find your closest pharmacy to get the AstraZeneca COVID-19 vaccine if you are age 55 or older.",
                                    "author": "@ONThealth",
                                    "twitter_site": "@ONThealth",
                                    "og_url": "https://covid-19.ontario.ca/vaccine-locations/",
                                    "og_title": "COVID-19 pharmacy vaccine locations",
                                    "og_image": "https://covid-19.ontario.ca/covid-19-sat-assets/social_image_en.jpeg",
                                    "og_locale": "en_CA"
                                },
                                "fr": {
                                    "title": "Emplacements pour la vaccination de la COVID-19",
                                    "description":"Trouvez la pharmacie la plus proche pour recevoir le vaccin contre la COVID-19 d\'AstraZeneca si vous avez 55 ans ou plus.",
                                    "author": "@ONThealth",
                                    "twitter_site": "@ONThealth",
                                    "og_url": "https://covid-19.ontario.ca/emplacements-pour-la-vaccination/",
                                    "og_title": "Emplacements pour la vaccination de la COVID-19",
                                    "og_image": "https://covid-19.ontario.ca/covid-19-sat-assets/social_image_fr.jpeg",
                                    "og_locale": "fr_CA"
                                }
                            }
                        }
                    }
                }
            }')
        },EIMA:function(e,a,t){},HWyL:function(e,a,t){},J9JN:function(e,a,t){
            "use strict";t("YBKJ");var n=t("ku8+");var o={ordinalNumber:function(e,a){var t=Number(e),n=t%100;if(n>20||n<10)switch(n%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"
                    }return t+"th"
                },era:Object(n.a)({values: {narrow: [
                            "B",
                            "A"
                        ],abbreviated: [
                            "BC",
                            "AD"
                        ],wide: [
                            "Before Christ",
                            "Anno Domini"
                        ]
                    },defaultWidth: "wide"
                }),quarter:Object(n.a)({values: {narrow: [
                            "1",
                            "2",
                            "3",
                            "4"
                        ],abbreviated: [
                            "Q1",
                            "Q2",
                            "Q3",
                            "Q4"
                        ],wide: [
                            "1st quarter",
                            "2nd quarter",
                            "3rd quarter",
                            "4th quarter"
                        ]
                    },defaultWidth: "wide",argumentCallback:function(e){return Number(e)-1
                    }
                }),month:Object(n.a)({values: {narrow: [
                            "J",
                            "F",
                            "M",
                            "A",
                            "M",
                            "J",
                            "J",
                            "A",
                            "S",
                            "O",
                            "N",
                            "D"
                        ],abbreviated: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                        ],wide: [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December"
                        ]
                    },defaultWidth: "wide"
                }),day:Object(n.a)({values: {narrow: [
                            "S",
                            "M",
                            "T",
                            "W",
                            "T",
                            "F",
                            "S"
                        ],short: [
                            "Su",
                            "Mo",
                            "Tu",
                            "We",
                            "Th",
                            "Fr",
                            "Sa"
                        ],abbreviated: [
                            "Sun",
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat"
                        ],wide: [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                        ]
                    },defaultWidth: "wide"
                }),dayPeriod:Object(n.a)({values: {narrow: {am: "a",pm: "p",midnight: "mi",noon: "n",morning: "morning",afternoon: "afternoon",evening: "evening",night: "night"
                        },abbreviated: {am: "AM",pm: "PM",midnight: "midnight",noon: "noon",morning: "morning",afternoon: "afternoon",evening: "evening",night: "night"
                        },wide: {am: "a.m.",pm: "p.m.",midnight: "midnight",noon: "noon",morning: "morning",afternoon: "afternoon",evening: "evening",night: "night"
                        }
                    },defaultWidth: "wide",formattingValues: {narrow: {am: "a",pm: "p",midnight: "mi",noon: "n",morning: "in the morning",afternoon: "in the afternoon",evening: "in the evening",night: "at night"
                        },abbreviated: {am: "AM",pm: "PM",midnight: "midnight",noon: "noon",morning: "in the morning",afternoon: "in the afternoon",evening: "in the evening",night: "at night"
                        },wide: {am: "a.m.",pm: "p.m.",midnight: "midnight",noon: "noon",morning: "in the morning",afternoon: "in the afternoon",evening: "in the evening",night: "at night"
                        }
                    },defaultFormattingWidth: "wide"
                })
            };a.a=o
        },JI7f:function(e,a,t){
            "use strict";t.d(a,
            "a",(function(){return p
            })),t.d(a,
            "b",(function(){return c
            }));t("E5k/"),t("sc67"),t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi");var n=t("q1tI"),o=t.n(n),s=(t("JHok"),t("MIFh"),t("sC2a"),t("OeI1"),t("q8oJ"),t("C9fy"),t("2W6z"),i()?o.a.useLayoutEffect:o.a.useEffect,r);"undefined"!=typeof window&&window.Math==Math?window: "undefined"!=typeof self&&self.Math==Math&&self;function i(){return"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement
            }function r(){}function d(e,a){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n
                ],a.indexOf(t)>=0||(o[t
                ]=e[t
                ]);return o
            }var c=function(e){var a=e.children,t=void 0===a?"Skip to content":a,i=e.contentId,r=d(e,
                [
                    "children",
                    "contentId"
                ]),c=i||"reach-skip-nav";return Object(n.useEffect)((function(){return s("skip-nav")
                }),
                []),o.a.createElement("a",Object.assign({},r,
                {href: "#"+c,
                    "data-reach-skip-link": "",
                    "data-reach-skip-nav-link": ""
                }),t)
            };var p=function(e){var a=e.id,t=d(e,
                [
                    "id"
                ]),n=a||"reach-skip-nav";return o.a.createElement("div",Object.assign({},t,
                {id:n,
                    "data-reach-skip-nav-content": ""
                }))
            }
        },
        "N/8v":function(e,a,t){t("YbXK"),t("cFtU"),t("pJf4"),t("q8oJ"),t("C9fy"),t("m210"),t("MIFh"),t("+ar0"),t("xtjI"),t("R48M"),t("JHok"),t("OeI1"),t("4DPX"),t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),function(e,a){
                "use strict";function t(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable
                        }))),t.push.apply(t,n)
                    }return t
                }function n(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a
                        ]?arguments[a
                        ]: {};a%2?t(Object(n),!0).forEach((function(a){var t,o,s;t=e,s=n[o=a
                            ],o in t?Object.defineProperty(t,o,
                            {value:s,enumerable:!0,configurable:!0,writable:!0
                            }):t[o
                            ]=s
                        })):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))
                        }))
                    }return e
                }function o(e,a){return function(e){if(Array.isArray(e))return e
                    }(e)||function(e,a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,s=void 0;try{for(var i,r=e[Symbol.iterator
                                ]();!(n=(i=r.next()).done)&&(t.push(i.value),!a||t.length!==a);n=!0);
                            }catch(e){o=!0,s=e
                            }finally{try{n||null==r.return||r.return()
                                }finally{if(o)throw s
                                }
                            }return t
                        }
                    }(e,a)||function(e,a){if(e){if("string"==typeof e)return s(e,a);var t=Object.prototype.toString.call(e).slice(8,
                            -1);return"Object"===t&&e.constructor&&(t=e.constructor.name),
                            "Map"===t||"Set"===t?Array.from(t): "Arguments"===t||/^(?:Ui|I)nt(?: 8|16|32)(?:Clamped)?Array$/.test(t)?s(e,a):void 0
                        }
                    }(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }function s(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t
                    ]=e[t
                    ];return n
                }var i={enableHighAccuracy:!1,timeout: 1/0,maximumAge: 0
                };e.usePosition=function(e,t){function s(e){var a=e.coords,t=e.timestamp;u({latitude:a.latitude,longitude:a.longitude,accuracy:a.accuracy,timestamp:t
                        })
                    }function r(e){y(e.message)
                    }var d=0<arguments.length&&void 0!==e&&e,c=1<arguments.length&&void 0!==t?t:i,p=o(a.useState({}),
                    2),l=p[
                        0
                    ],u=p[
                        1
                    ],h=o(a.useState(null),
                    2),m=h[
                        0
                    ],y=h[
                        1
                    ];return a.useEffect((function(){if(navigator&&navigator.geolocation){var e=null;return d?e=navigator.geolocation.watchPosition(s,r,c):navigator.geolocation.getCurrentPosition(s,r,c),function(){return e&&navigator.geolocation.clearWatch(e)
                            }
                        }y("Geolocation is not supported")
                    }),
                    [c.enableHighAccuracy,c.timeout,c.maximumAge
                    ]),n({},l,
                    {error:m
                    })
                },Object.defineProperty(e,
                "__esModule",
                {value:!0
                })
            }(a,t("q1tI"))
        },N5by:function(e,a){e.exports="data:image/png;base64,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"
        },Ogn5:function(e,a,t){},
        "PP/8":function(e,a,t){},QVOa:function(e,a,t){
            "use strict";t("sC2a");var n={lessThanXSeconds: {one: "less than a second",other: "less than {{count}} seconds"
                },xSeconds: {one: "a second",other: "{{count}} seconds"
                },halfAMinute: "half a minute",lessThanXMinutes: {one: "less than a minute",other: "less than {{count}} minutes"
                },xMinutes: {one: "a minute",other: "{{count}} minutes"
                },aboutXHours: {one: "about an hour",other: "about {{count}} hours"
                },xHours: {one: "an hour",other: "{{count}} hours"
                },xDays: {one: "a day",other: "{{count}} days"
                },aboutXWeeks: {one: "about a week",other: "about {{count}} weeks"
                },xWeeks: {one: "a week",other: "{{count}} weeks"
                },aboutXMonths: {one: "about a month",other: "about {{count}} months"
                },xMonths: {one: "a month",other: "{{count}} months"
                },aboutXYears: {one: "about a year",other: "about {{count}} years"
                },xYears: {one: "a year",other: "{{count}} years"
                },overXYears: {one: "over a year",other: "over {{count}} years"
                },almostXYears: {one: "almost a year",other: "almost {{count}} years"
                }
            };var o=t("zMQz"),s={date:Object(o.a)({formats: {full: "EEEE, MMMM do, yyyy",long: "MMMM do, yyyy",medium: "MMM d, yyyy",short: "yyyy-MM-dd"
                    },defaultWidth: "full"
                }),time:Object(o.a)({formats: {full: "h:mm:ss a zzzz",long: "h:mm:ss a z",medium: "h:mm:ss a",short: "h:mm a"
                    },defaultWidth: "full"
                }),dateTime:Object(o.a)({formats: {full: "{{date}} 'at' {{time}}",long: "{{date}} 'at' {{time}}",medium: "{{date}}, {{time}}",short: "{{date}}, {{time}}"
                    },defaultWidth: "full"
                })
            },i=t("0HXF"),r=t("J9JN"),d=t("WYsD"),c={code: "en-CA",formatDistance:function(e,a,t){var o;return t=t||{},o="string"==typeof n[e
                    ]?n[e
                    ]: 1===a?n[e
                    ].one:n[e
                    ].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"in "+o:o+" ago":o
                },formatLong:s,formatRelative:i.a,localize:r.a,match:d.a,options: {weekStartsOn: 0,firstWeekContainsDate: 1
                }
            };a.a=c
        },
        "S/DP":function(e,a,t){
            "use strict";t.d(a,
            "a",(function(){return i
            }));var n=t("q1tI"),o=t.n(n),s=t("d+rA");function i(e){var a=e.assessmentCentres,t=e.onViewAllClick,n=e.lang,i=a&&a.length&&a[
                    0
                ].location_name?a.length:a.reduce((function(e,a){return e+a.centres.length
                }),
                0);return o.a.createElement("div",
                {className: "ontario-margin-bottom-32-! ontario-assessment-centre__count"
                },i>1&&o.a.createElement("span",
                {className: "ontario-text-raleway ontario-margin-right-32-!"
                },i+" "+s.d[n
                ].centreCountMessage),t&&o.a.createElement("span",
                {className: "ontario-assessment-centre__link",onClick:t
                },s.d[n
                ].viewAllCentres))
            }
        },SEVX:function(e,a,t){
            "use strict";t("Ll4R");var n=t("q1tI"),o=t.n(n),s=t("d+rA");function i(e,a){var t=/([^[]*)\[(.*?)\
                    ]([^[]*)/gm,n=e.match(t);return n?function(e,a){return e.slice(1,e.length).map((function(e,t){return e?1===t?o.a.createElement("span",
                                {className: "ontario-assessment-centre__link ontario-small-offset-0",onClick:a,onKeyDown:a
                                },e):e: null
                            }))
                        }(t.exec(n),a):e
                    }a.a=function(e){var a=e.lang,t=e.onViewAllCentres;return o.a.createElement("div",
                        null,s.l[a
                        ].title&&o.a.createElement("h4",
                        null,i(s.l[a
                        ].title,t)),s.l[a
                        ].listTitle&&o.a.createElement("p",
                        null,s.l[a
                        ].listTitle),s.l[a
                        ].listItems&&o.a.createElement("ul",
                        null,s.l[a
                        ].listItems.map((function(e,a){return o.a.createElement("li",
                            {key:a
                            },i(e,t))
                        }))))
                    }
                },Sz9g:function(e,a,t){
                    "use strict";var n=t("q1tI"),o=t.n(n),s=function(e){var a=e.share,t=e.social,n=e.lang;return o.a.createElement("a",
                        {target: "_blank",rel: "noopener noreferrer",href:t[n
                            ].links[a
                            ]
                        },o.a.createElement("span",
                        {className: "ontario-show-for-sr"
                        },a),o.a.createElement("i",
                        {className: "ontario-icon ontario-icon__"+a
                        }))
                    };a.a=function(e){var a=e.lang,t=e.social;return o.a.createElement("div",
                        {className: "ontario-row ontario-margin--bottom-double-half ontario-hide-for-print"
                        },o.a.createElement("div",
                        {className: "ontario-small-12 ontario-columns"
                        },o.a.createElement("h2",
                        {className: "ontario-H2"
                        },t[a
                        ].title),o.a.createElement("ul",
                        {className: "ontario-list--inline"
                        },o.a.createElement("li",
                        null,o.a.createElement(s,
                        {share: "linkedin",social:t,lang:a
                        })),o.a.createElement("li",
                        null,o.a.createElement(s,
                        {share: "twitter",social:t,lang:a
                        })),o.a.createElement("li",
                        null,o.a.createElement(s,
                        {share: "facebook",social:t,lang:a
                        })),o.a.createElement("li",
                        null,o.a.createElement(s,
                        {share: "email",social:t,lang:a
                        })))))
                    }
                },VePM:function(e,a,t){
                    "use strict";t("pJf4"),t("q8oJ"),t("8npG"),t("YbXK"),t("cFtU"),t("rzGZ"),t("m210"),t("4DPX");var n=t("q1tI"),o=t.n(n);function s(e){return function(e){if(Array.isArray(e))return i(e)
                        }(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)
                        }(e)||function(e,a){if(!e)return;if("string"==typeof e)return i(e,a);var t=Object.prototype.toString.call(e).slice(8,
                            -1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?: 8|16|32)(?:Clamped)?Array$/.test(t))return i(e,a)
                        }(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t
                        ]=e[t
                        ];return n
                    }a.a=function(e){var a=e.lang,t=e.filters,i=e.handleFilterChange,r=e.clearAllFilters,d=Object(n.useState)([]),c=d[
                            0
                        ],p=d[
                            1
                        ];return Object(n.useEffect)((function(){p(t.map((function(e){return e.filters.filter((function(e){return e.checked
                                }))
                            })).reduce((function(e,a){return[].concat(s(e),s(a))
                            }),
                            []))
                        }),
                        [t
                        ]),c&&c.length?o.a.createElement("div",
                        {className: "ontario-assessment-centre-breadcrumb-container"
                        },c.map((function(e){return o.a.createElement("div",
                            {className: "ontario-assessment-centre-breadcrumb",key:e.id,onClick:function(a){return function(e,a){var t=e.nativeEvent,n=t.offsetX,o=t.offsetY;n>14&&n<26&&o>17&&o<31&&i(a)
                                    }(a,e.id)
                                }
                            },e.text[a
                            ])
                        })),o.a.createElement("a",
                        {className: "ontario-link--search-filters",onClick:r
                        },
                        {en: "Clear all filters",fr: "Vider tous les filtres"
                        }[a
                        ])): null
                    }
                },WYsD:function(e,a,t){
                    "use strict";var n=t("vRX4"),o=t("wzM+"),s={ordinalNumber:Object(n.a)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,
                                10)
                            }
                        }),era:Object(o.a)({matchPatterns: {narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i
                            },defaultMatchWidth: "wide",parsePatterns: {any: [/^b/i,/^(a|c)/i
                                ]
                            },defaultParseWidth: "any"
                        }),quarter:Object(o.a)({matchPatterns: {narrow:/^[
                                    1234
                                ]/i,abbreviated:/^q[
                                    1234
                                ]/i,wide:/^[
                                    1234
                                ](th|st|nd|rd)? quarter/i
                            },defaultMatchWidth: "wide",parsePatterns: {any: [/1/i,/2/i,/3/i,/4/i
                                ]
                            },defaultParseWidth: "any",valueCallback:function(e){return e+1
                            }
                        }),month:Object(o.a)({matchPatterns: {narrow:/^[jfmasond
                                ]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                            },defaultMatchWidth: "wide",parsePatterns: {narrow: [/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i
                                ],any: [/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i
                                ]
                            },defaultParseWidth: "any"
                        }),day:Object(o.a)({matchPatterns: {narrow:/^[smtwf
                                ]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                            },defaultMatchWidth: "wide",parsePatterns: {narrow: [/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i
                                ],any: [/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i
                                ]
                            },defaultParseWidth: "any"
                        }),dayPeriod:Object(o.a)({matchPatterns: {narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap
                                ]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                            },defaultMatchWidth: "any",parsePatterns: {any: {am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i
                                }
                            },defaultParseWidth: "any"
                        })
                    };a.a=s
                },WmGZ:function(e,a,t){
                    "use strict";t("sC2a");var n={lessThanXSeconds: {one: "moins d’une seconde",other: "moins de {{count}} secondes"
                        },xSeconds: {one: "1 seconde",other: "{{count}} secondes"
                        },halfAMinute: "30 secondes",lessThanXMinutes: {one: "moins d’une minute",other: "moins de {{count}} minutes"
                        },xMinutes: {one: "1 minute",other: "{{count}} minutes"
                        },aboutXHours: {one: "environ 1 heure",other: "environ {{count}} heures"
                        },xHours: {one: "1 heure",other: "{{count}} heures"
                        },xDays: {one: "1 jour",other: "{{count}} jours"
                        },aboutXWeeks: {one: "environ 1 semaine",other: "environ {{count}} semaines"
                        },xWeeks: {one: "1 semaine",other: "{{count}} semaines"
                        },aboutXMonths: {one: "environ 1 mois",other: "environ {{count}} mois"
                        },xMonths: {one: "1 mois",other: "{{count}} mois"
                        },aboutXYears: {one: "environ 1 an",other: "environ {{count}} ans"
                        },xYears: {one: "1 an",other: "{{count}} ans"
                        },overXYears: {one: "plus d’un an",other: "plus de {{count}} ans"
                        },almostXYears: {one: "presqu’un an",other: "presque {{count}} ans"
                        }
                    };var o={lastWeek: "eeee 'dernier à' p",yesterday: "'hier à' p",today: "'aujourd’hui à' p",tomorrow: "'demain à' p'",nextWeek: "eeee 'prochain à' p",other: "P"
                    };t("YBKJ");var s=t("ku8+");var i={ordinalNumber:function(e,a){var t=Number(e),n=String((a||{}).unit);return 0===t?t:t+("year"===n||"hour"===n||"week"===n?1===t?"ère": "ème": 1===t?"er": "ème")
                        },era:Object(s.a)({values: {narrow: [
                                    "av. J.-C",
                                    "ap. J.-C"
                                ],abbreviated: [
                                    "av. J.-C",
                                    "ap. J.-C"
                                ],wide: [
                                    "avant Jésus-Christ",
                                    "après Jésus-Christ"
                                ]
                            },defaultWidth: "wide"
                        }),quarter:Object(s.a)({values: {narrow: [
                                    "T1",
                                    "T2",
                                    "T3",
                                    "T4"
                                ],abbreviated: [
                                    "1er trim.",
                                    "2ème trim.",
                                    "3ème trim.",
                                    "4ème trim."
                                ],wide: [
                                    "1er trimestre",
                                    "2ème trimestre",
                                    "3ème trimestre",
                                    "4ème trimestre"
                                ]
                            },defaultWidth: "wide",argumentCallback:function(e){return Number(e)-1
                            }
                        }),month:Object(s.a)({values: {narrow: [
                                    "J",
                                    "F",
                                    "M",
                                    "A",
                                    "M",
                                    "J",
                                    "J",
                                    "A",
                                    "S",
                                    "O",
                                    "N",
                                    "D"
                                ],abbreviated: [
                                    "janv.",
                                    "févr.",
                                    "mars",
                                    "avr.",
                                    "mai",
                                    "juin",
                                    "juil.",
                                    "août",
                                    "sept.",
                                    "oct.",
                                    "nov.",
                                    "déc."
                                ],wide: [
                                    "janvier",
                                    "février",
                                    "mars",
                                    "avril",
                                    "mai",
                                    "juin",
                                    "juillet",
                                    "août",
                                    "septembre",
                                    "octobre",
                                    "novembre",
                                    "décembre"
                                ]
                            },defaultWidth: "wide"
                        }),day:Object(s.a)({values: {narrow: [
                                    "D",
                                    "L",
                                    "M",
                                    "M",
                                    "J",
                                    "V",
                                    "S"
                                ],short: [
                                    "di",
                                    "lu",
                                    "ma",
                                    "me",
                                    "je",
                                    "ve",
                                    "sa"
                                ],abbreviated: [
                                    "dim.",
                                    "lun.",
                                    "mar.",
                                    "mer.",
                                    "jeu.",
                                    "ven.",
                                    "sam."
                                ],wide: [
                                    "dimanche",
                                    "lundi",
                                    "mardi",
                                    "mercredi",
                                    "jeudi",
                                    "vendredi",
                                    "samedi"
                                ]
                            },defaultWidth: "wide"
                        }),dayPeriod:Object(s.a)({values: {narrow: {am: "AM",pm: "PM",midnight: "minuit",noon: "midi",morning: "mat.",afternoon: "ap.m.",evening: "soir",night: "mat."
                                },abbreviated: {am: "AM",pm: "PM",midnight: "minuit",noon: "midi",morning: "matin",afternoon: "après-midi",evening: "soir",night: "matin"
                                },wide: {am: "AM",pm: "PM",midnight: "minuit",noon: "midi",morning: "du matin",afternoon: "de l’après-midi",evening: "du soir",night: "du matin"
                                }
                            },defaultWidth: "wide"
                        })
                    },r=t("vRX4"),d=t("wzM+"),c={ordinalNumber:Object(r.a)({matchPattern:/^(\d+)(ième|ère|ème|er|e)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,
                                10)
                            }
                        }),era:Object(d.a)({matchPatterns: {narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i
                            },defaultMatchWidth: "wide",parsePatterns: {any: [/^av/i,/^ap/i
                                ]
                            },defaultParseWidth: "any"
                        }),quarter:Object(d.a)({matchPatterns: {narrow:/^[
                                    1234
                                ]/i,abbreviated:/^t[
                                    1234
                                ]/i,wide:/^[
                                    1234
                                ](er|ème|e)? trimestre/i
                            },defaultMatchWidth: "wide",parsePatterns: {any: [/1/i,/2/i,/3/i,/4/i
                                ]
                            },defaultParseWidth: "any",valueCallback:function(e){return e+1
                            }
                        }),month:Object(d.a)({matchPatterns: {narrow:/^[jfmasond
                                ]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
                            },defaultMatchWidth: "wide",parsePatterns: {narrow: [/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i
                                ],any: [/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i
                                ]
                            },defaultParseWidth: "any"
                        }),day:Object(d.a)({matchPatterns: {narrow:/^[lmjvsd
                                ]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
                            },defaultMatchWidth: "wide",parsePatterns: {narrow: [/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i
                                ],any: [/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i
                                ]
                            },defaultParseWidth: "any"
                        }),dayPeriod:Object(d.a)({matchPatterns: {narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap
                                ]\.?\s?m\.?|du matin|de l'après[-\s
                                ]midi|du soir|de la nuit)/i
                            },defaultMatchWidth: "any",parsePatterns: {any: {am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i
                                }
                            },defaultParseWidth: "any"
                        })
                    },p=t("zMQz"),l={code: "fr-CA",formatDistance:function(e,a,t){var o;return t=t||{},o="string"==typeof n[e
                            ]?n[e
                            ]: 1===a?n[e
                            ].one:n[e
                            ].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"dans "+o: "il y a "+o:o
                        },formatLong: {date:Object(p.a)({formats: {full: "EEEE d MMMM y",long: "d MMMM y",medium: "d MMM y",short: "yy-MM-dd"
                                },defaultWidth: "full"
                            }),time:Object(p.a)({formats: {full: "HH:mm:ss zzzz",long: "HH:mm:ss z",medium: "HH:mm:ss",short: "HH:mm"
                                },defaultWidth: "full"
                            }),dateTime:Object(p.a)({formats: {full: "{{date}} 'à' {{time}}",long: "{{date}} 'à' {{time}}",medium: "{{date}}, {{time}}",short: "{{date}}, {{time}}"
                                },defaultWidth: "full"
                            })
                        },formatRelative:function(e,a,t,n){return o[e
                            ]
                        },localize:i,match:c,options: {weekStartsOn: 0,firstWeekContainsDate: 1
                        }
                    };a.a=l
                },ZS31:function(e,a,t){},
                "d+rA":function(e,a,t){
                    "use strict";t.d(a,
                    "k",(function(){return M
                    })),t.d(a,
                    "e",(function(){return O
                    })),t.d(a,
                    "o",(function(){return s
                    })),t.d(a,
                    "i",(function(){return i
                    })),t.d(a,
                    "m",(function(){return r
                    })),t.d(a,
                    "h",(function(){return d
                    })),t.d(a,
                    "a",(function(){return c
                    })),t.d(a,
                    "c",(function(){return p
                    })),t.d(a,
                    "d",(function(){return l
                    })),t.d(a,
                    "b",(function(){return u
                    })),t.d(a,
                    "l",(function(){return h
                    })),t.d(a,
                    "j",(function(){return g
                    })),t.d(a,
                    "n",(function(){return S
                    })),t.d(a,
                    "g",(function(){return P
                    })),t.d(a,
                    "f",(function(){return H
                    }));var n=t("q1tI"),o=t.n(n),s={en: {title: "Share Ontario testing locations finder",links: {facebook: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcovid-19.ontario.ca%2Fassessment-centre-locations&amp;src=sdkpreparse",twitter: "https://twitter.com/intent/tweet?text=Ontario%20COVID-19%20assessment-centre-locations%3A%20https%3A//covid-19.ontario.ca/assessment-centre-locations",linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//covid-19.ontario.ca/assessment-centre-locations&title=&summary=&source=",email: "mailto:?subject=Ontario%20COVID-19%20%28testing%29%20locations&body=https%3A//covid-19.ontario.ca/assessment-centre-locations"
                            }
                        },fr: {title: "Partager l'outil du centres de dépistage de la COVID-19 de l'Ontario",links: {facebook: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcovid-19.ontario.ca%2Fcentres-depistage&amp;src=sdkpreparse",twitter: "https://twitter.com/intent/tweet?text=centres%20de%20d%C3%A9pistage%20de%20la%20COVID-19%20de%20l%27Ontario%3A%20https%3A//covid-19.ontario.ca/centres-depistage",linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//covid-19.ontario.ca/centres-depistage&title=&summary=&source=",email: "mailto:?subject=Emplacements%20des%20centres%20de%20dépistage%20de%20la%20COVID-19&body=https%3A//covid-19.ontario.ca/centres-depistage"
                            }
                        }
                    },i={fr: [
                            {link: "https://www.ontario.ca/fr/page/lontario-en-bref",text: "l'Ontario en bref"
                            },
                            {link: "https://www.ontario.ca/fr/page/accessibilite",text: "accessibilité"
                            },
                            {link: "https://news.ontario.ca/newsroom/fr",text: "nouvelles"
                            },
                            {link: "https://www.ontario.ca/fr/page/declaration-concernant-la-protection-de-la-vie-privee",text: "confidentialité"
                            },
                            {link: "https://www.ontario.ca/fr/page/conditions-dutilisation",text: "conditions d’utilisation"
                            }
                        ],en: [
                            {link: "https://www.ontario.ca/page/about-ontario",text: "about Ontario"
                            },
                            {link: "https://www.ontario.ca/page/accessibility",text: "accessibility"
                            },
                            {link: "http://news.ontario.ca/newsroom/en",text: "news"
                            },
                            {link: "https://www.ontario.ca/page/privacy-statement",text: "privacy"
                            },
                            {link: "https://www.ontario.ca/page/terms-use",text: "terms of use"
                            }
                        ]
                    },r={en: {text: "© Queen’s Printer for Ontario, 2012–20 ",link: "https://www.ontario.ca/page/copyright-information-c-queens-printer-ontario"
                        },fr: {text: "© Imprimeur de la Reine pour l’Ontario, 2012‑20 ",link: "https://www.ontario.ca/fr/page/droits-dauteur-imprimeur-de-la-reine-pour-lontarioc"
                        }
                    },d={en: {title: "Feedback",link: "https://covid-19.ontario.ca/feedback/assessment-centre-locations",content: "Give us feedback on your experience using our COVID-19 online services today.",vaccineLink: ""
                        },fr: {title: "Commentaires ",link: "https://covid-19.ontario.ca/fr/commentaires/centres-depistage",content: "Faites-nous part de vos commentaires à propos de votre expérience de l’utilisation des services en ligne pour la COVID-19 aujourd’hui.",vaccineLink: ""
                        }
                    },c={en: {weekdays: [
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday"
                            ],phone: "Phone number",website: "Website",hours: "Hours",reducedHolidayHours: "Holiday Hours",map_location: "Map it (opens Google Maps)",appointment_msg_online: "Appointment only. Visit their website to make an appointment",appointment_msg_phone: "Appointment only. Call to make an appointment",appointment_msg_both: "Appointment only. Call or visit their website to make an appointment",appointment_msg_none: "No appointments offered (first come, first served)",age_restrictions_msg: "Can test anyone over 2 years old",no_age_restrictions_msg: "Testing for all ages",drive_through_msg: "Drive-through available",phu: "Public Health Unit",details: "Details",test_centres:o.a.createElement(o.a.Fragment,
                            null,
                            "Tests people with symptoms, exposure, or those in",
                            " ",o.a.createElement("a",
                            {href: "https://covid-19.ontario.ca/covid-19-test-and-testing-location-information#centres",target: "_blank",rel: "noopener"
                            },
                            "certain groups")),pharmacies:o.a.createElement(o.a.Fragment,
                            null,
                            "Tests",
                            " ",o.a.createElement("a",
                            {href: "https://covid-19.ontario.ca/covid-19-test-and-testing-location-information#pharmacy",target: "_blank",rel: "noopener"
                            },
                            "certain people"),
                            " ",
                            "without symptoms or exposure")
                        },fr: {weekdays: [
                                "Dimanche",
                                "Lundi",
                                "Mardi",
                                "Mercredi",
                                "Jeudi",
                                "Vendredi",
                                "Samedi"
                            ],phone: "Numéro de téléphone",website: "Site Web",hours: "Heures",reducedHolidayHours: "Heures des Fêtes",map_location: "Ouvrir dans Google Maps",appointment_msg_online: "Sur rendez-vous seulement. Consultez leur site Web pour prendre rendez-vous",appointment_msg_phone: "Sur rendez-vous seulement. Téléphonez pour prendre rendez-vous",appointment_msg_both: "Sur rendez-vous seulement. Téléphonez ou consulter leur site Web pour prendre rendez-vous",appointment_msg_none: "Aucun rendez-vous offert (premier arrivé, premier servi)",age_restrictions_msg: "Peut tester toute personne âgée de plus de 2 ans",no_age_restrictions_msg: "Des tests pour tous les âges",drive_through_msg: "Service à l'auto disponible",phu: "Bureau de santé publique",details: "Détails",test_centres:o.a.createElement(o.a.Fragment,
                            null,
                            "Offre le test aux personnes présentant des symptômes, ayant eu une exposition, ou aux personnes faisant partie de",
                            " ",o.a.createElement("a",
                            {href: "https://covid-19.ontario.ca/fr/information-sur-le-depistage-et-les-centres-de-depistage-de-la-covid-19#centres",target: "_blank",rel: "noopener"
                            },
                            "certains groupes")),pharmacies:o.a.createElement(o.a.Fragment,
                            null,
                            "Offre le test à",
                            " ",o.a.createElement("a",
                            {href: "https://covid-19.ontario.ca/fr/information-sur-le-depistage-et-les-centres-de-depistage-de-la-covid-19#pharmacie",target: "_blank",rel: "noopener"
                            },
                            "certaines personnes"),
                            " ",
                            "ne présentant pas de symptômes ou sans exposition")
                        }
                    },p={en: {title: "COVID-19 testing locations",lastUpdated: "Last updated:",gtaTitle: "Greater Toronto Area",ottawaTitle: "Ottawa Area",centresByCityTitle: "Testing locations by city",gta_phus: [
                                {title: "Toronto",phu: "Toronto Public Health"
                                },
                                {title: "Peel Region",phu: "Peel Public Health"
                                },
                                {title: "Halton Region",phu: "Halton Region Health Department"
                                },
                                {title: "York Region",phu: "York Region Public Health Services"
                                },
                                {title: "Durham Region",phu: "Durham Region Health Department"
                                }
                            ],ottawa_phus: [
                                {title: "Ottawa",phu: "Ottawa Public Health"
                                }
                            ],note:o.a.createElement(o.a.Fragment,
                            null,
                            "Note: Mobile or temporary locations may not be listed here. Call your",
                            " ",o.a.createElement("a",
                            {href: "http://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx",target: "_blank",rel: "noopener"
                            },
                            "local public health unit"),
                            " ",
                            "if you have questions or cannot find a location near you.")
                        },fr: {title: "Les centres de dépistage de la COVID-19",lastUpdated: "Dernière version :",gtaTitle: "Région du Grand Toronto",ottawaTitle: "Région du Ottawa",centresByCityTitle: "Emplacements des services de dépistage par ville",gta_phus: [
                                {title: "Toronto",phu: "Bureau de santé de Toronto"
                                },
                                {title: "Région de Peel",phu: "Bureau de santé de la région de Peel"
                                },
                                {title: "Région d'Halton",phu: "Service de santé de la région d'Halton"
                                },
                                {title: "Région de York",phu: "Bureau de santé publique de la région de York"
                                },
                                {title: "Région de Durham",phu: "Service de santé de la région de Durham"
                                }
                            ],ottawa_phus: [
                                {title: "Ottawa",phu: "Ottawa Public Health"
                                }
                            ],note:o.a.createElement(o.a.Fragment,
                            null,
                            "Nota : Il se peut que les emplacements mobiles ou temporaires ne figurent pas ici. Veuillez téléphoner au",
                            " ",o.a.createElement("a",
                            {href: "http://www.health.gov.on.ca/fr/common/system/services/phu/locations.aspx",target: "_blank",rel: "noopener"
                            },
                            "bureau de santé publique de votre région"),
                            " ",
                            "si vous avez des questions ou si vous ne pouvez trouver un emplacement près de chez vous.")
                        }
                    },l={en: {searchNearby: "Find closest testing locations",nearbyTitle: "Testing locations near you",centreCountMessage: "locations found.",viewAllCentres: "View all locations",search: "Search",searchByPostalCode: "Search by postal code",searchHint: "Enter the first 3 characters of a postal code to find a testing location near you.",searchResults: "Testing locations near"
                        },fr: {searchNearby: "Trouvez les centres de dépistage les plus près",nearbyTitle: "Emplacements des services de dépistage de chez vous",centreCountMessage: "emplacements trouvés.",viewAllCentres: "Voir tous les emplacements",search: "Rechercher",searchByPostalCode: "Recherche par code postal",searchHint: "Saisissez les 3 premiers caractères d'un code postal pour trouver un centre de dépistage près de chez vous.",searchResults: "Centres de dépistage près de"
                        }
                    },u={en: {access_title: "Accessibility",access_mobility: "Accommodates wheelchairs and mobility devices",access_asl: "ASL interpretation available",details_title: "Appointment and location details",details_appointment: "Appointment preferred (wait times may be longer without an appointment)",details_drivethru: "Drive-through available",details_parking: "Free parking available",details_publictransit: "Near public transit",details_french: "French-language services available",who_title: "Who can get a test",who_firstNations1: "Only tests the",who_firstNations2: "community",who_pregnant1: "Cannot test people over",who_pregnant2: "weeks pregnant",who_pharmacy: "Call to check if they test newborns and young children."
                        },fr: {access_title: "Accessibilité",access_mobility: "Adapté pour les fauteuils roulants et les aides à la mobilité",access_asl: "Interprétation en ASL offerte",details_title: "Détails sur les rendez-vous et centres",details_appointment: "Rendez-vous privilégié",details_drivethru: "Service à l’auto offert",details_parking: "Stationnement gratuit offert",details_publictransit: "Près d’un service de transport en commun",details_french: "Services en français offerts",who_title: "Qui peut subir un test de dépistage ",who_firstNations1: "Procède uniquement au dépistage chez la communauté",who_pregnant1: "Ne peut procéder au dépistage chez les femmes enceintes de plus de",who_pregnant2: "semaines",who_pharmacy: "Téléphonez pour savoir s'ils font passer des tests de dépistage aux nouveau-nés et aux jeunes enfants."
                        }
                    },h={en: {title: "O locations found. [View all locations]",listTitle: "Try:",listItems: [
                                "allowing the browser to access your location",
                                "[viewing all locations] to search alphabetically"
                            ]
                        },fr: {title: "0 emplacements trouvés. [Voir tous les emplacements]",listTitle: "Essayez :",listItems: [
                                "d’autoriser le navigateur à accéder à votre emplacement",
                                "[voir tous les emplacements] pour faire une recherche par ordre alphabétique"
                            ]
                        }
                    },m=t("sWYD"),y=t("QVOa"),_=t("WmGZ"),w={en: "MMMM dd, yyyy",fr: "dd MMMM yyyy"
                    },v={en:y.a,fr:_.a
                    },g=function(e,a){return Object(m.a)(e,w[a
                        ],
                        {locale:v[a
                            ]
                        })
                    },Y=(t("WevN"),t("sC2a"),t("HQhv"),t("7Qib")),f=[
                        "sunday",
                        "monday",
                        "tuesday",
                        "wednesday",
                        "thursday",
                        "friday",
                        "saturday"
                    ];function b(e){var a=e.split(":"),t=a[
                            0
                        ],n=a[
                            1
                        ],o=new Date;return o.setHours(t),o.setMinutes(n),o
                    }function N(e,a){var t=e.split("-"),n=t[
                            0
                        ],o=t[
                            1
                        ],s=b(a);return s>=b(n)&&s<=b(o)
                    }function k(e,a){if(!e)return!1;switch(e){case"closed":return!1;case"as needed":case"00:00-00:00":return!0;default:var t=e.replace(/\s+/g,
                            "");if(-1===t.indexOf("&"))return N(t,a);var n=t.split("&").map((function(e){return N(e,a)
                            })),o=n[
                                0
                            ],s=n[
                                1
                            ];return o||s
                        }
                    }var S=[
                        {heading: {en: "Location type",fr: "Type d’emplacement"
                            },logic: "or",filters: [
                                {id: "assessmentCentre",text: {en:o.a.createElement(o.a.Fragment,
                                        null,o.a.createElement("strong",
                                        null,
                                        "Assessment centre"),
                                        " (tests people with symptoms, exposure, or those in certain groups)"),fr:o.a.createElement(o.a.Fragment,
                                        null,o.a.createElement("strong",
                                        null,
                                        "Centre d’évaluation"),
                                        " (offre le test aux personnes présentant des symptômes, ayant eu une exposition, ou aux personnes faisant partie de certains groupes)")
                                    },test:function(e){return!Object(Y.a)(e.pharmacy)&&!Object(Y.a)(e.community_lab)
                                    },checked:!1
                                },
                                {id: "communityLab",text: {en:o.a.createElement(o.a.Fragment,
                                        null,o.a.createElement("strong",
                                        null,
                                        "Community lab"),
                                        " (tests people with symptoms, exposure, or those in certain groups)"),fr:o.a.createElement(o.a.Fragment,
                                        null,o.a.createElement("strong",
                                        null,
                                        "Laboratoire communautaire"),
                                        " (offre le test aux personnes présentant des symptômes, ayant eu une exposition, ou aux personnes faisant partie de certains groupes)")
                                    },test:function(e){return Object(Y.a)(e.community_lab)
                                    },checked:!1
                                },
                                {id: "pharma",text: {en:o.a.createElement(o.a.Fragment,
                                        null,o.a.createElement("strong",
                                        null,
                                        "Pharmacy"),
                                        " (tests certain people without symptoms or exposure)"),fr:o.a.createElement(o.a.Fragment,
                                        null,o.a.createElement("strong",
                                        null,
                                        "Pharmacie"),
                                        " (offre le test à certaines personnes ne présentant pas de symptômes ou sans exposition)")
                                    },test:function(e){return Object(Y.a)(e.pharmacy)
                                    },checked:!1
                                }
                            ]
                        },
                        {heading: {en: "Operating hours",fr: "Heures d’ouverture"
                            },logic: "or",filters: [
                                {id: "openNow",text: {en: "Open now",fr: "Ouvert maintenant"
                                    },test:function(e){return function(e){var a=new Date;return k(e[f[a.getDay()
                                                ]
                                            ],a.getHours()+":"+a.getMinutes())
                                        }(e)
                                    },checked:!1
                                },
                                {id: "openAfter5pm",text: {en: "Open weekdays after 5 p.m.",fr: "Ouvert après 17 h en semaine"
                                    },test:function(e){return function(e){for(var a=f.slice(1,
                                            6),t=0;t<a.length;t++){if(e&&e[a[t
                                                    ]
                                                ])if(k(e[a[t
                                                    ]
                                                ].toLowerCase(),
                                                "17:01"))return!0
                                            }return!1
                                        }(e)
                                    },checked:!1
                                },
                                {id: "openOnWeekends",text: {en: "Open on weekends",fr: "Ouvert la fin de semaine"
                                    },test:function(e){return e.saturday||e.sunday
                                    },checked:!1
                                }
                            ]
                        },
                        {heading: {en: "Appointment booking",fr: "Prise de rendez-vous"
                            },logic: "or",filters: [
                                {id: "onlineBooking",text: {en: "Online",fr: "En ligne"
                                    },test:function(e){return e.online_appointments
                                    },checked:!1
                                },
                                {id: "phoneBooking",text: {en: "Phone",fr: "Au téléphone"
                                    },test:function(e){return e.phone_appointments||"Yes"===e.appointments&&e.phone
                                    },checked:!1
                                }
                            ]
                        },
                        {heading: {en: "Testing offered to",fr: "Test offert aux"
                            },logic: "or",filters: [
                                {id: "testsNewborns",text: {en: "Newborns",fr: "Nouveau-nés"
                                    },test:function(e){var a=e.age_threshold&&e.age_threshold.replace(/\s+/g,
                                        "");return a&&a.endsWith("m")&&parseInt(a.substring(0,a.length-1),
                                        10)<=6
                                    },checked:!1
                                },
                                {id: "testsYoungChildren",text: {en: "Children",fr: "Enfants"
                                    },test:function(e){var a=e.age_threshold&&e.age_threshold.replace(/\s+/g,
                                        "");return a&&(a.endsWith("m")||parseInt(a.substring(0,a.length-1),
                                        10)<=17)
                                    },checked:!1
                                },
                                {id: "testsChildrenWithDisabilities",text: {en: "Only children with disabilities",fr: "Enfants handicapés seulement"
                                    },test:function(e){return e.children_with_disabilities&&"yes"===e.children_with_disabilities.toLowerCase()
                                    },checked:!1
                                },
                                {id: "testsIndigenousPeople",text: {en: "Only Indigenous people",fr: "Personnes autochtones seulement"
                                    },test:function(e){return e.first_nations&&"yes"===e.first_nations.toLowerCase()
                                    },checked:!1
                                }
                            ]
                        },
                        {heading: {en: "Accommodations",fr: "Mesures d’adaptation"
                            },logic: "and",filters: [
                                {id: "driveThroughTesting",text: {en: "Drive-through testing",fr: "Test de dépistage au volant"
                                    },test:function(e){return e.drive_through&&"yes"===e.drive_through.toLowerCase()
                                    },checked:!1
                                },
                                {id: "wheelchairAndMobilityDeviceAccessible",text: {en: "Wheelchair and mobility device accessible",fr: "Accessible en fauteuil roulant et avec appareil d’aide à la mobilité"
                                    },test:function(e){return e.accessible&&"yes"===e.accessible.toLowerCase()
                                    },checked:!1
                                },
                                {id: "frenchLanguage",text: {en: "French language",fr: "Services en français"
                                    },test:function(e){return e.french_language_services&&"yes"===e.french_language_services.toLowerCase()
                                    },checked:!1
                                },
                                {id: "americanSignLanguageInterpretation",text: {en: "American Sign Language interpretation",fr: "Interprétation en langue ASL (American Sign Language)"
                                    },test:function(e){return e.asl_interpretation&&"yes"===e.asl_interpretation.toLowerCase()
                                    },checked:!1
                                }
                            ]
                        }
                    ],H={en: [
                            {link: "https://www.ontario.ca/page/government-ontario",text: "Home"
                            },
                            {link: "https://covid-19.ontario.ca/",text: "COVID-19"
                            },
                            {link: "https://covid-19.ontario.ca/covid-19-test-and-testing-location-information",text: "Testing"
                            }
                        ],fr: [
                            {link: "https://www.ontario.ca/fr/page/gouvernement-de-lontario",text: "Accueil"
                            },
                            {link: "https://covid-19.ontario.ca/fr",text: "COVID-19"
                            },
                            {link: "https://covid-19.ontario.ca/fr/information-sur-le-depistage-et-les-centres-de-depistage-de-la-covid-19",text: "Dépistage"
                            }
                        ]
                    },P={en: [
                            {link: "https://www.ontario.ca/page/government-ontario",text: "Home"
                            },
                            {link: "https://covid-19.ontario.ca/",text: "COVID-19"
                            },
                            {link: "https://covid-19.ontario.ca/covid-19-vaccines-ontario",text: "Vaccines"
                            },
                            {link: "https://covid-19.ontario.ca/get-covid-19-vaccine",text: "What to expect"
                            }
                        ],fr: [
                            {link: "https://www.ontario.ca/fr/page/gouvernement-de-lontario",text: "Accueil"
                            },
                            {link: "https://covid-19.ontario.ca/fr",text: "COVID-19"
                            },
                            {link: "https://covid-19.ontario.ca/fr/vaccins-contre-la-covid-19-en-ontario",text: "Vaccins"
                            },
                            {link: "https://covid-19.ontario.ca/fr/recevoir-un-vaccin-contre-la-covid-19",text: "À quoi vous attendre"
                            }
                        ]
                    },O={en: "/assessment-centre-locations",fr: "/centres-depistage"
                    },M={en: {lang: "english",lang_abbr: "EN",skipNavText: "Skip to main content",holidayTitle: "Holiday hours and closures",holidaySubText:o.a.createElement(o.a.Fragment,
                            null,o.a.createElement("p",
                            null,
                            "Testing locations may have different hours or be closed during the holidays."),o.a.createElement("p",
                            null,
                            "This page may not capture all the holiday hours or closure information. Check with the testing location before you go.")),closedTitle: "Closed today",closedText: "This centre is temporarily closed because of the civic holiday. We apologize for the inconvenience",lockdownAlert:o.a.createElement("p",
                            null,
                            "Stay at home except for essential travel and follow the",
                            " ",o.a.createElement("a",
                            {href: "https://covid-19.ontario.ca/zones-and-restrictions",target: "_blank",rel: "noopener"
                            },
                            "restrictions and public health measures"),
                            ".",
                            " ")
                        },fr: {lang: "français",lang_abbr: "FR",skipNavText: "Passer directement au contenu principal",holidayTitle: "Heures d’ouverture et fermetures durant les jours fériés",holidaySubText:o.a.createElement(o.a.Fragment,
                            null,o.a.createElement("p",
                            null,
                            "Les centres de dépistage pourraient avoir des heures d’ouverture différentes ou être fermés durant les Fêtes."),o.a.createElement("p",
                            null,
                            "Cette page pourrait ne pas contenir tous les renseignements sur les heures d’ouverture ou les fermetures pour la période des Fêtes. Vérifiez auprès du centre de dépistage avant de vous présenter.")),closedTitle: "Fermé aujourd’hui",closedText: "Ce centre de dépistage est fermé temporairement en raison du jour férié. Nous nous excusons de tout désagrément.",lockdownAlert:o.a.createElement("p",
                            null,
                            "Restez chez vous sauf pour les déplacements essentiels et respectez les",
                            " ",o.a.createElement("a",
                            {href: "https://covid-19.ontario.ca/fr/zones-et-restrictions",rel: "noopener",target: "_blank"
                            },
                            "restrictions et les mesures de santé publique"),
                            ".",
                            " ")
                        }
                    }
                },
                "hb/m":function(e,a,t){
                    "use strict";var n=t("q1tI"),o=t.n(n),s=t("jPax"),i=function(e){var a=e.id,t=e.value,n=e.text,s=e.supplementaryText,i=e.labelStyle,r=e.checkboxState,d=e.checkboxOnChange;return o.a.createElement("div",
                        {className: "ontario-checkboxes__item"
                        },o.a.createElement("input",
                        {className: "ontario-checkboxes__input",id:a,name:a,type: "checkbox",value:t,checked:r,onChange:d
                        }),o.a.createElement("label",
                        {className: "ontario-checkboxes__label ontario-checkboxes__label"+i,htmlFor:a
                        },n,s&&o.a.createElement("span",
                        {className: "ontario-hint"
                        },s)))
                    };a.a=function(e){var a=e.lang,t=e.filters,r=e.handleFilterChange,d=Object(n.useState)(!1),c=d[
                            0
                        ],p=d[
                            1
                        ];return Object(n.useEffect)((function(){
                            "undefined"!=typeof window&&(window.matchMedia("screen and (max-width: 72.9375em)").matches||p(!0))
                        }),
                        []),o.a.createElement("div",
                        {className: "ontario-margin-bottom-32-!"
                        },o.a.createElement(s.a,
                        {allowZeroExpanded:!0,onChange:function(){return p((function(e){return!e
                                }))
                            }
                        },o.a.createElement(s.b,
                        {dangerouslySetExpanded:c
                        },o.a.createElement(s.d,
                        null,o.a.createElement(s.c,
                        {style: {background: "#CFEDED"
                            }
                        },o.a.createElement("div",
                        {className: "ontario-icon__filter",style: {float: "left",position: "relative",top: "3px",marginRight: "12px"
                            }
                        }),
                        {en: "Filter locations",fr: "Filtrer les résultats"
                        }[a
                        ])),o.a.createElement(s.e,
                        null,o.a.createElement("div",
                        {className: "ontario-checkboxes"
                        },t.map((function(e,t){return o.a.createElement("div",
                            {key:t,className: "ontario-checkboxes__section"
                            },o.a.createElement("p",
                            {className: "ontario-margin-bottom-16-!"
                            },o.a.createElement("strong",
                            null,e.heading[a
                            ])),e.filters.map((function(e){return o.a.createElement(i,
                                {key:e.id,id:e.id,text:e.text[a
                                    ],checkboxState:e.checked,checkboxOnChange:function(){return r(e.id)
                                    }
                                })
                            })))
                        })))))))
                    }
                },jPax:function(e,a,t){
                    "use strict";t.d(a,
                    "a",(function(){return k
                    })),t.d(a,
                    "b",(function(){return T
                    })),t.d(a,
                    "c",(function(){return I
                    })),t.d(a,
                    "d",(function(){return J
                    })),t.d(a,
                    "e",(function(){return j
                    }));t("pJf4"),t("YbXK"),t("cFtU"),t("m210"),t("MIFh"),t("sc67"),t("q8oJ"),t("C9fy"),t("nWfQ"),t("LagC"),t("pS08"),t("+ar0"),t("xtjI"),t("JHok"),t("OeI1"),t("4DPX"),t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("R48M");var n=t("q1tI");function o(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")
                    }function s(e,a){for(var t=0;t<a.length;t++){var n=a[t
                            ];n.enumerable=n.enumerable||!1,n.configurable=!0,
                            "value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)
                        }
                    }function i(e,a,t){return a&&s(e.prototype,a),t&&s(e,t),e
                    }function r(e,a,t){return a in e?Object.defineProperty(e,a,
                        {value:t,enumerable:!0,configurable:!0,writable:!0
                        }):e[a
                        ]=t,e
                    }function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a
                                ];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n
                                ]=t[n
                                ])
                            }return e
                        }).apply(this,arguments)
                    }function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable
                            }))),t.push.apply(t,n)
                        }return t
                    }function p(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,
                        {constructor: {value:e,writable:!0,configurable:!0
                            }
                        }),a&&u(e,a)
                    }function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)
                        })(e)
                    }function u(e,a){return(u=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e
                        })(e,a)
                    }function h(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n
                            ],a.indexOf(t)>=0||(o[t
                            ]=e[t
                            ]);return o
                        }(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n
                            ],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t
                            ]=e[t
                            ])
                        }return o
                    }function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e
                    }function y(e,a){return!a||"object"!=typeof a&&"function"!=typeof a?m(e):a
                    }function _(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,
                                [],(function(){}))),!0
                            }catch(e){return!1
                            }
                        }();return function(){var t,n=l(e);if(a){var o=l(this).constructor;t=Reflect.construct(n,arguments,o)
                            }else t=n.apply(this,arguments);return y(this,t)
                        }
                    }function w(e){return function(e){if(Array.isArray(e))return v(e)
                        }(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)
                        }(e)||function(e,a){if(!e)return;if("string"==typeof e)return v(e,a);var t=Object.prototype.toString.call(e).slice(8,
                            -1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?: 8|16|32)(?:Clamped)?Array$/.test(t))return v(e,a)
                        }(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }function v(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t
                        ]=e[t
                        ];return n
                    }var g=function e(a){var t=this,n=a.expanded,s=void 0===n?[]:n,i=a.allowMultipleExpanded,d=void 0!==i&&i,p=a.allowZeroExpanded,l=void 0!==p&&p;o(this,e),r(this,
                        "expanded",void 0),r(this,
                        "allowMultipleExpanded",void 0),r(this,
                        "allowZeroExpanded",void 0),r(this,
                        "toggleExpanded",(function(e){return t.isItemDisabled(e)?t:t.isItemExpanded(e)?t.augment({expanded:t.expanded.filter((function(a){return a!==e
                                }))
                            }):t.augment({expanded:t.allowMultipleExpanded?[].concat(w(t.expanded),
                                [e
                                ]): [e
                                ]
                            })
                        })),r(this,
                        "isItemDisabled",(function(e){var a=t.isItemExpanded(e),n=1===t.expanded.length;return Boolean(a&&!t.allowZeroExpanded&&n)
                        })),r(this,
                        "isItemExpanded",(function(e){return-1!==t.expanded.indexOf(e)
                        })),r(this,
                        "getPanelAttributes",(function(e,a){var n=null!=a?a:t.isItemExpanded(e);return{role:t.allowMultipleExpanded?void 0: "region",
                                "aria-hidden":t.allowMultipleExpanded?!n:void 0,
                                "aria-labelledby":t.getButtonId(e),id:t.getPanelId(e),hidden:!n||void 0
                            }
                        })),r(this,
                        "getHeadingAttributes",(function(){return{role: "heading"
                            }
                        })),r(this,
                        "getButtonAttributes",(function(e,a){var n=null!=a?a:t.isItemExpanded(e),o=t.isItemDisabled(e);return{id:t.getButtonId(e),
                                "aria-disabled":o,
                                "aria-expanded":n,
                                "aria-controls":t.getPanelId(e),role: "button",tabIndex: 0
                            }
                        })),r(this,
                        "getPanelId",(function(e){return"accordion__panel-".concat(e)
                        })),r(this,
                        "getButtonId",(function(e){return"accordion__heading-".concat(e)
                        })),r(this,
                        "augment",(function(a){return new e(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a
                                    ]?arguments[a
                                    ]: {};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a
                                        ])
                                    })):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))
                                    }))
                                }return e
                            }({expanded:t.expanded,allowMultipleExpanded:t.allowMultipleExpanded,allowZeroExpanded:t.allowZeroExpanded
                            },a))
                        })),this.expanded=s,this.allowMultipleExpanded=d,this.allowZeroExpanded=l
                    },Y=Object(n.createContext)(null),f=function(e){p(t,e);var a=_(t);function t(){var e;o(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i
                            ]=arguments[i
                            ];return r(m(e=a.call.apply(a,
                            [this
                            ].concat(s))),
                            "state",new g({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded
                            })),r(m(e),
                            "toggleExpanded",(function(a){e.setState((function(e){return e.toggleExpanded(a)
                                }),(function(){e.props.onChange&&e.props.onChange(e.state.expanded)
                                }))
                            })),r(m(e),
                            "isItemDisabled",(function(a){return e.state.isItemDisabled(a)
                            })),r(m(e),
                            "isItemExpanded",(function(a){return e.state.isItemExpanded(a)
                            })),r(m(e),
                            "getPanelAttributes",(function(a,t){return e.state.getPanelAttributes(a,t)
                            })),r(m(e),
                            "getHeadingAttributes",(function(){return e.state.getHeadingAttributes()
                            })),r(m(e),
                            "getButtonAttributes",(function(a,t){return e.state.getButtonAttributes(a,t)
                            })),e
                        }return i(t,
                        [
                            {key: "render",value:function(){var e=this.state,a=e.allowZeroExpanded,t=e.allowMultipleExpanded;return Object(n.createElement)(Y.Provider,
                                    {value: {allowMultipleExpanded:t,allowZeroExpanded:a,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes
                                        }
                                    },this.props.children||null)
                                }
                            }
                        ]),t
                    }(n.PureComponent);r(f,
                    "defaultProps",
                    {allowMultipleExpanded:!1,allowZeroExpanded:!1
                    });var b,N=function(e){p(t,e);var a=_(t);function t(){var e;o(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i
                            ]=arguments[i
                            ];return r(m(e=a.call.apply(a,
                            [this
                            ].concat(s))),
                            "renderChildren",(function(a){return a?e.props.children(a): null
                            })),e
                        }return i(t,
                        [
                            {key: "render",value:function(){return Object(n.createElement)(Y.Consumer,
                                    null,this.renderChildren)
                                }
                            }
                        ]),t
                    }(n.PureComponent),k=function(e){var a=e.className,t=void 0===a?"accordion":a,o=e.allowMultipleExpanded,s=e.allowZeroExpanded,i=e.onChange,r=e.preExpanded,c=h(e,
                        [
                            "className",
                            "allowMultipleExpanded",
                            "allowZeroExpanded",
                            "onChange",
                            "preExpanded"
                        ]);return Object(n.createElement)(f,
                        {preExpanded:r,allowMultipleExpanded:o,allowZeroExpanded:s,onChange:i
                        },Object(n.createElement)("div",d({
                            "data-accordion-component": "Accordion",className:t
                        },c)))
                    };!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"
                    }(b||(b={}));var S=b,H=0;function P(){var e=H;return H+=1,
                        "raa-".concat(e)
                    }var O=/[\u0009\u000a\u000c\u000d\u0020
                    ]/g;function M(e){return""!==e&&!O.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)
                    }var C=Object(n.createContext)(null),R=function(e){p(t,e);var a=_(t);function t(){var e;o(this,t);for(var s=arguments.length,i=new Array(s),d=0;d<s;d++)i[d
                            ]=arguments[d
                            ];return r(m(e=a.call.apply(a,
                            [this
                            ].concat(i))),
                            "toggleExpanded",(function(){e.props.accordionContext.toggleExpanded(e.props.uuid)
                            })),r(m(e),
                            "renderChildren",(function(a){var t=e.props,o=t.uuid,s=t.dangerouslySetExpanded,i=null!=s?s:a.isItemExpanded(o),r=a.isItemDisabled(o),d=a.getPanelAttributes(o,s),c=a.getHeadingAttributes(o),p=a.getButtonAttributes(o,s);return Object(n.createElement)(C.Provider,
                                {value: {uuid:o,expanded:i,disabled:r,toggleExpanded:e.toggleExpanded,panelAttributes:d,headingAttributes:c,buttonAttributes:p
                                    }
                                },e.props.children)
                            })),e
                        }return i(t,
                        [
                            {key: "render",value:function(){return Object(n.createElement)(N,
                                    null,this.renderChildren)
                                }
                            }
                        ]),t
                    }(n.Component),D=function(e){return Object(n.createElement)(N,
                        null,(function(a){return Object(n.createElement)(R,d({},e,
                            {accordionContext:a
                            }))
                        }))
                    },L=function(e){p(t,e);var a=_(t);function t(){var e;o(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i
                            ]=arguments[i
                            ];return r(m(e=a.call.apply(a,
                            [this
                            ].concat(s))),
                            "renderChildren",(function(a){return a?e.props.children(a): null
                            })),e
                        }return i(t,
                        [
                            {key: "render",value:function(){return Object(n.createElement)(C.Consumer,
                                    null,this.renderChildren)
                                }
                            }
                        ]),t
                    }(n.PureComponent),T=function(e){p(t,e);var a=_(t);function t(){var e;o(this,t);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c
                            ]=arguments[c
                            ];return r(m(e=a.call.apply(a,
                            [this
                            ].concat(i))),
                            "instanceUuid",P()),r(m(e),
                            "renderChildren",(function(a){var t=e.props,o=(t.uuid,t.className),s=t.activeClassName,i=(t.dangerouslySetExpanded,h(t,
                                [
                                    "uuid",
                                    "className",
                                    "activeClassName",
                                    "dangerouslySetExpanded"
                                ])),r=a.expanded&&s?s:o;return Object(n.createElement)("div",d({
                                    "data-accordion-component": "AccordionItem",className:r
                                },i))
                            })),e
                        }return i(t,
                        [
                            {key: "render",value:function(){var e=this.props,a=e.uuid,t=void 0===a?this.instanceUuid:a,o=e.dangerouslySetExpanded,s=h(e,
                                    [
                                        "uuid",
                                        "dangerouslySetExpanded"
                                    ]);return M(t),s.id&&M(s.id),Object(n.createElement)(D,
                                    {uuid:t,dangerouslySetExpanded:o
                                    },Object(n.createElement)(L,
                                    null,this.renderChildren))
                                }
                            }
                        ]),t
                    }(n.Component);function E(e){var a=function e(a){return a&&(a.matches('[data-accordion-component="Accordion"
                            ]')?a:e(a.parentElement))
                        }(e);return a&&Array.from(a.querySelectorAll('[data-accordion-component="AccordionItemButton"
                        ]'))
                    }r(T,
                    "defaultProps",
                    {className: "accordion__item"
                    }),r(T,
                    "displayName",S.AccordionItem);var A="40",B="35",W="13",x="36",U="37",K="39",G="32",F="38",V=function(e){var a=e.toggleExpanded,t=e.className,o=void 0===t?"accordion__button":t,s=h(e,
                        [
                            "toggleExpanded",
                            "className"
                        ]);return s.id&&M(s.id),Object(n.createElement)("div",d({className:o
                        },s,
                        {role: "button",tabIndex: 0,onClick:a,onKeyDown:function(e){var t,n,o=e.which.toString();if(o!==W&&o!==G||(e.preventDefault(),a()),e.target instanceof HTMLElement)switch(o){case x:e.preventDefault(),t=e.target,(n=(E(t)||[])[
                                        0
                                    ])&&n.focus();break;case B:e.preventDefault(),function(e){var a=E(e)||[],t=a[a.length-1
                                        ];t&&t.focus()
                                    }(e.target);break;case U:case F:e.preventDefault(),function(e){var a=E(e)||[],t=a.indexOf(e);if(-1!==t){var n=a[t-1
                                            ];n&&n.focus()
                                        }
                                    }(e.target);break;case K:case A:e.preventDefault(),function(e){var a=E(e)||[],t=a.indexOf(e);if(-1!==t){var n=a[t+1
                                            ];n&&n.focus()
                                        }
                                    }(e.target)
                                }
                            },
                            "data-accordion-component": "AccordionItemButton"
                        }))
                    },I=function(e){return Object(n.createElement)(L,
                        null,(function(a){var t=a.toggleExpanded,o=a.buttonAttributes;return Object(n.createElement)(V,d({toggleExpanded:t
                            },e,o))
                        }))
                    },z=function(e){p(t,e);var a=_(t);function t(){var e;o(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i
                            ]=arguments[i
                            ];return r(m(e=a.call.apply(a,
                            [this
                            ].concat(s))),
                            "ref",void 0),r(m(e),
                            "setRef",(function(a){e.ref=a
                            })),e
                        }return i(t,
                        [
                            {key: "componentDidUpdate",value:function(){t.VALIDATE(this.ref)
                                }
                            },
                            {key: "componentDidMount",value:function(){t.VALIDATE(this.ref)
                                }
                            },
                            {key: "render",value:function(){return Object(n.createElement)("div",d({
                                        "data-accordion-component": "AccordionItemHeading"
                                    },this.props,
                                    {ref:this.setRef
                                    }))
                                }
                            }
                        ],
                        [
                            {key: "VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”\n\n")
                                }
                            }
                        ]),t
                    }(n.PureComponent);r(z,
                    "defaultProps",
                    {className: "accordion__heading",
                        "aria-level": 3
                    });var J=function(e){return Object(n.createElement)(L,
                        null,(function(a){var t=a.headingAttributes;return e.id&&M(e.id),Object(n.createElement)(z,d({},e,t))
                        }))
                    };J.displayName=S.AccordionItemHeading;var j=function(e){var a=e.className,t=void 0===a?"accordion__panel":a,o=e.id,s=h(e,
                        [
                            "className",
                            "id"
                        ]),i=function(e){var a=e.panelAttributes;return o&&M(o),Object(n.createElement)("div",d({
                                "data-accordion-component": "AccordionItemPanel",className:t
                            },s,a))
                        };return Object(n.createElement)(L,
                        null,i)
                    }
                },klSK:function(e){e.exports=JSON.parse('{
                        "data": {
                            "currentBuildDate": {
                                "currentDate": "04/19/2021"
                            }
                        }
                    }')
                },
                "ku8+":function(e,a,t){
                    "use strict";t.d(a,
                    "a",(function(){return n
                    }));t("rzGZ"),t("Dq+y"),t("8npG");function n(e){return function(a,t){var n,o=t||{};if("formatting"===(o.context?String(o.context): "standalone")&&e.formattingValues){var s=e.defaultFormattingWidth||e.defaultWidth,i=o.width?String(o.width):s;n=e.formattingValues[i
                                ]||e.formattingValues[s
                                ]
                            }else{var r=e.defaultWidth,d=o.width?String(o.width):e.defaultWidth;n=e.values[d
                                ]||e.values[r
                                ]
                            }return n[e.argumentCallback?e.argumentCallback(a):a
                            ]
                        }
                    }
                },lEPA:function(e,a,t){
                    "use strict";var n=t("q1tI"),o=t.n(n),s=t("N/8v");a.a=function(e){var a=e.setLocation,t=e.buttonText,n=Object(s.usePosition)(!0,
                        {enableHighAccuracy:!0
                        }),i=n.latitude,r=n.longitude;return i&&r?o.a.createElement("div",
                        {className: "ontario-row ontario-margin-bottom-32-!"
                        },o.a.createElement("div",
                        {className: "ontario-small-12 ontario-columns"
                        },o.a.createElement("button",
                        {onClick:function(){return a({lat:i,lng:r
                                })
                            },className: "ontario-button ontario-button--primary ontario-margin-bottom-16-! ontario-assessment-centre__current-location"
                        },t))): null
                    }
                },nWfQ:function(e,a,t){var n=t("P8UN"),o=t("nsRs"),s=t("nONw"),i=t("1a8y"),r=t("BjK0"),d=t("96qb"),c=t("16Xr"),p=(t("emib").Reflect||{}).construct,l=d((function(){function e(){}return!(p((function(){}),
                        [],e)instanceof e)
                    })),u=!d((function(){p((function(){}))
                    }));n(n.S+n.F*(l||u),
                    "Reflect",
                    {construct:function(e,a){s(e),i(a);var t=arguments.length<3?e:s(arguments[
                                2
                            ]);if(u&&!l)return p(e,a,t);if(e==t){switch(a.length){case 0:return new e;case 1:return new e(a[
                                        0
                                    ]);case 2:return new e(a[
                                        0
                                    ],a[
                                        1
                                    ]);case 3:return new e(a[
                                        0
                                    ],a[
                                        1
                                    ],a[
                                        2
                                    ]);case 4:return new e(a[
                                        0
                                    ],a[
                                        1
                                    ],a[
                                        2
                                    ],a[
                                        3
                                    ])
                                }var n=[
                                    null
                                ];return n.push.apply(n,a),new(c.apply(e,n))
                            }var d=t.prototype,h=o(r(d)?d:Object.prototype),m=Function.apply.call(e,h,a);return r(m)?m:h
                        }
                    })
                },sWYD:function(e,a,t){
                    "use strict";t.d(a,
                    "a",(function(){return q
                    }));t("sC2a"),t("Ll4R"),t("AqHK"),t("q8oJ"),t("C9fy"),t("8npG");function n(e,a){if(a.length<e)throw new TypeError(e+" argument"+(e>1?"s": "")+" required, but only "+a.length+" present")
                    }function o(e){n(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===a?new Date(e.getTime()): "number"==typeof e||"[object Number]"===a?new Date(e):("string"!=typeof e&&"[object String]"!==a||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))
                    }function s(e){n(1,arguments);var a=o(e);return!isNaN(a)
                    }var i={lessThanXSeconds: {one: "less than a second",other: "less than {{count}} seconds"
                        },xSeconds: {one: "1 second",other: "{{count}} seconds"
                        },halfAMinute: "half a minute",lessThanXMinutes: {one: "less than a minute",other: "less than {{count}} minutes"
                        },xMinutes: {one: "1 minute",other: "{{count}} minutes"
                        },aboutXHours: {one: "about 1 hour",other: "about {{count}} hours"
                        },xHours: {one: "1 hour",other: "{{count}} hours"
                        },xDays: {one: "1 day",other: "{{count}} days"
                        },aboutXWeeks: {one: "about 1 week",other: "about {{count}} weeks"
                        },xWeeks: {one: "1 week",other: "{{count}} weeks"
                        },aboutXMonths: {one: "about 1 month",other: "about {{count}} months"
                        },xMonths: {one: "1 month",other: "{{count}} months"
                        },aboutXYears: {one: "about 1 year",other: "about {{count}} years"
                        },xYears: {one: "1 year",other: "{{count}} years"
                        },overXYears: {one: "over 1 year",other: "over {{count}} years"
                        },almostXYears: {one: "almost 1 year",other: "almost {{count}} years"
                        }
                    };var r=t("zMQz"),d={date:Object(r.a)({formats: {full: "EEEE, MMMM do, y",long: "MMMM do, y",medium: "MMM d, y",short: "MM/dd/yyyy"
                            },defaultWidth: "full"
                        }),time:Object(r.a)({formats: {full: "h:mm:ss a zzzz",long: "h:mm:ss a z",medium: "h:mm:ss a",short: "h:mm a"
                            },defaultWidth: "full"
                        }),dateTime:Object(r.a)({formats: {full: "{{date}} 'at' {{time}}",long: "{{date}} 'at' {{time}}",medium: "{{date}}, {{time}}",short: "{{date}}, {{time}}"
                            },defaultWidth: "full"
                        })
                    },c=t("0HXF"),p=t("J9JN"),l=t("WYsD"),u={code: "en-US",formatDistance:function(e,a,t){var n;return t=t||{},n="string"==typeof i[e
                            ]?i[e
                            ]: 1===a?i[e
                            ].one:i[e
                            ].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"in "+n:n+" ago":n
                        },formatLong:d,formatRelative:c.a,localize:p.a,match:l.a,options: {weekStartsOn: 0,firstWeekContainsDate: 1
                        }
                    };t("YBKJ");function h(e){if(null===e||!0===e||!1===e)return NaN;var a=Number(e);return isNaN(a)?a:a<0?Math.ceil(a):Math.floor(a)
                    }function m(e,a){n(2,arguments);var t=o(e).getTime(),s=h(a);return new Date(t+s)
                    }function y(e,a){n(2,arguments);var t=h(a);return m(e,-t)
                    }function _(e,a){for(var t=e<0?"-": "",n=Math.abs(e).toString();n.length<a;)n="0"+n;return t+n
                    }var w={y:function(e,a){var t=e.getUTCFullYear(),n=t>0?t: 1-t;return _("yy"===a?n%100:n,a.length)
                        },M:function(e,a){var t=e.getUTCMonth();return"M"===a?String(t+1):_(t+1,
                            2)
                        },d:function(e,a){return _(e.getUTCDate(),a.length)
                        },a:function(e,a){var t=e.getUTCHours()/12>=1?"pm": "am";switch(a){case"a":case"aa":case"aaa":return t.toUpperCase();case"aaaaa":return t[
                                    0
                                ];case"aaaa":default:return"am"===t?"a.m.": "p.m."
                            }
                        },h:function(e,a){return _(e.getUTCHours()%12||12,a.length)
                        },H:function(e,a){return _(e.getUTCHours(),a.length)
                        },m:function(e,a){return _(e.getUTCMinutes(),a.length)
                        },s:function(e,a){return _(e.getUTCSeconds(),a.length)
                        },S:function(e,a){var t=a.length,n=e.getUTCMilliseconds();return _(Math.floor(n*Math.pow(10,t-3)),a.length)
                        }
                    };function v(e){n(1,arguments);var a=1,t=o(e),s=t.getUTCDay(),i=(s<a?7: 0)+s-a;return t.setUTCDate(t.getUTCDate()-i),t.setUTCHours(0,
                        0,
                        0,
                        0),t
                    }function g(e){n(1,arguments);var a=o(e),t=a.getUTCFullYear(),s=new Date(0);s.setUTCFullYear(t+1,
                        0,
                        4),s.setUTCHours(0,
                        0,
                        0,
                        0);var i=v(s),r=new Date(0);r.setUTCFullYear(t,
                        0,
                        4),r.setUTCHours(0,
                        0,
                        0,
                        0);var d=v(r);return a.getTime()>=i.getTime()?t+1:a.getTime()>=d.getTime()?t:t-1
                    }function Y(e){n(1,arguments);var a=g(e),t=new Date(0);t.setUTCFullYear(a,
                        0,
                        4),t.setUTCHours(0,
                        0,
                        0,
                        0);var o=v(t);return o
                    }function f(e,a){n(1,arguments);var t=a||{},s=t.locale,i=s&&s.options&&s.options.weekStartsOn,r=null==i?0:h(i),d=null==t.weekStartsOn?r:h(t.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=o(e),p=c.getUTCDay(),l=(p<d?7: 0)+p-d;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,
                        0,
                        0,
                        0),c
                    }function b(e,a){n(1,arguments);var t=o(e,a),s=t.getUTCFullYear(),i=a||{},r=i.locale,d=r&&r.options&&r.options.firstWeekContainsDate,c=null==d?1:h(d),p=null==i.firstWeekContainsDate?c:h(i.firstWeekContainsDate);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(s+1,
                        0,p),l.setUTCHours(0,
                        0,
                        0,
                        0);var u=f(l,a),m=new Date(0);m.setUTCFullYear(s,
                        0,p),m.setUTCHours(0,
                        0,
                        0,
                        0);var y=f(m,a);return t.getTime()>=u.getTime()?s+1:t.getTime()>=y.getTime()?s:s-1
                    }function N(e,a){n(1,arguments);var t=a||{},o=t.locale,s=o&&o.options&&o.options.firstWeekContainsDate,i=null==s?1:h(s),r=null==t.firstWeekContainsDate?i:h(t.firstWeekContainsDate),d=b(e,a),c=new Date(0);c.setUTCFullYear(d,
                        0,r),c.setUTCHours(0,
                        0,
                        0,
                        0);var p=f(c,a);return p
                    }var k="midnight",S="noon",H="morning",P="afternoon",O="evening",M="night";function C(e,a){var t=e>0?"-": "+",n=Math.abs(e),o=Math.floor(n/60),s=n%60;if(0===s)return t+String(o);var i=a||"";return t+String(o)+i+_(s,
                        2)
                    }function R(e,a){return e%60==0?(e>0?"-": "+")+_(Math.abs(e)/60,
                        2):D(e,a)
                    }function D(e,a){var t=a||"",n=e>0?"-": "+",o=Math.abs(e);return n+_(Math.floor(o/60),
                        2)+t+_(o%60,
                        2)
                    }var L={G:function(e,a,t){var n=e.getUTCFullYear()>0?1: 0;switch(a){case"G":case"GG":case"GGG":return t.era(n,
                                {width: "abbreviated"
                                });case"GGGGG":return t.era(n,
                                {width: "narrow"
                                });case"GGGG":default:return t.era(n,
                                {width: "wide"
                                })
                            }
                        },y:function(e,a,t){if("yo"===a){var n=e.getUTCFullYear(),o=n>0?n: 1-n;return t.ordinalNumber(o,
                                {unit: "year"
                                })
                            }return w.y(e,a)
                        },Y:function(e,a,t,n){var o=b(e,n),s=o>0?o: 1-o;return"YY"===a?_(s%100,
                            2): "Yo"===a?t.ordinalNumber(s,
                            {unit: "year"
                            }):_(s,a.length)
                        },R:function(e,a){return _(g(e),a.length)
                        },u:function(e,a){return _(e.getUTCFullYear(),a.length)
                        },Q:function(e,a,t){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(a){case"Q":return String(n);case"QQ":return _(n,
                                2);case"Qo":return t.ordinalNumber(n,
                                {unit: "quarter"
                                });case"QQQ":return t.quarter(n,
                                {width: "abbreviated",context: "formatting"
                                });case"QQQQQ":return t.quarter(n,
                                {width: "narrow",context: "formatting"
                                });case"QQQQ":default:return t.quarter(n,
                                {width: "wide",context: "formatting"
                                })
                            }
                        },q:function(e,a,t){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(a){case"q":return String(n);case"qq":return _(n,
                                2);case"qo":return t.ordinalNumber(n,
                                {unit: "quarter"
                                });case"qqq":return t.quarter(n,
                                {width: "abbreviated",context: "standalone"
                                });case"qqqqq":return t.quarter(n,
                                {width: "narrow",context: "standalone"
                                });case"qqqq":default:return t.quarter(n,
                                {width: "wide",context: "standalone"
                                })
                            }
                        },M:function(e,a,t){var n=e.getUTCMonth();switch(a){case"M":case"MM":return w.M(e,a);case"Mo":return t.ordinalNumber(n+1,
                                {unit: "month"
                                });case"MMM":return t.month(n,
                                {width: "abbreviated",context: "formatting"
                                });case"MMMMM":return t.month(n,
                                {width: "narrow",context: "formatting"
                                });case"MMMM":default:return t.month(n,
                                {width: "wide",context: "formatting"
                                })
                            }
                        },L:function(e,a,t){var n=e.getUTCMonth();switch(a){case"L":return String(n+1);case"LL":return _(n+1,
                                2);case"Lo":return t.ordinalNumber(n+1,
                                {unit: "month"
                                });case"LLL":return t.month(n,
                                {width: "abbreviated",context: "standalone"
                                });case"LLLLL":return t.month(n,
                                {width: "narrow",context: "standalone"
                                });case"LLLL":default:return t.month(n,
                                {width: "wide",context: "standalone"
                                })
                            }
                        },w:function(e,a,t,s){var i=function(e,a){n(1,arguments);var t=o(e),s=f(t,a).getTime()-N(t,a).getTime();return Math.round(s/6048e5)+1
                            }(e,s);return"wo"===a?t.ordinalNumber(i,
                            {unit: "week"
                            }):_(i,a.length)
                        },I:function(e,a,t){var s=function(e){n(1,arguments);var a=o(e),t=v(a).getTime()-Y(a).getTime();return Math.round(t/6048e5)+1
                            }(e);return"Io"===a?t.ordinalNumber(s,
                            {unit: "week"
                            }):_(s,a.length)
                        },d:function(e,a,t){return"do"===a?t.ordinalNumber(e.getUTCDate(),
                            {unit: "date"
                            }):w.d(e,a)
                        },D:function(e,a,t){var s=function(e){n(1,arguments);var a=o(e),t=a.getTime();a.setUTCMonth(0,
                                1),a.setUTCHours(0,
                                0,
                                0,
                                0);var s=a.getTime(),i=t-s;return Math.floor(i/864e5)+1
                            }(e);return"Do"===a?t.ordinalNumber(s,
                            {unit: "dayOfYear"
                            }):_(s,a.length)
                        },E:function(e,a,t){var n=e.getUTCDay();switch(a){case"E":case"EE":case"EEE":return t.day(n,
                                {width: "abbreviated",context: "formatting"
                                });case"EEEEE":return t.day(n,
                                {width: "narrow",context: "formatting"
                                });case"EEEEEE":return t.day(n,
                                {width: "short",context: "formatting"
                                });case"EEEE":default:return t.day(n,
                                {width: "wide",context: "formatting"
                                })
                            }
                        },e:function(e,a,t,n){var o=e.getUTCDay(),s=(o-n.weekStartsOn+8)%7||7;switch(a){case"e":return String(s);case"ee":return _(s,
                                2);case"eo":return t.ordinalNumber(s,
                                {unit: "day"
                                });case"eee":return t.day(o,
                                {width: "abbreviated",context: "formatting"
                                });case"eeeee":return t.day(o,
                                {width: "narrow",context: "formatting"
                                });case"eeeeee":return t.day(o,
                                {width: "short",context: "formatting"
                                });case"eeee":default:return t.day(o,
                                {width: "wide",context: "formatting"
                                })
                            }
                        },c:function(e,a,t,n){var o=e.getUTCDay(),s=(o-n.weekStartsOn+8)%7||7;switch(a){case"c":return String(s);case"cc":return _(s,a.length);case"co":return t.ordinalNumber(s,
                                {unit: "day"
                                });case"ccc":return t.day(o,
                                {width: "abbreviated",context: "standalone"
                                });case"ccccc":return t.day(o,
                                {width: "narrow",context: "standalone"
                                });case"cccccc":return t.day(o,
                                {width: "short",context: "standalone"
                                });case"cccc":default:return t.day(o,
                                {width: "wide",context: "standalone"
                                })
                            }
                        },i:function(e,a,t){var n=e.getUTCDay(),o=0===n?7:n;switch(a){case"i":return String(o);case"ii":return _(o,a.length);case"io":return t.ordinalNumber(o,
                                {unit: "day"
                                });case"iii":return t.day(n,
                                {width: "abbreviated",context: "formatting"
                                });case"iiiii":return t.day(n,
                                {width: "narrow",context: "formatting"
                                });case"iiiiii":return t.day(n,
                                {width: "short",context: "formatting"
                                });case"iiii":default:return t.day(n,
                                {width: "wide",context: "formatting"
                                })
                            }
                        },a:function(e,a,t){var n=e.getUTCHours()/12>=1?"pm": "am";switch(a){case"a":case"aa":case"aaa":return t.dayPeriod(n,
                                {width: "abbreviated",context: "formatting"
                                });case"aaaaa":return t.dayPeriod(n,
                                {width: "narrow",context: "formatting"
                                });case"aaaa":default:return t.dayPeriod(n,
                                {width: "wide",context: "formatting"
                                })
                            }
                        },b:function(e,a,t){var n,o=e.getUTCHours();switch(n=12===o?S: 0===o?k:o/12>=1?"pm": "am",a){case"b":case"bb":case"bbb":return t.dayPeriod(n,
                                {width: "abbreviated",context: "formatting"
                                });case"bbbbb":return t.dayPeriod(n,
                                {width: "narrow",context: "formatting"
                                });case"bbbb":default:return t.dayPeriod(n,
                                {width: "wide",context: "formatting"
                                })
                            }
                        },B:function(e,a,t){var n,o=e.getUTCHours();switch(n=o>=17?O:o>=12?P:o>=4?H:M,a){case"B":case"BB":case"BBB":return t.dayPeriod(n,
                                {width: "abbreviated",context: "formatting"
                                });case"BBBBB":return t.dayPeriod(n,
                                {width: "narrow",context: "formatting"
                                });case"BBBB":default:return t.dayPeriod(n,
                                {width: "wide",context: "formatting"
                                })
                            }
                        },h:function(e,a,t){if("ho"===a){var n=e.getUTCHours()%12;return 0===n&&(n=12),t.ordinalNumber(n,
                                {unit: "hour"
                                })
                            }return w.h(e,a)
                        },H:function(e,a,t){return"Ho"===a?t.ordinalNumber(e.getUTCHours(),
                            {unit: "hour"
                            }):w.H(e,a)
                        },K:function(e,a,t){var n=e.getUTCHours()%12;return"Ko"===a?t.ordinalNumber(n,
                            {unit: "hour"
                            }):_(n,a.length)
                        },k:function(e,a,t){var n=e.getUTCHours();return 0===n&&(n=24),
                            "ko"===a?t.ordinalNumber(n,
                            {unit: "hour"
                            }):_(n,a.length)
                        },m:function(e,a,t){return"mo"===a?t.ordinalNumber(e.getUTCMinutes(),
                            {unit: "minute"
                            }):w.m(e,a)
                        },s:function(e,a,t){return"so"===a?t.ordinalNumber(e.getUTCSeconds(),
                            {unit: "second"
                            }):w.s(e,a)
                        },S:function(e,a){return w.S(e,a)
                        },X:function(e,a,t,n){var o=(n._originalDate||e).getTimezoneOffset();if(0===o)return"Z";switch(a){case"X":return R(o);case"XXXX":case"XX":return D(o);case"XXXXX":case"XXX":default:return D(o,
                                ":")
                            }
                        },x:function(e,a,t,n){var o=(n._originalDate||e).getTimezoneOffset();switch(a){case"x":return R(o);case"xxxx":case"xx":return D(o);case"xxxxx":case"xxx":default:return D(o,
                                ":")
                            }
                        },O:function(e,a,t,n){var o=(n._originalDate||e).getTimezoneOffset();switch(a){case"O":case"OO":case"OOO":return"GMT"+C(o,
                                ":");case"OOOO":default:return"GMT"+D(o,
                                ":")
                            }
                        },z:function(e,a,t,n){var o=(n._originalDate||e).getTimezoneOffset();switch(a){case"z":case"zz":case"zzz":return"GMT"+C(o,
                                ":");case"zzzz":default:return"GMT"+D(o,
                                ":")
                            }
                        },t:function(e,a,t,n){var o=n._originalDate||e;return _(Math.floor(o.getTime()/1e3),a.length)
                        },T:function(e,a,t,n){return _((n._originalDate||e).getTime(),a.length)
                        }
                    };function T(e,a){switch(e){case"P":return a.date({width: "short"
                            });case"PP":return a.date({width: "medium"
                            });case"PPP":return a.date({width: "long"
                            });case"PPPP":default:return a.date({width: "full"
                            })
                        }
                    }function E(e,a){switch(e){case"p":return a.time({width: "short"
                            });case"pp":return a.time({width: "medium"
                            });case"ppp":return a.time({width: "long"
                            });case"pppp":default:return a.time({width: "full"
                            })
                        }
                    }var A={p:E,P:function(e,a){var t,n=e.match(/(P+)(p+)?/),o=n[
                                1
                            ],s=n[
                                2
                            ];if(!s)return T(e,a);switch(o){case"P":t=a.dateTime({width: "short"
                                });break;case"PP":t=a.dateTime({width: "medium"
                                });break;case"PPP":t=a.dateTime({width: "long"
                                });break;case"PPPP":default:t=a.dateTime({width: "full"
                                })
                            }return t.replace("{{date}}",T(o,a)).replace("{{time}}",E(s,a))
                        }
                    };function B(e){return e.getTime()%6e4
                    }function W(e){var a=new Date(e.getTime()),t=Math.ceil(a.getTimezoneOffset());return a.setSeconds(0,
                        0),
                        6e4*t+(t>0?(6e4+B(a))%6e4:B(a))
                    }t("sc67");var x=[
                        "D",
                        "DD"
                    ],U=[
                        "YY",
                        "YYYY"
                    ];function K(e){return-1!==x.indexOf(e)
                    }function G(e){return-1!==U.indexOf(e)
                    }function F(e,a,t){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(a,
                        "`) for formatting years to the input `").concat(t,
                        "`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(a,
                        "`) for formatting years to the input `").concat(t,
                        "`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(a,
                        "`) for formatting days of the month to the input `").concat(t,
                        "`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(a,
                        "`) for formatting days of the month to the input `").concat(t,
                        "`; see: https://git.io/fxCyr"))
                    }var V=/[yYQqMLwIdDecihHKkms
                    ]o|(\w)\1*|''|'(''|[^'
                    ])+('|$)|./g,I=/P+p+|P+|p+|''|'(''|[^'
                    ])+('|$)|./g,z=/^'([^
                    ]*?)'?$/,J=/''/g,j=/[a-zA-Z
                    ]/;function q(e,a,t){n(2,arguments);var i=String(a),r=t||{},d=r.locale||u,c=d.options&&d.options.firstWeekContainsDate,p=null==c?1:h(c),l=null==r.firstWeekContainsDate?p:h(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=d.options&&d.options.weekStartsOn,_=null==m?0:h(m),w=null==r.weekStartsOn?_:h(r.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!d.localize)throw new RangeError("locale must contain localize property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var v=o(e);if(!s(v))throw new RangeError("Invalid time value");var g=W(v),Y=y(v,g),f={firstWeekContainsDate:l,weekStartsOn:w,locale:d,_originalDate:v
                        },b=i.match(I).map((function(e){var a=e[
                                0
                            ];return"p"===a||"P"===a?(0,A[a
                            ])(e,d.formatLong,f):e
                        })).join("").match(V).map((function(t){if("''"===t)return"'";var n=t[
                                0
                            ];if("'"===n)return X(t);var o=L[n
                            ];if(o)return!r.useAdditionalWeekYearTokens&&G(t)&&F(t,a,e),!r.useAdditionalDayOfYearTokens&&K(t)&&F(t,a,e),o(Y,t,d.localize,f);if(n.match(j))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return t
                        })).join("");return b
                    }function X(e){return e.match(z)[
                            1
                        ].replace(J,
                        "'")
                    }
                },
                "t+fG":function(e,a,t){var n=t("P8UN"),o=t("96qb"),s=t("ap2Z"),i=/"/g,r=function(e,a,t,n){var o=String(s(e)),r="<"+a;return""!==t&&(r+=" "+t+'="'+String(n).replace(i,