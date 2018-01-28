
let graphColors = ["#607D8B", "#9E9E9E", "#795548", "#FF5722", "#FF9800", "#FFC107", "#FFEB3B", "#CDDC39", "#8BC34A", "#4CAF50", "#009688", "#00BCD4", "#03A9F4", "#2196F3", "#3F51B5", "#673AB7", "#9C27B0", "#E91E63", "#F44336"];

let graphType = "sum";
let currentColor = 0;

function takeGraphColor() {
    currentColor += 1;
    return graphColors[currentColor % graphColors.length];
}
function returnGraphColor(color) {
    //return graphColors.push(color);
}



function setGraphType(type) {
    graphType = type;
    updateGraph();
}

function updateGraph() {
    const historyLength = 50;

    let datasets = [];
    for (let i = sent_mails.length - 1; i >= 0; i--) {
        let datapoints = [];

        for (let time = globalTick - historyLength; time < globalTick; time++) {
            if (true) { //time >= 0
                if (sent_mails[i].startTime > time) {
                    datapoints.push(null);
                } else {
                    let index = time - sent_mails[i].startTime;
                    if (graphType == "sum") {
                        datapoints.push( sent_mails[i].graphDataSum[index] );
                    } else {
                        datapoints.push( sent_mails[i].graphDataAcc[index] );
                    }
                }
            }
        }

        if (datapoints.length > 0) {
            datasets.push({
                data: datapoints,
                borderColor: sent_mails[i].graphColor,
                fill: false
            });
        } else if (sent_mails[i].graphColor) {
            returnGraphColor(sent_mails[i].graphColor);
            sent_mails[i].graphColor = null;
        }
    }

    let labels = [];
    for (let i = globalTick - historyLength; i < globalTick; i++) {
        if (true) {//i >= 0
            labels.push( "" );
        }
    }

    makeGraph(datasets, labels);
}


function makeGraph(datasets, labels) {
    let canvas = document.getElementById("chart").getContext('2d');

    //let N = dataArr[0].length;
    let N = globalTick;

    let myChart = new Chart(canvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        autoskip: true,
                        autoSkipPadding: 10
                    }
                }]
            },
            tooltips: {
                enabled: false
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            animation: false,
            events: []
        }
    });
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

graphColors = shuffle(graphColors);
