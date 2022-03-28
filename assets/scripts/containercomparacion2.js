var colors = Highcharts.getOptions().colors;

Highcharts.chart('containercomparacion2', {
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

        style: {
            fontFamily: "Nunito",
            color: '#2c666eff',
            fontSize: '30px',
            fontWeight: 'bold',

        },
        text: 'PROPORCIÓN ANUAL DE<br> DE “INEXISTENCIA OFICIAL"'
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
        gridLineColor: "#ffff",
        lineColor: "#ffff",
        minorGridLineColor: "#ffff",
        minorGridLineColor: "#ffff",
        tickColor: "#ffff",
        tickWidth: 1,
        lineColor: '#e1cc4f',
        lineWidth: 1,
        style: {
            color: '',
            fontSize: '20px',
            fontFamily: 'Nunito',
            fontWeight: 'bold',
        },
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
        gridLineColor: "#ffff",
        lineColor: '#262626',
        minorGridLineColor: "#ffff",
        minorGridLineColor: "#ffff",
        tickColor: "#ffff",
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
            text: 'Año'
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
        backgroundColor: '#000',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        style: {
            color: 'white',

            fontSize: '1.5em',
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
            enabled: false
        },
        name: 'Proporción de respuestas <br>clasificadas oficialmente como inexistencia',
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
            4.33,
        ],

        color: "#DE1738",
        accessibility: {

        }

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
                    itemWidth: 150
                },
                enabled: false,
                showInLegend: false,
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