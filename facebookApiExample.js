window.onload = function () {
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
};

