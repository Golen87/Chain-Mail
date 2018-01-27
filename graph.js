
const graphColors = ["#607D8B", "#9E9E9E", "#795548", "#FF5722", "#FF9800", "#FFC107", "#FFEB3B", "#CDDC39", "#8BC34A", "#4CAF50", "#009688", "#00BCD4", "#03A9F4", "#2196F3", "#3F51B5", "#673AB7", "#9C27B0", "#E91E63", "#F44336"];

function takeGraphColor() { return graphColors.pop(); }
function returnGraphColor(color) { return graphColors.push(color); }




function updateGraph() {
    let ctx = document.getElementById("chart").getContext('2d');

    var datasets = [];
    for (var i = sent_mails.length - 1; i >= 0; i--) {
        datasets.push({
            data: sent_mails[i].graphData,
            borderColor: sent_mails[i].graphColor,
            fill: false
        });
    }
    makeGraph(ctx, datasets);
}


function makeGraph(canvas, datasets) {
    //let N = dataArr[0].length;
    let N = globalTick/10;

    let labels = Array.apply(null, {length: N}).map(Number.call, Number);

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
                        max: N,
                        min: 0,
                        stepSize: 1
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
            animation: false
        }
    });
}
