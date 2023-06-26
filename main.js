let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let night = document.querySelector(".night");
let main = document.querySelector(".main");
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 4 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5 + "px";
    river5.style.top = value + "px";
    boat6.style.top = value + "px";
    boat6.style.left = value * 3 + "px";
    night.style.fontSize = value + "px";
    if(scrollY >= 121) {
        night.style.fontSize = 121 + "px";
        night.style.position = "fixed";
        if(scrollY >= 537){ night.style.display = "none";}else{night.style.display = "block";}}
        if(scrollY >= 139){ document.querySelector(".main").style.background = "linear-greadient(#4ea2a3,#dcd2e6;)"}else{document.querySelector(".main").style.background = "llinear-gradient(#200016,#10001f)"}
}