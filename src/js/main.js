var page = document.body;

var theme = "light";

$(function() {
    $(".tl-timenav").css({ "border": "none" });

    $("#nightmode").click(function () {

        if (theme == "light") {
            //Background color
            $(page).css("background-color", "black");
            $(".tl-text-content-container .tl-headline").css("color", "white");
            $(".tl-slider-container-mask").css("background-color", "black");
            $(".tl-timemarker-content-container").css({ "backgroundColor" : "#5e5e5e", "border" : "black"});
            $(".tl-timenav").css({ "backgroundColor" : "#2d2d2d" });
            $(".tl-timeaxis-background").css("background-color", "black");
            $(".tl-attribution").css("background-color", "black");
            $(".tl-timeaxis").css({ "backgroundColor" : "#000" });
            $(".tl-timeaxis").css({ "backgroundColor" : "#000" });
            document.getElementById("nightmode").title = "Modo Claro";
            theme = "dark";
        } else {
            //Background color
            $(page).css("background-color", "white");
            $(".tl-text-content-container .tl-headline").css("color", "black");
            $(".tl-slider-container-mask").css("background-color", "white");
            $(".tl-timemarker-content-container").css({ "backgroundColor" : "#e5e5e5" });
            $(".tl-timenav").css({ "backgroundColor" : "#f2f2f2" });
            $(".tl-timeaxis-background").css("background-color", "white");
            $(".tl-attribution").css("background-color", "white");
            $(".tl-timeaxis").css({ "backgroundColor" : "white" });
            document.getElementById("nightmode").title = "Modo Escuro";
            theme = "light";
        }
    
        console.log("Switched to " + theme + " theme.");
    });

});