
const graphColor = "#34e722";

function makeGraph(canvas, data){
    let N = data.length;
    let labels = Array.apply(null, {length: N}).map(Number.call, Number);

    let myChart = new Chart(canvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                borderColor: graphColor,
                fill: false
            }]
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
            }
        }
    });
}
