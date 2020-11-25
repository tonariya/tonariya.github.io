$( document ).ready(function() {

    var $content = document.getElementById("content");
    var $img = document.getElementsByTagName("img");
    var $dark_bg;

    var fullscreen = false;

    document.addEventListener('click', function(e) {
        for(var i = 0; i<$img.length; i++){
            if(e.target === $img[i] && !fullscreen){
                $dark_bg = document.createElement("div");
                $pic_in_view = document.createElement("img");
                $pic_in_view = e.target.cloneNode(true);
                $pic_in_view.setAttribute("style",
                "position:relative; width: auto; height: 50vh; margin:auto; display:block; z-index:120; top:18vh; cursor:default;");
                $dark_bg.setAttribute("style"
, "position:absolute; z-index:100; width:100%; height:100%; top:0; left:0; background-color:rgba(0,0,0,.8); cursor:zoom-out;");
                $dark_bg.setAttribute("id", "darkbg");

                $dark_bg.appendChild($pic_in_view);
                $content.prepend($dark_bg);
                fullscreen = true;
            }
        }

        if(e.target.tagName.toLowerCase() == "div" && fullscreen){
            console.log("remove");
            document.getElementById("darkbg").remove();
            fullscreen = false;
        }
    });
});