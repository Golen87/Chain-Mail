let money = 10;
let shares = 0;
let mail_addresses = 50;
let current_mail = null;
let sent_mails = [];

let trans_count = 0;
let trans_buffer = 0;


function PutOnTop(windowId) {
    var newTop = $(windowId);

    // TODO: Update when new windows are implemented
    var WINDOWS = [$("#mail_gen"), $("#marketplace"), $("#stats_window"), $("#bank_window"), $("#help_window")];

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

function tweetReady() {
    $('#tweetBtn iframe').remove();
    // Generate new markup
    current_mail.finish();
    var message = current_mail.getPart("opening").text;
    url = encodeURI("https://golen87.github.io/Chain-Mail/showMessage.html?message=" + current_mail.message);

    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/tweet')
        .attr('data-url', url)
        .attr('data-hashtags', "ChainMailGenerator")
        .attr('data-text', message);
    $('#tweetBtn').append(tweetBtn);
    twttr.widgets.load();

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
        tweetReady();
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

    $("#help_icon").click(() => {
        $("#help_window").show();
        PutOnTop("#help_window");
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

    $("#help_window").mousedown(() => {
        PutOnTop("#help_window");
    });

    $(".window_close").click(function(){
        $(this).closest(".window").hide()
    });

    $(".window").draggable({handle: ".window_top"});

    $("#accept_all").click(function(){
        acceptAllTrans();
    });


    window.onresize = function(event) {
        setGameHeight();
    };

    //Set game height correct
    setGameHeight();

    //update stats on page Preload
    updateStats();
    updateGraph();

    //Start clock
    setInterval(timeTick, tickTime);

    for (var i = 0; i < 0; i++) {
        createChainMail();
        sendMail();
    }
});

function setGameHeight(){
    $("#desktop").css("height", Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
}

function updateStat(divId, newText) {
    if ($(divId).text() != newText) {
        $(divId).text(newText);

        $(divId).css({
            opacity: 0.0
        });
        $(divId).stop().animate({
            opacity: 1.0
        }, 200, "swing");
    }
}

function updateStats(){
    updateStat("#people_disp", addDots(shares));
    updateStat("#money_disp", addDots(money));
    updateStat("#mail_disp", addDots(mail_addresses));
    updateStat("#mail_receivers", addDots(mail_addresses));
    updateBankAlert();
    updateShop();
}

function addTransAction(amount){
    trans_count += 1;
    if (trans_count > 100) {
        trans_buffer += amount;
        return;
    }

    let trans_list = $("#bank_list");
    let name = Name(); //Random name

    let newObj = $('<div class="xp_field transaction"><span class="sent_amount">'+addDots(amount)+'</span> $ from '+name+'<div class="bank_btn button"><div class="inner">Accept</div></div></div>');

    newObj.appendTo(trans_list);
    newObj.find('.bank_btn').click(function(){
        let trans = $(this).closest(".transaction");
        acceptTransaction(trans);
        updateStats();
    });
}

function updateBankAlert(){
    let alert = $("#bank_alert");

    alert.text(addDots(trans_count));

    if(trans_count <= 0){
        alert.hide();
    }
    else{
        alert.show();
    }
}

function acceptTransaction(transaction){
    let amount = removeDots(transaction.children('.sent_amount').text());
    trans_count -= 1;

    money += parseInt(amount);

    transaction.remove();
}

function acceptAllTrans(){
    $(".transaction").each(function(){
        acceptTransaction($(this));
    });

    trans_count = 0;
    money += trans_buffer;
    trans_buffer = 0;

    updateStats();
}
