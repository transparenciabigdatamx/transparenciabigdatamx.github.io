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
                    ["SHCP", 1925],
                    ["SEP", 1255],
                    ["SEMARNAT", 1258],
                    ["IMSS", 1256],
                    ["FUNCIÓN PÚBLICA", 1017],
                    ["SEGOB", 933],
                    ["PGR", 1016],
                    ["SALUD", 817],
                    ["SCT", 907],
                    ["SAT", 1256],



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
                    ["SHCP", 1925],
                    ["SEP", 1255],
                    ["SEMARNAT", 1258],
                    ["IMSS", 1256],
                    ["SALUD", 817],
                    ["FUNCIÓN PÚBLICA", 1017],
                    ["SAT", 907],
                    ["SEGOB", 933],
                    ["SCT", 907],
                    ["PGR", 1016]
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
                    ["IMSS", 1256],
                    ["SEP", 1255],
                    ["SALUD", 817],
                    ["SHCP", 1925],
                    ["SEMARNAT", 1258],
                    ["SCT", 907],
                    ["FUNCIÓN PÚBLICA", 1017],
                    ["PGR", 1016],
                    ["SEGOB", 933],
                    ["SEDESOL", 931],




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
                    ["IMSS", 1256],
                    ["SEP", 1255],
                    ["SALUD", 817],
                    ["SEMARNAT", 1258],
                    ["FUNCIÓN PÚBLICA", 1017],
                    ["SCT", 907],
                    ["SHCP", 1925],
                    ["ISSSTE", 931],
                    ["SEGOB", 933],
                    ["PGR", 1016],

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
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["SCT", 1256],
                    ["SEMARNAT", 1255],
                    ["SALUD", 1017],
                    ["SHCP", 1016],
                    ["ISSSTE", 933],
                    ["FUNCIÓN PÚBLICA", 931],
                    ["SEGOB", 907],
                    ["PGR", 817],


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
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["SALUD", 1256],
                    ["SCT", 1255],
                    ["SEMARNAT", 1017],
                    ["SHCP", 1016],
                    ["FUNCIÓN PÚBLICA", 933],
                    ["ISSSTE", 931],
                    ["CFE", 907],
                    ["CONAGUA", 817],


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
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["SALUS", 1256],
                    ["SHCP", 1255],
                    ["SCT", 1017],
                    ["SEMARNAT", 1016],
                    ["FUNCIÓN PÚBLICA", 933],
                    ["ISSSTE", 931],
                    ["PGR", 907],
                    ["SEGOB", 817],


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
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["SALUD", 1256],
                    ["SEMARNAT", 1255],
                    ["SHCP", 1016],
                    ["FUNCIÓN PÚBLICA", 1017],
                    ["SCT", 1016],
                    ["ISSSTE", 933],
                    ["CFE", 931],
                    ["PGR", 907],

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
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["SALUD", 1256],
                    ["SEMARNAT", 1255],
                    ["ISSSTE", 1017],
                    ["SHCP", 1016],
                    ["COFEPRIS", 933],
                    ["SEGOB", 931],
                    ["PGR", 907],
                    ["FUNCIÓN PÚBLICA", 817],


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
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["ISSSTE", 1256],
                    ["SEMARNAT", 1255],
                    ["SALUD", 817],
                    ["SEGOB", 933],
                    ["COFEPRIS", 1017],
                    ["SCT", 1016],
                    ["PGR", 931],
                    ["SHCP", 907],



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
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["SALUD", 1256],
                    ["ISSSTE", 1255],
                    ["PGR", 1017],
                    ["SEGOB", 1016],
                    ["SEMARNAT", 933],
                    ["SCT", 931],
                    ["COFEPRIS", 907],
                    ["FUNCIÓN PÚBLICA", 817],


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