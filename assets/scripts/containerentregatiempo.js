var colors = Highcharts.getOptions().colors;

Highcharts.chart('containerentregatiempo', {
    chart: {
        type: 'spline'
    },

    legend: {
        symbolWidth: 40
    },
    title: {
        margin: 50,
        align: "left",

        style: {
            fontFamily: "Nunito",
            color: '#262626',
            fontSize: '30px',
            fontWeight: 'bold',

        },
        text: 'PROPORCIÓN ANUAL <br>DE RESPUESTAS ENTREGADAS <br>DENTRO DEL PLAZO LEGAL'
    },

    subtitle: {
        align: "right",
        margin: 50,
        verticalAlign: 'bottom',


        style: {
            color: '#17503d',
            fontSize: '20px',
            fontFamily: 'Nunito',
        },
        text: 'Fuente: Los datos que se muestran en la gráfica se calcularon considerando únicamente  solicitudes de acceso a la información publica dirigidas a dependencias de la Administración Pública Federal (se excluye cualquier otro Sujeto obligado distinto a los de la Administración Pública Federal). Para el análisis se excluyeron solicitudes ingresadas desde fuera de México.Tampoco se consideran solicitudes de Datos Personales'

    },



    yAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#fff",
        lineColor: "#fff",
        minorGridLineColor: "#fff",
        minorGridLineColor: "#fff",
        tickColor: "#fff",
        tickWidth: 1,
        lineColor: '#262626',
        lineWidth: 5,

        labels: {
            style: {
                color: '#262626',
                fontSize: '1.5em',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
            },
        },

        title: {
            style: {
                color: '#262626',
                fontSize: '1.5em',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
            },

            text: 'Proporción de respuestas'
        },

        labels: {
            style: {
                color: '#262626',
                fontSize: '1.5em',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
            },
        },
        accessibility: {
            description: 'Proporción de respuestas'
        }
    },

    xAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#fff",
        lineColor: "#262626",
        minorGridLineColor: "#fff",
        minorGridLineColor: "#fff",
        tickColor: "#fff",
        tickWidth: 1,

        labels: {
            style: {
                color: '#262626',
                fontSize: '1.5em',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
            },
        },

        title: {
            style: {
                color: '#262626',
                fontSize: '1.5em',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
            },

            text: 'Año'
        },
        style: {
            color: '#fff',
            fontSize: '14px',
            fontFamily: 'Nunito',
            fontWeight: 'bold',
            fontColor: '#fff',



        },
        title: {
            text: 'Año',
            color: '#262626',
            fontSize: '1.5em',
            fontFamily: 'Nunito',
            fontWeight: 'bold',
        },



        accessibility: {
            description: 'Período 2003-2019'
        },
        categories: ["2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015", "2016", "2017", "2018", "2019"
        ]
    },

    tooltip: {
        valueSuffix: '%',
        backgroundColor: '#262626',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        style: {
            color: 'white',

            fontSize: '25px',
            fontFamily: "Nunito",
        }
    },

    plotOptions: {
        series: {
            Labels: {
                enabled: false,

                connectorAllowed: false
            },

            point: {
                events: {
                    click: function() {
                        window.location.href = this.series.options.website;
                    }
                }
            },
            cursor: 'pointer'
        }
    },

    series: [{

            label: {
                enabled: true
            },
            name: 'Dentro de 20 días hábiles',
            showInLegend: false,

            data: [84.82,
                79.84,
                77.29,
                69.54,
                68.29,
                60.27,
                62.95,
                58.19,
                60.93,
                61.88,
                66.78,
                66.68,
                65.87,
                63.81,
                60.62,
                69.32,
                65.99,


            ],

            color: '#DE1738',
            accessibility: {

            }
        },
        {
            name: 'Dentro de 40 días hábiles',
            showInLegend: false,

            data: [96.57,
                95.00,
                94.29,
                91.52,
                90.65,
                86.88,
                87.15,
                85.82,
                85.71,
                88.66,
                91.05,
                91.72,
                89.69,
                91.41,
                92.55,
                97.51,
                92.43,


            ],
            dashStyle: 'ShortDashDot',
            color: '#D9CE36',
            lineWidth: 5,
        }
    ],
    chart: {
        height: 600,

        backgroundColor: 'white'
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 600

            },
            chartOptions: {
                chart: {
                    spacingLeft: 1,
                    spacingRight: 1
                },
                legend: {

                    itemStyle: {
                        color: 'white',
                        fontWeight: 'bold'
                    },
                    itemWidth: 150,
                    enabled: false,
                    showInLegend: false,
                    layout: 'horizontal',
                    align: 'left',
                    verticalAlign: 'bottom',
                    itemStyle: {
                        color: 'white',
                        fontWeight: 'bold'
                    }

                },
                xAxis: {
                    categories: ["2003",
                        "2004",
                        "2005",
                        "2006",
                        "2007",
                        "2008",
                        "2009",
                        "2010",
                        "2011",
                        "2012",
                        "2013",
                        "2014", "2015", "2016", "2017", "2018", "2019"
                    ],
                    title: ''
                },
                yAxis: {
                    visible: false
                }
            }
        }]
    }
});