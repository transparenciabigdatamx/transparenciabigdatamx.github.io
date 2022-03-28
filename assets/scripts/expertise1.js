var colors = Highcharts.getOptions().colors;

Highcharts.chart('expertise1', {
    chart: {
        height: 600,
        type: 'line',
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
            color: '#262626',
            fontSize: '30px',
            fontWeight: 'bold',

        },
        text: 'PUNTAJE PROMEDIO "EXPERTISE"'
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
        text: 'Fuente: Los datos que se muestran en la gráfica se calcularon considerando únicamente solicitudes de acceso a la información publica dirigidas a dependencias de la Administración Pública Federal(se excluye cualquier otro Sujeto obligado distinto a los de la Administración Pública Federal).Para el análisis se excluyeron solicitudes ingresadas desde fuera de México.Tampoco se consideran solicitudes de Datos Personales '

    },


    yAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#262626",
        lineColor: "#ffff",
        minorGridLineColor: "#ffff",
        minorGridLineColor: "#ffff",
        tickColor: "#ffff",
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
                lineColor: '#fff',
                lineWidth: 1,
            },

            text: 'Puntaje promedio',

        }

    },

    xAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#ffff",
        lineColor: "#262626",
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
            style: {
                color: 'white',
                fontSize: '20px',
                fontFamily: 'Nova Light'
            },
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
            "2015",
            "2016",
            "2017",
            "2018",
            "2019"
        ]
    },

    tooltip: {
        valueSuffix: '%',
        backgroundColor: '#daa520',
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
        name: 'Puntaje promedio ',
        showInLegend: false,
        data: [-0.06, -0.05, -0.05, -0.04, -0.04, -0.02, -0.03, -0.01,
            0.00, -0.01,
            0.04,
            0.01,
            0.01,
            0.00,
            0.02,
            0.02,
            0.01,

        ],

        color: 'goldenrod',
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
                    itemWidth: 150,
                    enabled: false,
                    showInLegend: false,
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
                        "2014", "2015", "2016",
                        "2017", "2018", "2019"
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