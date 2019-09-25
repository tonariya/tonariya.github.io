var center = $("div#center");
var $contact = $("#contact"),
    $about = $("#about"),
    $works = $("#works"),
    $home = $("#home"),
    $homeC = $("#homeC"),
    $lane1 =$("#lane1"),
    $lane2 = $("#lane2"),
    bar = $("div.bar");

var showWorks = false;

center.draggable({
    handle: "div.bar",
    scroll: "false"
});

function loadAnimation(e){
    $(e).addClass("loadAnim").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
        $(e).removeClass("loadAnim");
    });
}

var tabletSize = 1024;
var width = $(window).width();

$( document ).ready(function() {
    $("div#loadScreen").remove();

    //if being viewed in tablet or smaller,
    //remove perspective script from usage
    if( width <= tabletSize){
        $("#persp").remove();
        $("div.load").remove();
    }

    view = window.sessionStorage.getItem('view');
    if(view == "about"){
        $homeC.addClass("hide");
        $("#aboutC").removeClass("hide");

        $about.addClass("thisOn");
        $home.removeClass("thisOn");
        $works.removeClass("thisOn");
        $contact.removeClass("thisOn");

    } else if(view == "contact"){
        $homeC.addClass("hide");
        $("#contactC").removeClass("hide");

        $contact.addClass("thisOn");
        $home.removeClass("thisOn");
        $works.removeClass("thisOn");
        $about.removeClass("thisOn");
    } else if(view == "home"){
        $homeC.removeClass("hide");

        $home.addClass("thisOn");
        $contact.removeClass("thisOn");
        $works.removeClass("thisOn");
        $about.removeClass("thisOn");
    }
    loadAnimation("div.load");
});
$(".left.click").on("click", function(e){
    e.preventDefault();
    loadAnimation("div.load");
})
$(".bar h3").on("click", function(){
    $("div#content").show();
});
$("div.min").on("click", function(){
    $("div#content").toggle("hide");

    //for when searching in "works" and the window is minimized
    //reveal background lanes
    if(center.hasClass("enlarge") && !center.hasClass("nullH")){
        $lane1.show().removeClass("hide");
        $lane2.show().removeClass("hide");
        $("div#content").addClass("hide");


        console.log("hide");
    } else if(center.hasClass("enlarge nullH")){
        //and hide it otherwise
        $lane1.hide().addClass("hide");
        $lane2.hide().addClass("hide");
        $("div#content").removeClass("hide").show();

        console.log("show");
    }
    center.toggleClass("nullH");
});

$contact.on("click", function(){
    if(center.hasClass("enlarge")){
        center.removeClass("enlarge").addClass("original");
        $(".bar div.left").removeClass("margin-adjust");
        $lane1.show().removeClass("hide");
        $lane2.show().removeClass("hide");
        center.draggable( 'enable' );
    }
    if($("#contactC").hasClass("hide")){
        window.sessionStorage.setItem('view', "contact");

        $("#aboutC").addClass("hide");
        $("#homeC").addClass("hide");
        $("#worksC").addClass("hide");
        $("#contactC").hide().removeClass("hide");

        $contact.addClass("thisOn");
        $home.removeClass("thisOn");
        $works.removeClass("thisOn");
        $about.removeClass("thisOn");

        loadAnimation("div.load");
        $("#contactC").fadeIn(1000);
    }
});
$home.on("click", function(){
    
    if($("#homeC").hasClass("hide")){
        window.sessionStorage.setItem('view', "home");
        $("#contactC").addClass("hide");
        $("#aboutC").addClass("hide");
        $("#worksC").addClass("hide");
        $("#homeC").hide().removeClass("hide");

        $home.addClass("thisOn");
        $about.removeClass("thisOn");
        $works.removeClass("thisOn");
        $contact.removeClass("thisOn");

        loadAnimation("div.load");
        if(center.hasClass("enlarge")){
            center.removeClass("enlarge").addClass("original");
            $(".bar div.left").removeClass("margin-adjust");
            $lane1.show().removeClass("hide");
            $lane2.show().removeClass("hide");
            center.draggable( 'enable' );
        }
        $("#homeC").fadeIn(1000);
    }
});
$about.on("click", function(){
    
    if($("#aboutC").hasClass("hide")){
        window.sessionStorage.setItem('view', "about");
        $("#contactC").addClass("hide");
        $("#homeC").addClass("hide");
        $("#worksC").addClass("hide");
        $("#aboutC").hide().removeClass("hide");

        $about.addClass("thisOn");
        $home.removeClass("thisOn");
        $contact.removeClass("thisOn");
        $works.removeClass("thisOn");

        loadAnimation("div.load");
        if(center.hasClass("enlarge")){
            center.removeClass("enlarge").addClass("original");
            $(".bar div.left").removeClass("margin-adjust");
            $lane1.show().removeClass("hide");
            $lane2.show().removeClass("hide");
            center.draggable( 'enable' );
        }
        $("#aboutC").fadeIn(1000);
    }
});

$works.on("click", function(){
    center.removeClass("nullH");
    $("div#content").show();
    if($("#worksC").hasClass("hide")){
        //window.sessionStorage.setItem('view', "works");
        //note: "works" is never added to sessionStorage as, by default, you are
        //always returning from WORKS pages to INDEX
        //i.e. WORKS pages aren't single page websites,thus not requiring sessionStorage

        //nvm I was wrong, turns out I really do need to store it in order to have
        //the correct highlights in the window bar lol

        $lane1.hide().addClass("hide");
        $lane2.hide().addClass("hide");

        $(".bar div.left").addClass("margin-adjust");
        
        center.draggable( 'disable' );

        $("#aboutC").addClass("hide");
        $("#homeC").addClass("hide");
        $("#contactC").addClass("hide");
        $("#worksC").hide().removeClass("hide");
    
        $works.addClass("thisOn");
        $home.removeClass("thisOn");
        $about.removeClass("thisOn");
        $contact.removeClass("thisOn");

        loadAnimation("div.load");
        center.removeClass("original fade").css({
            'left': 0,
            'top': 0
        }).addClass("enlarge");
        $("#worksC").fadeIn(1000);
    }
});

