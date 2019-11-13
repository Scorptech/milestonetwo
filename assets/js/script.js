
var ctx = document.getElementById('impact_bar').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2006 QV89', '2010 UJ', '2012 TC4', '2010 HP20', '2009 FG', '2015 DQ224', '2001 BA16'],
        datasets: [{
            label: '# Known Asteroids and Period Start',
           data: [2019, 2020, 2020, 2021, 2022, 2029, 2033],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(151, 187, 205, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(151, 187, 205, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
           maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }],
        },
            layout: {
            padding: {
                left: 20,
                right: 20,
                top: 0,
                bottom: 0
            }}
    }
});


var ctx = document.getElementById('impact_pie').getContext('2d');

var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['2006 QV89', '2010 UJ', '2012 TC4', '2010 HP20', '2009 FG', '2015 DQ224', '2001 BA16'],
        datasets: [{
            data: [0.0076, 0.00061, 0.0085, 0.0041, 0.00080, 0.0068, 0.00098],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(151, 187, 205, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(151, 187, 205, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                    }
            }]
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 0,
                bottom: 0
            }},
            legend: {
            position: "bottom"
            },
            title: {
            display: true,
            text: '% Asteriod Impact Possibility'
        },
        scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
        }],
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
                display: false
            }
          }]
      
        }  
    }
});


var ctx = document.getElementById('impact_line').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['2006 QV89', '2010 UJ', '2012 TC4', '2010 HP20', '2009 FG', '2015 DQ224', '2001 BA16'],
        datasets: [{
            label: '# Velocity (speed in km/s) of Asteroid',
            backgroundColor: 'rgb(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            data: [5.16, 2.84, 6.51, 7.66, 9.12, 14.59, 4.9]
        }]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
            layout: {
            padding: {
                left: 20,
                right: 20,
                top: 0,
                bottom: 0
            }}
    }
});


var ctx = document.getElementById('impact_hozbar').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['2006 QV89', '2010 UJ', '2012 TC4', '2010 HP20', '2009 FG', '2015 DQ224', '2001 BA16'],
        datasets: [{
            label: '# Asteroid Magnitude - Estimated Diameter (km)',
            data: [25.3, 26.2, 26.7, 28.2, 25.5, 29.4, 25.8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(151, 187, 205, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(151, 187, 205, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 0,
                bottom: 0
            }}
    }
});


/*
var ctx = document.getElementById('impact_scatter').getContext('2d');

var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            pointBackgroundColor: ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
            data: [
                {x: 1, y: 10},
                {x: -8, y: 7},
                {x: 5, y: 10},
                {x: 3, y: 8},
                {x: 1, y: -4},
                {x: 9, y: -2},
                {x: 9, y: 1},
                {x: -1, y: 5},
                {x: 6, y: 6}
            ]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        },
            layout: {
            padding: {
                left: 20,
                right: 20,
                top: 0,
                bottom: 0
            }}
    }
});

I did some quick investigation and found the workaround:
myLineChart.scale.xLabels = ["label1", "label2", "label3"];
myLineChart.update();



*/