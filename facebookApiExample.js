window.onload = function () {
    alert("Hello");
    var url_string = window.location.href;
    var url = new URL(url_string);
    var a = url.searchParams.get("opening");
    var b = url.searchParams.get("content");
    var c = url.searchParams.get("closing");

    a = a.replace(/%/gi, " ");
    b = b.replace(/%/gi, " ");
    c = c.replace(/%/gi, " ");

    console.log(a);
    console.log(b);
    console.log(c);

    function postToFacebook(){
        var url = "https://golen87.github.io/Chain-Mail/";
        var message = "He ho asodiasdhji";

        FB.ui({
            method: 'share',
            display: 'popup',
            quote: message,
            href: url,
          }, function(response){});
    }

    window.onload = function(){

        var shareButton = document.getElementById('shareBtn');

        if (shareButton){
            shareButton.onclick = postToFacebook;
        }else {
            alert("No button");
        }

    }

};

