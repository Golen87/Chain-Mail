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
});
