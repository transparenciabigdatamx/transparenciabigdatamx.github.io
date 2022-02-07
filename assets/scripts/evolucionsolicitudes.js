Highcharts.chart('containerevolucion', {

    title: {
        margin: 50,
        align: "left",

        style: {
            fontFamily: "Arial Narrow",
            color: '#2c666eff',
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: '#000',

        },
        text: 'SOLICITUDES DE ACCESO A LA INFORMACIÓN INGRESADAS , 2003-2019'
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

    tooltip: {
        backgroundColor: '#000',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        style: {
            color: 'white',

            fontSize: '1.5em',
            fontFamily: "Arial Narrow",
        }

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
            color: '#ffff',
            fontSize: '14px',
            fontFamily: 'Arial Narrow',
            fontWeight: 'bold',



        },
        title: {

            text: 'Solicitudes',



        }

    },

    xAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#ffff",
        lineColor: "#ffff",
        minorGridLineColor: "#ffff",
        minorGridLineColor: "#ffff",
        tickColor: "#ffff",
        tickWidth: 1,
        style: {
            color: '#ffff',
            fontSize: '20px',
            fontFamily: 'Arial Narrow',
            fontWeight: 'bold',
        },

        accessibility: {
            rangeDescription: 'Range: 2003 to 2019'
        }
    },



    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2003
        }
    },

    series: [{
        name: 'Miles de solicitudes anuales',
        data: [
            22573,
            34216,
            43391,
            50757,
            78365,
            85604,
            97486,
            99713,
            96073,
            94600,
            109445,
            116078,
            121958,
            146851,
            210781,
            199162,
            242663
        ],
        color: '#000',
        exporting: {
            showTable: true
        },



    }],
    chart: {
        renderTo: 'container',

        backgroundColor: 'goldenrod',
        marginRight: 150,
        marginLeft: 150,
        marginBottom: 150,
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'left',
                    verticalAlign: 'bottom',

                }
            }
        }]
    }

});