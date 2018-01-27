$(document).ready(() => {
    $("#icon1").click(() => {
        $("#mail_gen").show();
    });

    $("#icon2").click(() => {
        $("#marketplace").show();
    });

    $("#mail_close").click(() => {
        $("#mail_gen").hide();
    });

    $("#market_close").click(() => {
        $("#marketplace").hide();
    });

    $(".popup").draggable({handle: ".window_top"});
});
