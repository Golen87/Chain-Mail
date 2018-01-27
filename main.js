let money = 0;
let shares = 0;

$(document).ready(() => {
    $("#icon1").click(() => {
        $("#mail_gen").show();
        $("#mail_gen").css('z-index', 2);
        $("#marketplace").css('z-index', 1);
    });

    $("#icon2").click(() => {
        $("#marketplace").show();
        $("#mail_gen").css('z-index', 1);
        $("#marketplace").css('z-index', 2);
    });

    $("#mail_gen").mousedown(() => {
        $("#mail_gen").css('z-index', 2);
        $("#marketplace").css('z-index', 1);
    });

    $("#marketplace").mousedown(() => {
        $("#mail_gen").css('z-index', 1);
        $("#marketplace").css('z-index', 2);
    });

    $("#mail_close").click(() => {
        $("#mail_gen").hide();
    });

    $("#market_close").click(() => {
        $("#marketplace").hide();
    });

    $(".popup").draggable({handle: ".window_top"});

    let ctx = document.getElementById("chart").getContext('2d');

    let data = makeSpread(20, 1, 10);
    data[0] = 0;
    let N = data.length;
    let labels = Array.apply(null, {length: N}).map(Number.call, Number)
    console.log(labels);

    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
            data: data,
            borderColor: "#3e95cd",
            fill: false
          }
        ]
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


});
