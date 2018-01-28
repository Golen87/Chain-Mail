let money = 10;
let shares = 0;
let mail_addresses = 50;
var current_mail = null;
var sent_mails = [];


function PutOnTop(windowId) {
    var newTop = $(windowId);

    // TODO: Update when new windows are implemented
    var WINDOWS = [$("#mail_gen"), $("#marketplace"), $("#stats_window"), $("#bank_window")];

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
let globalTick = 0;
let hour = 0;
let minute = 0;

function timeTick(){
    if(minute === 59){
        minute = 0;
        hour += 1;
    }
    else{
        minute++;
    }

    if(hour === 24){
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

    if (minute % 10 === 0) {
        globalTick += 1;

        tickMails();
        updateGraph();
        updateStats();
    }
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

    $("#icon3").click(() => {
        $("#bank_window").show();
        PutOnTop("#bank_window");
    });

    $("#icon4").click(() => {
        $("#stats_window").show();
        PutOnTop("#stats_window");
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

    $("#bank_window").mousedown(() => {
        PutOnTop("#bank_window");
    });

    $(".window_close").click(function(){
        $(this).closest(".window").hide()
    });

    $(".window").draggable({handle: ".window_top"});

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

    $("#accept_all").click(function(){
        acceptAllTrans();
    });

    function postToFacebook(){
        var url = "https://golen87.github.io/Chain-Mail/facebookApiExample.html?message=";
        if(current_mail) {
            current_mail.finish();

            var message = current_mail.message.replace(/<p>/gi, "");
            message = message.replace(/<.+p>/gi, "");


            console.log(message);
            FB.ui({
                method: 'share',
                display: 'popup',
                quote: message,
                href: url + current_mail.message,
            }, function (response) {
            });
        }
    }

    var shareButton = document.getElementById('shareButton');

    if (shareButton){
        shareButton.onclick = postToFacebook;
    }else {
        alert("No button");
    }



    window.onresize = function(event) {
        setGameHeight();
    };

    //Set game height correct
    setGameHeight();

    //update stats on page Preload
    updateStats();
    updateGraph();
    updateBankAlert();

    //Start clock
    setInterval(timeTick, tickTime);
});

function setGameHeight(){
    $("#desktop").css("height", Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
}

function updateStats(){
    $("#people_disp").text(shares);
    $("#money_disp").text(money);
    $("#mail_disp").text(mail_addresses);
    $("#mail_receivers").text(mail_addresses);
}

function addTransAction(amount){
    let trans_list = $("#bank_list");
    let name = Name(); //Random name

    let newObj = $('<div class="xp_field transaction"><span class="sent_amount">'+amount+'</span> $ from '+name+'<div class="bank_btn button"><div class="inner">Accept</div></div></div>');

    newObj.click(function(){
        let trans = $(this).closest(".transaction");
        acceptTransaction(trans);
    });

    newObj.appendTo(trans_list);
    updateBankAlert();
}

function updateBankAlert(){
    let alert = $("#bank_alert");

    let trans_c = $("#bank_list").children(".transaction").length;

    alert.text(trans_c);

    if(trans_c <= 0){
        alert.hide();
    }
    else{
        alert.show();
    }
}

function acceptTransaction(transaction){
    let amount = transaction.children('.sent_amount').text();

    money += parseInt(amount);

    transaction.remove();
    updateStats();
    updateBankAlert();
}

function acceptAllTrans(){
    $(".transaction").each(function(){
        acceptTransaction($(this));
    });
}
