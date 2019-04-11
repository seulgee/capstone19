$(document).ready(function() {

    var landingTitle = $("#landing-title__left, #landing-title__right");
    var landingButton = $("#landing-button")
    var landingText = $('#intro')

    landingTitle.delay(100)
        .animate({
            opacity : "1"
        }, 500)

    landingButton.delay(2100)
        .animate({
            opacity: "1",
            top: "0px" 
        },400)
    
    landingText.delay(1600).animate({
        opacity: 1
    },500)


    landingText.delay(1000).animate({
        opacity: 1
    },500)

    $('.title-anim').on('mouseover', function(){
        landingTitle.addClass('animated')
    })

    $('.title-anim').on('mouseout', function(){
        landingTitle.removeClass('animated')
    })

});