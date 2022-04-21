var colors = Highcharts.getOptions().colors;

Highcharts.chart('containercomparacion3', {
    chart: {
        height: 600,
        type: 'area',
        backgroundColor: 'white'
    },

    legend: {
        symbolWidth: 40
    },
    title: {
        margin: 50,
        align: "left",
        title: null,

        style: {
            fontFamily: "Nunito",
            color: '#262626',
            fontSize: '30px',
            fontWeight: 'bold',


        },
        text: 'PROPORCIÓN ANUAL DE “INEXISTENCIAS VERDADERAS"'
    },

    subtitle: {
        align: "left",
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
            style: {
                color: '#262626',
                fontSize: '1.5em',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
            },

            text: 'Proporción de respuestas'
        },
        accessibility: {
            description: 'Proporción de respuestas'
        }
    },

    xAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#fff",
        lineColor: '#262626',
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
                color: '#fff',
                fontSize: '20px',
                fontFamily: 'Nova Light'
            },
            text: 'Año'
        },



        accessibility: {
            description: 'Período 2003-2015'
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
            "2015",
            "2016",
            "2017",
            "2018",
            "2019"
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
            enabled: false
        },
        name: 'Proporción de "Inexistencias<br> "Verdaderas"',
        data: [5.55,
            7.04,
            8.64,
            9.62,
            9.73,
            13.46,
            11.83,
            12.63,
            12.95,
            12.68,
            13.17,
            15.51,
            16.07,
            15.27,
            19.38,
            18.28, 20.32,
        ],
        color: '#F5A58E'

    }, {
        label: {
            enabled: false
        },
        name: 'Proporción de "Inexistencias<br> "oficiales"',
        data: [2.60,
            3.31,
            4.33,
            5.56,
            4.63,
            8.66,
            7.31,
            7.22,
            6.22,
            5.64,
            5.12,
            5.58,
            5.78,
            4.70,
            6.02,
            3.72,
            4.33, ,
        ],
        color: 'black'



    }, {
        label: {
            enabled: false
        },
        name: 'Proporción de "Inexistencis<br> "parcial escondida"',
        data: [3.47,
            4.34,
            5.57,
            6.61,
            6.02,
            10.11,
            8.44,
            8.61,
            8.02,
            7.71,
            7.76,
            9.27,
            9.37,
            7.93,
            10.79,
            8.77,
            9.12,
        ],
        color: '#FF0000'



    }],

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
                    enabled: false,
                    showInLegend: false,
                    layout: 'horizontal',
                    align: 'left',
                    verticalAlign: 'bottom',
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