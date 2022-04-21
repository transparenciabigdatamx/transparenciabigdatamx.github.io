Highcharts.setOptions({
    lang: {
        drillUpText: '<< De clic para REGRESAR a la gráfica de total anual de solicitudes',



    }
});
Highcharts.chart('containertotalsolicitudes', {
    chart: {
        type: 'column'
    },
    title: {
        margin: 50,
        align: "left",

        style: {
            fontFamily: "Nunito",
            color: '#2c666eff',
            fontSize: '30px',
            fontWeight: 'bold',

        },
        text: 'SOLICITUDES DE INFORMACIÓN  2003-2015, POR DEPENDENCIA'
    },

    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#46627f",
        lineColor: "#46627f",
        minorGridLineColor: "#CEC6B9",
        minorGridLineColor: "#BDC3C7",
        tickColor: "#46627f",
        tickWidth: 1,
        labels: {
            style: {
                color: '#262626',
                fontSize: '1.5em',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
            },
        },


        style: {
            color: '#7c7c7cff',
            fontSize: '30px',
            fontFamily: 'Nunito',
            fontWeight: 'bold'
        },
        type: 'category'
    },
    yAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#46627f",
        lineColor: "#46627f",
        minorGridLineColor: "#CEC6B9",
        minorGridLineColor: "#BDC3C7",
        tickColor: "#46627f",
        tickWidth: 1,
        lineColor: '#262626',
        lineWidth: 1,
        labels: {
            style: {
                color: '#262626',
                fontSize: '1.5em',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
            },
        },

        title: {
            text: 'Total de solicitudes 2003-2019'
        }
    },
    subtitle: {
        align: "left",
        margin: 50,
        verticalAlign: 'bottom',


        style: {
            color: '#17503d',
            fontSize: '13px',
            fontFamily: 'Nunito',
        },
        text: 'Fuente: Elaboración propia con base en datos abiertos del INAI. Los datos que se muestran únicamente consideran solicitudes de información dirigidas a dependencias de la administración pública federal. Para el análisis se excluyeron solicitudes ingresadas desde fuera de México.'

    },

    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>solicitudes<br/>',
        backgroundColor: '#000',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        style: {
            color: 'white',

            fontSize: '2.5em',
            fontFamily: "Nunito",
        }
    },
    series: [{
        name: "Dependencias top 10",
        colorByPoint: false,
        data: [{
                name: "2003",
                y: 22573,
                color: '#daa520',
                drilldown: "2003"
            }, {
                name: "2004",
                y: 34216,
                color: '#daa520',
                drilldown: "2004"
            }, {
                name: "2005",
                y: 43391,
                color: '#daa520',
                drilldown: "2005"
            }, {
                name: "2006",
                y: 50757,
                color: '#daa520',
                drilldown: "2006"
            }, {
                name: "2007",
                y: 78364,
                color: '#daa520',
                drilldown: "2007"
            }, {
                name: "2008",
                y: 85604,
                color: '#daa520',
                drilldown: "2008"
            }, {
                name: "2009",
                y: 97486,
                color: '#daa520',
                drilldown: "2009"
            }, {
                name: "2010",
                y: 99713,
                color: '#daa520',
                drilldown: "2010"
            }, {
                name: "2011",
                y: 96073,
                color: '#daa520',
                drilldown: "2011"
            }, {
                name: "2012",
                y: 94600,
                color: '#daa520',
                drilldown: "2012"
            }, {
                name: "2013",
                y: 109445,
                color: '#daa520',
                drilldown: "2013"
            }, {
                name: "2014",
                y: 116078,
                color: '#daa520',
                drilldown: "2014"
            },
            {
                name: "2015",
                y: 116078,
                color: '#daa520',
                drilldown: "2015"
            },
            {
                name: "2016",
                y: 135501,
                color: '#daa520',
                drilldown: "2016"
            },
            {
                name: "2017",
                y: 184273,
                color: '#daa520',
                drilldown: "2017"
            },
            {
                name: "2018",
                y: 170963,
                color: '#daa520',
                drilldown: "2018"
            }, {
                name: "2019",
                y: 214273,
                color: '#daa520',
                drilldown: "2019"
            }
        ]
    }],
    drilldown: {
        drillUpButton: {
            relativeTo: 'spacingBox',
            position: {
                y: 0,
                x: 0
            },
            theme: {
                fill: 'blue',
                'stroke-width': 1,
                stroke: 'silver',
                r: 0,
                states: {
                    hover: {
                        fill: '#a4edba'
                    },
                    select: {
                        stroke: '#039',
                        fill: '#a4edba'
                    }
                }
            }

        },
        series: [{
                name: "2003",
                id: "2003",
                data: [
                    ["SHCP", 1469],
                    ["SEP", 1019],
                    ["IMSS", 800],
                    ["SEMARNAT", 753],
                    ["Presidencia", 656],
                    ["SEGOB", 621],
                    ["FUNCIÓN PÚBLICA", 628],
                    ["SCT", 621],
                    ["CFE", 506],
                    ["PGR", 505]

                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(253, 231, 37)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2004",
                id: "2004",
                data: [
                    ["SHCP", 1925],
                    ["SEMARNAT", 1258],
                    ["IMSS", 1256],
                    ["SEP", 1255],
                    ["FUNCIÓN PÚBLICA", 1017],
                    ["PGR", 1016],
                    ["SEGOB", 933],
                    ["AEROPUERTOS", 931],
                    ["SCT", 907],
                    ["SALUD", 817],


                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [0, 'rgb(59, 82, 139)'],
                        [100, 'rgb(33, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2005",
                id: "2005",
                data: [
                    ["SHCP", 2007],
                    ["SEP", 1894],
                    ["SEMARNAT", 1766],
                    ["IMSS", 1575],
                    ["FUNCIÓN PÚBLICA", 1379],
                    ["SEGOB", 1263],
                    ["PGR", 1233],
                    ["SALUD", 1228],
                    ["SCT", 1189],
                    ["SAT", 1127],



                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(253, 231, 37)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2006",
                id: "2006",
                data: [
                    ["SHCP", 2284],
                    ["SEP", 2195],
                    ["SEMARNAT", 1945],
                    ["IMSS", 1862],
                    ["SALUD", 1839],
                    ["FUNCIÓN PÚBLICA", 1618],
                    ["SAT", 1397],
                    ["SEGOB", 1349],
                    ["SCT", 1334],
                    ["PGR", 1233]
                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(253, 231, 37)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2007",
                id: "2007",
                data: [
                    ["IMSS", 6242],
                    ["SEP", 5202],
                    ["SALUD", 2685],
                    ["SHCP", 2649],
                    ["SEMARNAT", 2521],
                    ["SCT", 2127],
                    ["FUNCIÓN PÚBLICA", 2117],
                    ["PGR", 1918],
                    ["SEGOB", 1813],
                    ["SEDESOL", 1788],




                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(253, 231, 37)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2008",
                id: "2008",
                data: [
                    ["IMSS", 8282],
                    ["SEP", 4177],
                    ["SALUD", 3120],
                    ["SEMARNAT", 2977],
                    ["FUNCIÓN PÚBLICA", 2799],
                    ["SCT", 2605],
                    ["SHCP", 2567],
                    ["ISSSTE", 2310],
                    ["SEGOB", 2135],
                    ["PGR", 1859],

                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(253, 231, 37)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2009",
                id: "2009",
                data: [
                    ["IMSS", 9962],
                    ["SEP", 4957],
                    ["SCT", 3371],
                    ["SEMARNAT", 3232],
                    ["SALUD", 3195],
                    ["SHCP", 3053],
                    ["ISSSTE", 3034],
                    ["FUNCIÓN PÚBLICA", 2507],
                    ["SEGOB", 2385],
                    ["PGR", 2115],


                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(253, 231, 37)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2010",
                id: "2010",
                data: [
                    ["IMSS", 9429],
                    ["SEP", 4721],
                    ["SALUD", 3810],
                    ["SCT", 3397],
                    ["SEMARNAT", 3240],
                    ["SHCP", 2918],
                    ["FUNCIÓN PÚBLICA", 2830],
                    ["ISSSTE", 2756],
                    ["CFE", 2425],
                    ["CONAGUA", 2414],


                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(253, 231, 37)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2011",
                id: "2011",
                data: [
                    ["IMSS", 9161],
                    ["SEP", 4384],
                    ["SALUS", 3890],
                    ["SHCP", 3242],
                    ["SCT", 3185],
                    ["SEMARNAT", 3153],
                    ["FUNCIÓN PÚBLICA", 2996],
                    ["ISSSTE", 2961],
                    ["PGR", 2334],
                    ["SEGOB", 2252],


                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(253, 231, 37)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2012",
                id: "2012",
                data: [
                    ["IMSS", 7530],
                    ["SEP", 4607],
                    ["SALUD", 3712],
                    ["SEMARNAT", 3081],
                    ["SHCP", 2940],
                    ["FUNCIÓN PÚBLICA", 2707],
                    ["SCT", 2668],
                    ["ISSSTE", 2665],
                    ["CFE", 2445],
                    ["PGR", 2384],

                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(253, 231, 37)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2013",
                id: "2013",
                data: [
                    ["IMSS", 10603],
                    ["SEP", 4632],
                    ["SALUD", 3661],
                    ["SEMARNAT", 3433],
                    ["ISSSTE", 3260],
                    ["SHCP", 3208],
                    ["COFEPRIS", 3147],
                    ["SEGOB", 3060],
                    ["PGR", 2617],
                    ["FUNCIÓN PÚBLICA", 2590],


                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(253, 231, 37)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2014",
                id: "2014",
                data: [
                    ["IMSS", 9602],
                    ["SEP", 5777],
                    ["ISSSTE", 4261],
                    ["SEMARNAT", 4039],
                    ["SALUD", 3980],
                    ["SEGOB", 3578],
                    ["COFEPRIS", 3372],
                    ["SCT", 3146],
                    ["PGR", 3070],
                    ["SHCP", 3018],



                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(68, 1, 84)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2015",
                id: "2015",
                data: [
                    ["IMSS", 8609],
                    ["SEP", 6422],
                    ["ISSSTE", 4189],
                    ["SEMARNAT", 3925],
                    ["SALUD", 5096],
                    ["SEGOB", 4002],
                    ["COFEPRIS", 3240],
                    ["SCT", 3455],
                    ["PGR", 4216],
                    ["SHCP", 3225],



                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(68, 1, 84)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2016",
                id: "2016",
                data: [
                    ["IMSS", 9232],
                    ["SEP", 6305],
                    ["ISSSTE", 3502],
                    ["SEMARNAT", 4460],
                    ["SALUD", 3868],
                    ["SEGOB", 3643],
                    ["COFEPRIS", 6858],
                    ["SCT", 3770],
                    ["PGR", 3399],
                    ["SHCP", 3424],



                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(68, 1, 84)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2017",
                id: "2017",
                data: [
                    ["IMSS", 9931],
                    ["IPN", 7091],
                    ["SEP", 6076],
                    ["CONAGUA", 5458],
                    ["SALUD", 4143],
                    ["ISSSTE", 4011],
                    ["SEGOB", 1016],
                    ["SEMARNAT", 4826],
                    ["SCT", 3692],
                    ["COFEPRIS", 12421],
                    ["FUNCIÓN PÚBLICA", 4533],



                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(68, 1, 84)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2018",
                id: "2018",
                data: [
                    ["IMSS", 11077],
                    ["SEP", 7320],
                    ["SALUD", 9036],
                    ["ISSSTE", 3966],
                    ["SAGARPA", 3549],
                    ["SEGOB", 1016],
                    ["SEMARNAT", 5057],
                    ["SCT", 3519],
                    ["COFEPRIS", 10644],
                    ["CONAGUA", 3343],



                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(68, 1, 84)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            },
            {
                name: "2019",
                id: "2019",
                data: [
                    ["IMSS", 11808],
                    ["CFE", 11743],
                    ["SEP", 6228],
                    ["SHCP", 5579],
                    ["SEMARNAT", 5277],
                    ["CONAGUA", 1016],
                    ["ISSSTE", 5149],
                    ["SALUD", 5120],
                    ["SCT", 5120],
                    ["PGR", 4657],


                ],
                color: {
                    linearGradient: [0, 0, 0, 1000],
                    stops: [
                        [100, 'rgb(68, 1, 84)'],
                        [500, 'rgb(94, 201, 98)'],
                        [1000, 'rgb(33, 145, 140)'],
                        [1500, 'rgb(59, 82, 139)'],
                        [10000, 'rgb(68, 1, 84)'],
                    ]
                }
            }
        ]
    }
});