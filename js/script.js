var center = document.getElementById("center");

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

/*center.draggable({
    handle: "div.bar",
    scroll: "false"
});*/

function loadAnimation(e){
    //LOADING ANIMATION SURPRESSED FOR NOW
    /*$(e).addClass("loadAnim").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
        $(e).removeClass("loadAnim");
    });*/
}

var tabletSize = 1024;
var width = window.innerWidth;//$(window).width();

$( document ).ready(function() {
    $("div#loadScreen").remove();

    //if being viewed in tablet or smaller,
    //remove perspective script from usage
    if( width <= tabletSize){
        $("#persp").remove();
        $("div.load").remove();
    }

    var view = window.sessionStorage.getItem('view');
    var showWorks = localStorage.getItem('works');
    if(view == "about"){
        $about.click();
    } else if(view == "contact"){
        $contact.click();
    } else if(view == "home"){
        $home.click();
    } else if(showWorks){
        $works.click();
    }
    loadAnimation("div.load");
});
$(".left.click").on("click", function(e){
    e.preventDefault();
    loadAnimation("div.load");
})
$(".bar h3").on("click", function(){
    $content.classList.remove("hide");//$("div#content").show();
});
$("div.min").on("click", function(){
    $("div#content").toggle("hide");

    //for when searching in "works" and the window is minimized
    //reveal background lanes
    if(center.classList.contains("enlarge") && !center.classList.contains("nullH")){
        $lane1.classList.remove("hide");
        $lane2.classList.remove("hide");
        $content.classList.add("hide");

        //console.log("hide");
    } else if(center.classList.contains("enlarge nullH")){
        //and hide it otherwise
        $lane1.classList.add("hide");
        $lane2.classList.add("hide");
        $content.classList.remove("hide"); //.show()

        //console.log("show");
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
        //center.draggable( 'enable' );
    }
    if($contact_container.classList.contains("hide")){
        window.sessionStorage.setItem('view', "contact");
        localStorage.setItem('works', false);

        $about_container.classList.add("hide");
        $home_container.classList.add("hide");
        $works_container.classList.add("hide");
        $contact_container.classList.remove("hide"); //hide()

        $contact.classList.add("thisOn");
        $home.classList.remove("thisOn");
        $works.classList.remove("thisOn");
        $about.classList.remove("thisOn");

        loadAnimation("div.load");
        //$("#contactC").fadeIn(1000);
    }
};
$home.onclick = function(){
    
    if($home_container.classList.contains("hide")){
        window.sessionStorage.setItem('view', "home");
        localStorage.setItem('works', false);

        $contact_container.classList.add("hide");
        $about_container.classList.add("hide");
        $works_container.classList.add("hide");
        $home_container.classList.remove("hide"); //hide()

        $home.classList.add("thisOn");
        $about.classList.remove("thisOn");
        $works.classList.remove("thisOn");
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
        localStorage.setItem('works', false);

        $contact_container.classList.add("hide");
        $home_container.classList.add("hide");
        $works_container.classList.add("hide");
        $about_container.classList.remove("hide"); //hide()

        $about.classList.add("thisOn");
        $home.classList.remove("thisOn");
        $contact.classList.remove("thisOn");
        $works.classList.remove("thisOn");

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
    $content.classList.remove("hide");//$("div#content").show();
    
    if($works_container.classList.contains("hide")){
        window.sessionStorage.setItem('view', "works");
        localStorage.setItem('works', true);
        //note: "works" is never added to sessionStorage as, by default, you are
        //always returning from WORKS pages to INDEX
        //i.e. WORKS pages aren't single page websites,thus not requiring sessionStorage

        //nvm I was wrong, turns out I really do need to store it in order to have
        //the correct highlights in the window bar lol

        $lane1.classList.add("hide");
        $lane2.classList.add("hide"); //both hide()

        $(".bar div.left").addClass("margin-adjust");
        
        //center.draggable( 'disable' );

        $about_container.classList.add("hide");
        $home_container.classList.add("hide");
        $contact_container.classList.add("hide");
        $works_container.classList.remove("hide"); //hide()
    
        $works.classList.add("thisOn");
        $home.classList.remove("thisOn");
        $about.classList.remove("thisOn");
        $contact.classList.remove("thisOn");

        loadAnimation("div.load");
        center.classList.remove("original");
        center.classList.remove("fade");
        center.style.left = "0";
        center.style.top = "0";
        center.classList.add("enlarge");

        //$("#worksC").fadeIn(1000);
    }
};

