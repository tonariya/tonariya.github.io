var laneWrap = document.getElementById("lane-wrap");
var lane = document.getElementsByClassName("lane"),
    $lane1 = document.getElementById("lane1"),
    $lane2 = document.getElementById("lane2");

var lane1ImgHolder = document.getElementById("lane1").getElementsByClassName("imgHolder");
var lane2ImgHolder = document.getElementById("lane2").getElementsByClassName("imgHolder");

var init = function(){
    for(var i = 0 ; i<lane1ImgHolder.length; i++) {
        let x = 150;
        let y = Math.random() * (100 - (-20)) + (-20);

        lane1ImgHolder[i].style.top = y+"px";
        lane1ImgHolder[i].style.marginLeft = x+"px";
    }
    
    for(var i = 0; i<lane2ImgHolder.length; i++){
        //pick two random numbers between 0 and 100 for x, etc
        let x = 16;
        let y = Math.random() * (-100);
    
       lane2ImgHolder[i].style.bottom = y+"px";
       lane2ImgHolder[i].style.marginLeft = x+"px";
    }
}
//init();
//lane 1
let lane1Img0 = lane1ImgHolder[0].cloneNode(true),
    lane1Img1c1 = lane1ImgHolder[1].cloneNode(true),
    lane1Img1c2 = lane1ImgHolder[1].cloneNode(true),
    lane1Img2c1 = lane1ImgHolder[2].cloneNode(true),
    lane1Img2c2 = lane1ImgHolder[2].cloneNode(true);

$lane1.insertBefore(lane1Img2c2, lane1ImgHolder[0]);
$lane1.insertBefore(lane1Img2c1, lane1ImgHolder[0]);
$lane1.insertBefore(lane1Img1c1, lane1ImgHolder[0]);

$lane1.appendChild(lane1Img0);
$lane1.appendChild(lane1Img1c2);
$lane1.appendChild(lane1Img2c2);

function getCssProperty(elmId, property){
    let elem = document.getElementById(elmId);
    return window.getComputedStyle(elem,null).getPropertyValue(property);
 }

let sliderStartForward = lane1ImgHolder[0].style.left;
let sliderEndForward = lane1ImgHolder[6].style.left - $lane1.offsetWidth;
let sliderStartBackward = $lane1.offsetWidth - lane1ImgHolder[0].style.left;

lane1ImgHolder[0].classList.add("first");

//$lane1.scrollLeft( sliderStartForward );
/*$lane1.on('scroll', function(){
    if($lane1.scrollLeft() < 1){
        $lane1.scrollLeft(sliderStartBackward);
    }

    else if($lane1.scrollLeft() > sliderEndForward){
        $lane1.scrollLeft(sliderStartForward);
    }
});*/

//lane 2
let lane2Img0 = lane2ImgHolder[0].cloneNode(true),
    lane2Img1c1 = lane2ImgHolder[1].cloneNode(true),
    lane2Img1c2 = lane2ImgHolder[1].cloneNode(true),
    lane2Img2c1 = lane2ImgHolder[2].cloneNode(true),
    lane2Img2c2 = lane2ImgHolder[2].cloneNode(true),
    lane2Img1 = lane2ImgHolder[3].cloneNode(true);
 
$lane2.insertBefore(lane2Img1, lane2ImgHolder[0]);
$lane2.insertBefore(lane2Img2c1, lane2ImgHolder[0]);
$lane2.insertBefore(lane2Img1c1, lane2ImgHolder[0]);

$lane2.appendChild(lane2Img0);
$lane2.appendChild(lane2Img1c2);
$lane2.appendChild(lane2Img2c2);

let sliderStartForward2 = lane2ImgHolder[0].style.left;
let sliderEndForward2 = lane2ImgHolder[6].style.left -$lane2.offsetWidth;
let sliderStartBackward2 = $lane2.offsetWidth - lane2ImgHolder[0].style.left;

lane2ImgHolder[0].classList.add("first2");

//$lane2.scrollLeft( sliderStartForward2 );
/*$lane2.on('scroll', function(){

    if(sliderEndForward2 > 1){
        $lane2.scrollLeft(sliderStartBackward2);
    }

    else if($lane2.scrollLeft() < sliderEndForward2){
        $lane2.scrollLeft(sliderStartForward2);
    }
});*/