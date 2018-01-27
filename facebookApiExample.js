window.onload = function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var a = url.searchParams.get("message");

    document.getElementById("message").innerHTML = a;

};

