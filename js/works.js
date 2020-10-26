//let center = document.getElementById("center");
//let width = window.innerWidth;

let $contact = document.getElementById("contact"),
    $about = document.getElementById("about"),
    $works = document.getElementById("works"),
    $home = document.getElementById("home"),
    $home_container = document.getElementById("homeC"),
    $works_container = document.getElementById("worksC");
    $about_container = document.getElementById("aboutC"),
    $contact_container = document.getElementById("contactC"),
    $content = document.getElementById("content"),
    bar = $("div.bar");

let tabletSize = 1024;

$( document ).ready(function() {
    center.classList.remove("fade");
    $("div#loadScreen").remove();
    center.classList.add("enlarge");
    center.classList.remove("original");
});
$(".bar h3").on("click", function(){
    $content.classList.remove("hide");
});
$("div.min").on("click", function(){
    $("div#content").toggle("hide");
    center.classList.toggle("nullH");
});

$contact.onclick = function(){
    window.sessionStorage.setItem('view', "contact");
    window.location.href = "index.html";
};
$home.onclick = function(){
    window.sessionStorage.setItem('view', "home");
    window.location.href = "index.html";
};
$about.onclick = function(){
    window.sessionStorage.setItem('view', "about");
    window.location.href = "index.html";
};
