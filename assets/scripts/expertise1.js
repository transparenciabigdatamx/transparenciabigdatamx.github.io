var colors = Highcharts.getOptions().colors;

Highcharts.chart('expertise1', {
    chart: {
        type: 'spline',
        backgroundColor: '#000'
    },

    legend: {
        symbolWidth: 40
    },

    title: {
        margin: 50,
        align: "left",

        style: {
            fontFamily: "Arial Narrow",
            color: '#fff',
            fontSize: '20px',
            fontWeight: 'bold',

        },
        text: 'PUNTAJE PROMEDIO ÍNDICE DE EXPERIENCIA'
    },

    subtitle: {
        align: "left",
        margin: 50,
        verticalAlign: 'bottom',


        style: {
            color: '#17503d',
            fontSize: '13px',
            fontFamily: 'Arial Narrow',
        },
        text: 'Fuente: Elaboración propia con base en datos abiertos del INAI. Los datos que se muestran únicamente consideran solicitudes de información dirigidas a dependencias de la administración pública federal. Para el análisis se excluyeron solicitudes ingresadas desde fuera de México.'

    },


    yAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#CEC6B9",
        lineColor: "#CEC6B9",
        minorGridLineColor: "#CEC6B9",
        minorGridLineColor: "#BDC3C7",
        tickColor: "#0B5345",
        tickWidth: 1,
        style: {
            color: '#7c7c7cff',
            fontSize: '14px',
            fontFamily: 'Arial Narrow',
            fontWeight: 'bold',
            lineColor: '#fff',
            lineWidth: 1,


        },
        title: {

            text: 'Puntaje promedio',

        }

    },

    xAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#CEC6B9",
        lineColor: "#CEC6B9",
        minorGridLineColor: "#CEC6B9",
        minorGridLineColor: "#BDC3C7",
        tickColor: "#0B5345",
        tickWidth: 1,
        style: {
            color: '#7c7c7cff',
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
            fontFamily: "Arial Narrow",
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
        name: 'Puntaje promedio ',
        data: [0.22,
            0.22,
            0.21,
            0.22,
            0.22,
            0.24,
            0.22,
            0.24,
            0.26,
            0.27,
            0.33,
            0.29,
            0.28,
            0.28,
            0.31,
            0.29,
            0.29,

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
                    itemWidth: 150
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
                        "2014", "2015"
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