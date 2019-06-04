lastScrollLeft = 0;
var orient = 0;
var jump = 10; //scroll speed
var continuous = 0; //cloud auto movement

var main = $("div#mainPanel");
var sky = $("div#sky");
var clouds = $("div#clouds");
var clouds2 = $("div#clouds2");
var grass = $("div#grass");
var grass2 = $("div#grass2");
var grass3 = $("div#grass3");
var freya = $("div#freya");
var flow1 = $("div#flow1");

var width = $(window).width();
var activeLeft = false,
	activeRight = false,
	active = false;

var followx = 0,
	followy = 0,
	x = 0,
	y = 0,
	friction = 1/10,
	velx = 0.05,
	vely = 0.00455;
var lMouseX, lMouseY, moveX, moveY;

/*Wave effect bit from stack overflow*/
//NOT BEING APPLIED
//@https://stackoverflow.com/questions/29586754/how-can-i-recreate-this-wavy-image-effect

//-------------

$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
		//scroll Left
		activeLeft = true;
		activeRight = false;
		//console.log("left");
		
    }
    else {
		//scroll Right
		activeRight = true;
		activeLeft = false;
		//console.log("right");
	}
});

moveIt();

$(window).mousemove(function( event ) {
	//console.log(moveX);
	//mouse x position in %, relative to max window width
	var mouseX = (event.pageX/width)*100;
	var max = 80; //base value from which auto scroll (right) should start
	
	var min = 21; //max value until which auto scoll (left) should stop

	lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - event.clientX));
  lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - event.clientY));
	
	followx = (40 * lMouseX) / 100;
	followy = (20 * lMouseY) / 100;

	activeLeft = activeRight = false;
	
	//interval at the start of which the screen will scroll automatically to the right side
	if( mouseX>=70 ){
		activeRight = true;
		activeLeft = false;

		//increase speed the closest to the limit
		if(mouseX>=95){
			jump = 25;
		} else{
			jump = 10;
		}
	}
	//interval at the start of which the screen will scroll automatically to the left side
	else if( mouseX<=30 ){
		activeLeft = true;
		activeRight = false;

		//increase speed the closest to the limit
		if(mouseX<=15){
			jump = 25;
		} else{
			jump = 10;
		}
	} else{

		//stop all movement
		activeLeft = activeRight = false;
	}

});

function moveIt(){
	
	x += (followx - x) * friction;
	y += (followy - y) * friction;
	if(activeLeft){
		orient += jump+friction;
	}
	else if(activeRight){
		orient -= jump+friction;
	}
	moveX = x+orient;

	/*if(continuous<=0 && continous>-1000){
		continuous-=5.05;
	} else if(continuous<=-1000){
		continuous+=0.05;
	}*/
	console.log(continuous);
if(moveX<-37 && moveX>-3550){
	//Apply movement to divs
	sky.css({"-webkit-transform":"translate("+moveX/20+"px, "+y/20+"px)"});
	//clouds.css({"-webkit-transform":"translate("+(moveX/15)+"px, "+y/15+"px)"});
	//clouds2.css({"-webkit-transform":"translate("+moveX/12+"px, "+y/12+"px)"});
	grass.css({"-webkit-transform":"translate("+moveX/3.7+"px, "+y/4+"px)"});
	grass2.css({"-webkit-transform":"translate("+moveX/3+"px, "+y/3+"px)"});
	freya.css({"-webkit-transform":"translate("+moveX/3.5+"px, "+y/4+"px)"});
	flow1.css({"-webkit-transform":"translate("+moveX/3.4+"px, "+y/3.8+"px)"});
	grass3.css({"-webkit-transform":"translate("+moveX/3.5+"px, "+y/4+"px)"});

	main.css({"-webkit-transform":"translate("+moveX+"px, "+y+"px)"});
}
	clouds.css({"-webkit-transform":"translate("+continuous+"px, "+y/15+"px)"});
	clouds2.css({"-webkit-transform":"translate("+continuous/3+"px, "+y/12+"px)"});
	window.requestAnimationFrame(moveIt);
}