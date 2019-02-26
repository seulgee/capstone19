$(document).ready(function() {

    var landingTitle = $("#landing-title__left, #landing-title__right");
    var landingButton = $("#landing-button")

    landingTitle.animate({
        opacity : "1"
    }, 500);

    landingButton.delay(1800).animate({
        opacity: "1",
        top: "0px" 
    },400);

});