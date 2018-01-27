let money = 10000;
let shares = 0;
let mail_addresses = 10;
var current_mail = null;
var sent_mails = [];


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


const tickTime = 100;
let hour = 0;
let minute = 0;

function timeTick(){
    if(minute == 59){
        minute = 0;
        hour += 1;
    }
    else{
        minute++;
    }

    if(hour == 24){
        hour = 0;
    }

    let hourStr = hour;
    let minuteStr = minute;

    if(hour < 10){
        hourStr = "0" + hourStr;
    }
    if(minute < 10){
        minuteStr = "0" + minuteStr;
    }

    $("#hour").text(hourStr);
    $("#minute").text(minuteStr);

    tickMails();
    updateGraph();
}

$(document).ready(() => {
    $("#icon1").click(() => {
        $("#mail_gen").show();
        PutOnTop("#mail_gen");
        createChainMail();
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

    $(".buy_btn").click(function(){
        let parent = $(this).closest(".shop_item");
        let cost = parent.find(".cost").html();
        let adress_c = parent.find(".adresses").html();

        cost = parseInt(cost);
        adress_c = parseInt(adress_c);

        if(money >= cost){
            money -= cost;
            mail_addresses += adress_c;
        }

        updateStats();
    });

    //update stats on page Preload
    updateStats();

    setInterval(timeTick, tickTime);

    updateGraph();
});

function updateStats(){
    $("#people_disp").text(shares);
    $("#money_disp").text(money);
    $("#mail_disp").text(mail_addresses);

    console.log("ran");
}
