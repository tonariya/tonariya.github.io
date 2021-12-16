window.onload = function(){
    var worksImg = document.getElementsByClassName("worksImage");
    for(var i=0; i<worksImg.length; i++){
        worksImg[i].addEventListener("mouseenter", mouseOver);
        worksImg[i].addEventListener("mouseout", mouseOut);
        worksImg[i].addEventListener("mousemove", mouseOver);
    }
}
function mouseOver(e){
    let img = document.getElementById(this.id);
    let worksImg = document.getElementsByClassName("worksImage");
    let index = 0;
    let workTitle = [
        "_W A V E_",
        "4Walls",
        "Vinyl Records",
        "IKIHABARA",
        "Pixel Art",
        "Harder, Better, Faster, Stronger",
        "Illustrations"
    ];
    //mouse coordinates mappen in %
    let x = e.clientX/window.innerWidth*100;
    let y = e.clientY/window.innerHeight*100;

    for(let i=0; i<worksImg.length; i++){
        if(worksImg[i].id != img.id){
            worksImg[i].style.opacity = "0.6";
        } else{ index = i;}
    }

    let titleC = document.getElementById("work-title-div");
    let title = document.getElementById("work-title");
    titleC.style.visibility = "visible";
    title.innerText = workTitle[index];
    titleC.style.left = x+.5+"%";
    titleC.style.top = y-5+"%";

}
function mouseOut(){
    var img = document.getElementById(this.id);
    var worksImg = document.getElementsByClassName("worksImage");

    for(var i=0; i<worksImg.length; i++){
        if(worksImg[i].id != img.id){
            worksImg[i].style.opacity = "1";
        }
    }

    let titleC = document.getElementById("work-title-div");
    titleC.style.visibility = "hidden";
}