window.onload = function () {
    alert("Hello");
    var url_string = window.location.href;
    var url = new URL(url_string);
    var a = url.searchParams.get("message");

    document.getElementById("message").innerHTML = a;

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

