var laneWrap = $("#lane-wrap");
var lane = $(".lane"),
    $lane1 = $("#lane1"),
    $lane2 = $("#lane2");

function init(){
    $( "#lane1 div.imgHolder" ).each(function() {
        var x = 150;
        var y = Math.random() * (100 - (-20)) + (-20);
        
        $(this).css({
            "top":y+"px",
            "margin-left":x+"px"
        });
    });
    
    $( "#lane2 div.imgHolder" ).each(function() {
        //pick two random numbers between 0 and 100 for x, etc
        var x = 16;
        var y = Math.random() * (-100);
    
        $(this).css({
            "bottom":y+"px",
            "margin-left":x+"px"
        });
    });
}

init();
//lane 1
var lane1ImgHolder = $("#lane1 div.imgHolder");
    lane1Img0 = lane1ImgHolder.eq(0).clone(true),
    lane1Img1c1 = lane1ImgHolder.eq(1).clone(true),
    lane1Img1c2 = lane1ImgHolder.eq(1).clone(true),
    lane1Img2c1 = lane1ImgHolder.eq(2).clone(true);
    lane1Img2c2 = lane1ImgHolder.eq(2).clone(true);

$("#lane1 div.imgHolder").eq(0).before(lane1Img2c2);    
$("#lane1 div.imgHolder").eq(0).before(lane1Img2c1);
$("#lane1 div.imgHolder").eq(0).before(lane1Img1c1);

$lane1.append(lane1Img0);
$lane1.append(lane1Img1c2);
$lane1.append(lane1Img2c2);

var sliderStartForward = $("#lane1 div.imgHolder").eq(0).position().left;
var sliderEndForward = $("#lane1 div.imgHolder").eq(6).position().left -$lane1.width();
var sliderStartBackward = $lane1.width() - $("#lane1 div.imgHolder").eq(0).position().left;

$("#lane1 div.imgHolder").eq(0).addClass("first");

$lane1.scrollLeft( sliderStartForward );
$lane1.on('scroll', function(){
    if($lane1.scrollLeft() < 1){
        $lane1.scrollLeft(sliderStartBackward);
    }

    else if($lane1.scrollLeft() > sliderEndForward){
        $lane1.scrollLeft(sliderStartForward);
    }
});

//lane 2
var lane2ImgHolder = $("#lane2 div.imgHolder");
    lane2Img0 = lane2ImgHolder.eq(0).clone(true),
    lane2Img1c1 = lane2ImgHolder.eq(1).clone(true),
    lane2Img1c2 = lane2ImgHolder.eq(1).clone(true),
    lane2Img2c1 = lane2ImgHolder.eq(2).clone(true);
    lane2Img2c2 = lane2ImgHolder.eq(2).clone(true);
    lane2Img1 = lane2ImgHolder.eq(3).clone(true);
 
$("#lane2 div.imgHolder").eq(0).before(lane2Img1);
$("#lane2 div.imgHolder").eq(0).before(lane2Img2c1);
$("#lane2 div.imgHolder").eq(0).before(lane2Img1c1);

$lane2.append(lane2Img0);
$lane2.append(lane2Img1c2);
$lane2.append(lane2Img2c2);

var sliderStartForward2 = $("#lane2 div.imgHolder").eq(0).position().left;
var sliderEndForward2 = $("#lane2 div.imgHolder").eq(6).position().left -$lane2.width();
var sliderStartBackward2 = $lane2.width() - $("#lane2 div.imgHolder").eq(0).position().left;

$("#lane2 div.imgHolder").eq(0).addClass("first2");

$lane2.scrollLeft( sliderStartForward2 );
$lane2.on('scroll', function(){

    if(sliderEndForward2 > 1){
        $lane2.scrollLeft(sliderStartBackward2);
    }

    else if($lane2.scrollLeft() < sliderEndForward2){
        $lane2.scrollLeft(sliderStartForward2);
    }
});