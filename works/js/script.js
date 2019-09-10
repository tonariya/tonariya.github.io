var $contact = $("#contact"),
    $about = $("#about"),
    $works = $("#works"),
    $home = $("#home"),
    $homeC = $("#homeC");

window.sessionStorage.setItem('view', "works");

$contact.on("click", function(){
    window.sessionStorage.setItem('view', "contact");
    window.location.href = "../index.html";
});
$about.on("click", function(){
    window.sessionStorage.setItem('view', "about");
    window.location.href = "../index.html";
});
$home.on("click", function(){
    window.sessionStorage.setItem('view', "home");
    window.location.href = "../index.html";
});