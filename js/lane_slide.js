var laneWrap = document.getElementById("lane-wrap");
var lane = document.getElementsByClassName("lane"),
    $lane1 = document.getElementById("lane1"),
    $lane2 = document.getElementById("lane2"),
    $lane3 = $lane2.cloneNode(true);

$lane3.id="lane3";

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
$( document ).ready(function() {
    init();
    laneOne();
    laneTwo();
    sizeCheck();
});
window.addEventListener("resize", sizeCheck);
function sizeCheck(){
    width = document.documentElement.clientWidth;

    if( width < 764){
        $lane1.remove();
        $lane2.remove();
        laneWrap.append($lane3);
        laneThree();
    } else{
        $lane3.remove();
        laneWrap.append($lane1);
        laneWrap.append($lane2);
    }
};
//lane 1
function laneOne(){
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
}


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
function laneTwo(){
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
}

//lane 3
function laneThree(){
    let lane3ImgHolder = lane1ImgHolder;
    lane3ImgHolder.push(lane2ImgHolder.children);
    console.log(lane3ImgHolder);

    let lane3Img0 = lane3ImgHolder[0].cloneNode(true),
    lane3Img1c1 = lane3ImgHolder[1].cloneNode(true),
    lane3Img1c2 = lane3ImgHolder[1].cloneNode(true),
    lane3Img2c1 = lane3ImgHolder[2].cloneNode(true),
    lane3Img2c2 = lane3ImgHolder[2].cloneNode(true),
    lane3Img3c1 = lane3ImgHolder[3].cloneNode(true),
    lane3Img4c1 = lane3ImgHolder[4].cloneNode(true),
    lane3Img4c2 = lane3ImgHolder[4].cloneNode(true),
    lane3Img5c1 = lane3ImgHolder[5].cloneNode(true),
    lane3Img5c2 = lane3ImgHolder[5].cloneNode(true);
    lane3Img1 = lane3ImgHolder[6].cloneNode(true);
 
    $lane3.insertBefore(lane3Img1, lane3ImgHolder[0]);
    $lane3.insertBefore(lane3Img2c1, lane3ImgHolder[0]);
    $lane3.insertBefore(lane3Img1c1, lane3ImgHolder[0]);
    $lane3.insertBefore(lane3Img5c2, lane3ImgHolder[3]);
    $lane3.insertBefore(lane3Img4c2, lane3ImgHolder[3]);
    $lane3.insertBefore(lane3Img4c1, lane3ImgHolder[3]);

    $lane3.appendChild(lane3Img0);
    $lane3.appendChild(lane3Img1c2);
    $lane3.appendChild(lane3Img2c2);
    $lane3.appendChild(lane3Img3c1);
    $lane3.appendChild(lane3Img4c2);
    $lane3.appendChild(lane3Img5c2);

    let sliderStartForward3 = lane3ImgHolder[0].style.left;
    let sliderEndForward3 = lane3ImgHolder[6].style.left -$lane3.offsetWidth;
    let sliderStartBackward3 = $lane3.offsetWidth - lane3ImgHolder[0].style.left;
    let sliderStartForward = lane3ImgHolder[3].style.left;
    let sliderEndForward = lane3ImgHolder[9].style.left - $lane1.offsetWidth;
    let sliderStartBackward = $lane3.offsetWidth - lane3ImgHolder[3].style.left;

    function getCssProperty(elmId, property){
        let elem = document.getElementById(elmId);
        return window.getComputedStyle(elem,null).getPropertyValue(property);
    }

    lane3ImgHolder[0].classList.add("first2");
}
//$lane2.scrollLeft( sliderStartForward2 );
/*$lane2.on('scroll', function(){

    if(sliderEndForward2 > 1){
        $lane2.scrollLeft(sliderStartBackward2);
    }

    else if($lane2.scrollLeft() < sliderEndForward2){
        $lane2.scrollLeft(sliderStartForward2);
    }
});*/