var center = document.getElementById("center");
var width = window.innerWidth;

var $contact = document.getElementById("contact"),
    $about = document.getElementById("about"),
    $works = document.getElementById("works"),
    $home = document.getElementById("home"),
    $home_container = document.getElementById("homeC"),
    $works_container = document.getElementById("worksC");
    $about_container = document.getElementById("aboutC"),
    $contact_container = document.getElementById("contactC"),
    $content = document.getElementById("content"),
    bar = $("div.bar");

function loadAnimation(e){
    //LOADING ANIMATION SURPRESSED FOR NOW
    /*$(e).addClass("loadAnim").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
        $(e).removeClass("loadAnim");
    });*/
}

let tabletSize = 1024;
//let width = window.innerWidth;//$(window).width();

$( document ).ready(function() {
    $("div#loadScreen").remove();

    //if being viewed in tablet or smaller,
    //remove perspective script from usage
    if( width <= tabletSize){
        $("#persp").remove();
        $("div.load").remove();
    }

    var view = window.sessionStorage.getItem('view');
    if(view == "about"){
        $about.click();
    } else if(view == "contact"){
        $contact.click();
    } else if(view == "home"){
        $home.click();
    }
    loadAnimation("div.load");
});
$(".left.click").on("click", function(e){
    e.preventDefault();
    loadAnimation("div.load");
})
$(".bar h3").on("click", function(){
    $content.classList.remove("hide");
});
$("div.min").on("click", function(){
    $("div#content").toggle("hide");

    //for when searching in "works" and the window is minimized
    //reveal background lanes
    if(center.classList.contains("enlarge") && !center.classList.contains("nullH")){
        $lane1.classList.remove("hide");
        $lane2.classList.remove("hide");
        $content.classList.add("hide");
    } else if(center.classList.contains("enlarge nullH")){
        //and hide it otherwise
        $lane1.classList.add("hide");
        $lane2.classList.add("hide");
        $content.classList.remove("hide");
    }
    center.classList.toggle("nullH");
});

$contact.onclick = function(){
    if(center.classList.contains("enlarge")){
        center.classList.remove("enlarge");
        center.classList.add("original");

        $(".bar div.left").removeClass("margin-adjust");
        $lane1.classList.remove("hide");
        $lane2.classList.remove("hide");
    }
    if($contact_container.classList.contains("hide")){
        window.sessionStorage.setItem('view', "contact");

        $about_container.classList.add("hide");
        $home_container.classList.add("hide");
        $contact_container.classList.remove("hide"); //hide()

        $contact.classList.add("thisOn");
        $home.classList.remove("thisOn");
        $about.classList.remove("thisOn");

        loadAnimation("div.load");
        //$("#contactC").fadeIn(1000);
    }
};
$home.onclick = function(){
    
    if($home_container.classList.contains("hide")){
        window.sessionStorage.setItem('view', "home");

        $contact_container.classList.add("hide");
        $about_container.classList.add("hide");
        $home_container.classList.remove("hide"); //hide()

        $home.classList.add("thisOn");
        $about.classList.remove("thisOn");
        $contact.classList.remove("thisOn");

        loadAnimation("div.load");
        if(center.classList.contains("enlarge")){
            center.classList.remove("enlarge");
            center.classList.add("original");

            $(".bar div.left").removeClass("margin-adjust");
            $lane1.classList.remove("hide");
            $lane2.classList.remove("hide");
            //center.draggable( 'enable' );
        }
        //$("#homeC").fadeIn(1000);
    }
};
$about.onclick = function(){
    
    if($about_container.classList.contains("hide")){
        window.sessionStorage.setItem('view', "about");

        $contact_container.classList.add("hide");
        $home_container.classList.add("hide");
        $about_container.classList.remove("hide"); //hide()

        $about.classList.add("thisOn");
        $home.classList.remove("thisOn");
        $contact.classList.remove("thisOn");

        loadAnimation("div.load");
        if(center.classList.contains("enlarge")){
            center.classList.remove("enlarge");
            center.classList.add("original");

            $(".bar div.left").removeClass("margin-adjust");
            $lane1.classList.remove("hide");
            $lane2.classList.remove("hide");
            //center.draggable( 'enable' );
        }
        //$("#aboutC").fadeIn(1000);
    }
};

$works.onclick = function(){
    center.classList.remove("nullH");
    $content.classList.remove("hide");
    window.location.href = "works.html";
};

