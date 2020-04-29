//array of divs
var workPrev1 = $("#lane1 div.imgHolder");
var workPrev2 = $("#lane2 div.imgHolder");
//var workList = $("#worksC div.imgHolder");

var width = $(window).width();

var followx = 0,
	followy = 0,
	x = 0,
	y = 0,
	friction = 1/40,
	velx = 0.05,
    vely = 0.00455,
    imgX,
    imgY;
var lMouseX, lMouseY, moveX, moveY;

moveIt();

$(window).mousemove(function( event ) {
    //lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - event.clientX));
    lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - event.clientY));
	
	//followx = (40 * lMouseX) / 100;
	followy = (20 * lMouseY) / 100;

});

function moveIt(){
	//x += (followx - x) * friction;
    y += (followy - y) * friction;

    if(!$lane1.hasClass("hide") || !$lane2.hasClass("hide")){
        //lane 1
        /*workPrev1.each(function() {
            imgX = $(this).offset().left * 0.15;
            imgY = $(this).offset().top * 0.0045;
            $(this).css({"-webkit-transform":"translateY("+y*imgY+"px)"});
        });*/
        $lane1.css({"-webkit-transform":"translateY("+y+"px)"});

        //lane 2
        /*workPrev2.each(function() {
            imgX = $(this).offset().left * 0.0013;
            imgY = $(this).offset().top * 0.0025;
            $(this).css({"-webkit-transform":"translateY("+y*imgY+"px)"});
        });*/
        $lane2.css({"-webkit-transform":"translateY("+y+"px)"});
    }

    //work list preview
    /*if(!$("#worksC").hasClass("hide")){
        workList.each(function() {
            imgX = $(this).offset().left * 0.0012;
            imgY = $(this).offset().top * 0.0024;
            $(this).css({"-webkit-transform":"translate("+x*imgX+"px, "+y*imgY+"px)"});
        });
    }*/
    
    window.requestAnimationFrame(moveIt);
}