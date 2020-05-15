var laneWrap = document.getElementById("lane-wrap");
var lane = document.getElementsByClassName("lane"),
    $lane1 = document.getElementById("lane1"),
    $lane2 = document.getElementById("lane2");

var lane1ImgHolder = document.getElementById("lane1").getElementsByClassName("imgHolder");
var lane2ImgHolder = document.getElementById("lane2").getElementsByClassName("imgHolder");

function init(){
    for(var i = 0 ; i<lane1ImgHolder.length; i++) {
        var x = 150;
        var y = Math.random() * (100 - (-20)) + (-20);

        lane1ImgHolder[i].style.top = y+"px";
        lane1ImgHolder[i].style.marginLeft = x+"px";
    }
    
    for(var i = 0; i<lane2ImgHolder.length; i++){
        //pick two random numbers between 0 and 100 for x, etc
        var x = 16;
        var y = Math.random() * (-100);
    
       lane2ImgHolder[i].style.bottom = y+"px";
       lane2ImgHolder[i].style.marginLeft = x+"px";
    }
}
init();
//lane 1
var lane1Img0 = lane1ImgHolder[0].cloneNode(true),
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
    var elem = document.getElementById(elmId);
    return window.getComputedStyle(elem,null).getPropertyValue(property);
 }

var sliderStartForward = lane1ImgHolder[0].style.left;
var sliderEndForward = lane1ImgHolder[6].style.left - $lane1.offsetWidth;
var sliderStartBackward = $lane1.offsetWidth - lane1ImgHolder[0].style.left;

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
var lane2Img0 = lane2ImgHolder[0].cloneNode(true),
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

var sliderStartForward2 = lane2ImgHolder[0].style.left;
var sliderEndForward2 = lane2ImgHolder[6].style.left -$lane2.offsetWidth;
var sliderStartBackward2 = $lane2.offsetWidth - lane2ImgHolder[0].style.left;

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