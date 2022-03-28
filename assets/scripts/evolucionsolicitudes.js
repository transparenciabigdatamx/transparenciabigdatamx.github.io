Highcharts.chart('containerevolucion', {

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
        text: 'SOLICITUDES DE ACCESO A <br>LA INFORMACIÓN INGRESADAS,2003-2019'
    },

    subtitle: {
        align: "left",
        margin: 50,
        marginLeft: 100,
        marginRight: 200,
        verticalAlign: 'bottom',



        style: {
            color: '#262626',
            fontSize: '15px',
            fontFamily: 'Nunito',
            verticalAlign: 'bottom',

        },
        text: '           <br>Fuente:<br> Los datos que se muestran en la gráfica se calcularon considerando únicamente  solicitudes de acceso a la información publica dirigidas a dependencias de la Administración Pública Federal (se excluye cualquier otro Sujeto obligado distinto a los de la Administración Pública Federal). Para el análisis se excluyeron solicitudes ingresadas desde fuera de México.Tampoco se consideran solicitudes de Datos Personales'

    },

    tooltip: {
        backgroundColor: '#88524D',
        opacity: 0.8,
        borderColor: '#611111',
        borderRadius: 10,
        borderWidth: 3,
        style: {
            color: 'white',

            fontSize: '25px',
            fontFamily: "Nunito",
        }

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
            },

            text: 'Cantidad de Solicitudes'
        }


    },

    xAxis: {

        gridLineDashStyle: "Dot",
        gridLineColor: "#ffff",
        lineColor: '#262626',

        minorGridLineColor: "# ffff ",
        minorGridLineColor: "#ffff",
        tickColor: "#ffff",
        tickWidth: 1,
        fontSize: '60 px',
        labels: {
            style: {
                color: '#262626',
                fontSize: '1.5em',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
            },
        },

        accessibility: {
            rangeDescription: 'Range: 2003 to 2019'
        }
    },



    plotOptions: {
        series: {

            lineWidth: 10,


            Labels: {
                enabled: false,

                connectorAllowed: false
            },
            pointStart: 2003,

        }
    },

    series: [{
        label: {
            enabled: false
        },
        lineWidth: 10,
        showInLegend: false,
        name: 'Solicitudes anuales',
        data: [
            22339,
            33887,
            43008,
            50286,
            77816,
            85230,
            97486,
            99713,
            96073,
            94600,
            109445,
            116078,
            121958,
            135501,
            184273,
            170963,
            214273
        ],
        lineWidth: 7,
        color: '#DE1738',

        exporting: {
            showTable: true
        },




    }],
    chart: {
        height: 600,
        renderTo: 'container',

        backgroundColor: 'white',
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
                    itemStyle: {
                        color: 'white',
                        fontWeight: 'bold'
                    },
                    enabled: false,
                    showInLegend: false,
                    layout: 'horizontal',
                    align: 'left',
                    verticalAlign: 'bottom',
                    itemStyle: {
                        color: 'white',
                        fontWeight: 'bold'
                    }


                }
            }
        }]
    }

});