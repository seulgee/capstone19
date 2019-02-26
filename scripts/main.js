$(document).ready(function(){

    var about = $(".nav-about")
    var aboutLink = $(".nav-about__link")

    about.mouseover(function(){
        aboutLink.animate({
            left: "-=50px"
        }).text("소개")
    });

    about.mouseleave(function(){
        aboutLink.text("소")
    });
})

