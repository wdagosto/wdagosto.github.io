var page = document.body;

var theme = "light";

$(function() {
    $(".tl-timenav").css({
        "border": "none"
    });

    $("#nightmode").click(function () {

        if (theme == "light") {
            //Background color
            $(page).css("background-color", "black");
            $(".tl-text-content-container .tl-headline").css("color", "white");
            $(".tl-slider-container-mask").css("background-color", "black");
            $(".tl-timemarker-content-container").css({ "background-color" : "#5e5e5e", "border" : "black"});
            $(".tl-timenav").css({
                "background-color" : "#2d2d2d"
            });
            $(".tl-timeaxis").css({
                "background-color" : "#000"
            });

            theme = "dark";
        } else {
            //Background color
            $(page).css("background-color", "white");
            $(".tl-text-content-container .tl-headline").css("color", "black");
            $(".tl-slider-container-mask").css("background-color", "white");
            $(".tl-timemarker-content-container").css({
                "background-color" : "#e5e5e5"
            });
            $(".tl-timenav").css({
                "background-color" : "#f2f2f2"
            });
            $(".tl-timeaxis").css({
                "background-color" : "white"
            });

            theme = "light";
        }
    
        console.log("Switched to " + theme + " theme.");
    });

});