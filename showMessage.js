function setGameHeight(){
    $("#desktop").css("height", Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
}

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


window.onload = function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var message = url.searchParams.get("message");
    //message = "<p>euihfrueha</p><p>Tjohoooo</p><p>hajdaaaaa</p>";

    var opening = message.split("</p>")[0];
    opening = opening.split("<p>")[1];
    var content = message.split("</p>")[1];
    content = content.split("<p>")[1];
    var closing = message.split("</p>")[2];
    closing = closing.split("<p>")[1];
    console.log(opening);
    console.log(content);
    console.log(closing);

    //document.getElementById("message").innerHTML = a;

    window.onresize = function(event) {
        setGameHeight();
    };

    //Set game height correct
    setGameHeight();

    $("#mail_gen").show();
    PutOnTop("#mail_gen");

    $("#opening_choice").find(".text").text(opening);
    $("#content_choice").find(".text").text(content);
    $("#ending_choice").find(".text").text(closing);

};

