var colors = Highcharts.getOptions().colors;

Highcharts.chart('containercomparacion', {
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
            color: '#2c666eff',
            fontSize: '30px',
            fontWeight: 'bold',

        },
        text: 'PROPORCIÓN ANUAL <br>DE SOLICITUDES CLASIFICADAS<br> COMO "ENTREGA"'
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

            text: 'Proporción de solicitudes'
        },


        accessibility: {
            description: 'Proporción de solicitudes'
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

        style: {
            color: '#fff',
            fontSize: '20px',
            fontFamily: 'Nova Light'
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
        showInLegend: false,

        name: 'Proporción anual de respuestas <br> clasificadas como "Entrega"',
        data: [53.82,
            52.86,
            54.55,
            54.25,
            58.54,
            55.60,
            55.34,
            55.89,
            56.09,
            60.57,
            61.06,
            60.71,
            60.14,
            61.86,
            66.81,
            73.07,
            68.23,

        ],

        color: "#000 ",
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