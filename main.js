let money = 0;
let shares = 0;

function PutOnTop(windowId) {
    var newTop = $(windowId);

    // TODO: Update when new windows are implemented
    var WINDOWS = [$("#mail_gen"), $("#marketplace"), $("#stats_window")];

    // Move down windows on top
    var newTopZ = newTop.css('z-index');
    WINDOWS.forEach((window) => {
        var windowZ = window.css('z-index');
        if (windowZ >= newTopZ) {
            window.css('z-index', windowZ - 1);
        }
    });

    // Put new window on top
    newTop.css('z-index', WINDOWS.length);
};

$(document).ready(() => {
    $("#icon1").click(() => {
        $("#mail_gen").show();
        PutOnTop("#mail_gen");
    });

    $("#icon2").click(() => {
        $("#marketplace").show();
        PutOnTop("#marketplace");
    });

    $("#mail_gen").mousedown(() => {
        PutOnTop("#mail_gen");
    });

    $("#marketplace").mousedown(() => {
        PutOnTop("#marketplace");
    });

    $("#stats_window").mousedown(() => {
        PutOnTop("#stats_window");
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
