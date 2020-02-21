var nightmode = document.getElementById("nightmode");

var page = document.getElementsByTagName("body")[0];

var timelineBox = document.getElementById("timeline-embed");

nightmode.addEventListener(onclick, function nightSwitch() {

    page.style.backgroundColor = "#2d2d2d";
    timelineBox.style.backgroundColor = "#2d2d2d";

});