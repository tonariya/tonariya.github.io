//array of divs
var width = window.innerWidth;//$(window).width();

let followx = 0,
	followy = 0,
	x = 0,
	y = 0,
	friction = 1/40,
	velx = 0.05,
    vely = 0.00455,
    imgX,
    imgY;
let lMouseX, lMouseY, moveX, moveY;

moveIt();

$(window).mousemove(function( event ) {
    //lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - event.clientX));
    lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - event.clientY));
	
	//followx = (40 * lMouseX) / 100;
	followy = (20 * lMouseY) / 100;

});

function moveIt(){

    if(!$lane1.classList.contains("hide") || !$lane2.classList.contains("hide")){
        y += (followy - y) * friction;
        lane1.style.transform = "translateY("+y+"px)";
        lane2.style.transform = "translateY("+y+"px)";
    }
    window.requestAnimationFrame(moveIt);
}