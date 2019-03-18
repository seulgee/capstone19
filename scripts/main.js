$(document).ready(function(){

    var about = $(".nav-about")
    var aboutLink = $(".nav-about__link")
    var why = $(".nav-why")
    var whyLink = $(".nav-why__link")
    var phrase = $('#main-phrase')
    var translation = $('#translation')
    var slider = $('#slidercontainer, .slider-text')

    $('.vl').animate({
        height: "100px"
    },350)

    $('#icon-audio').animate({opacity:1},300).delay(1400);
    $('#icon-refresh').animate({opacity:1},300).delay(1600);
    $('#icon-image').animate({opacity:1},300).delay(1800);

    translation.animate({
        opacity: '1'
    },500);

    phrase.delay(400).animate({
        opacity: '1'
    },500)

    slider.delay(700).animate({
        opacity: '1',
        top: '0px'
    },400)

    about.mouseover(function(){
        TweenLite.to(aboutLink, 2, {text:"소개", ease:Power2.easeIn});
    });

    about.mouseleave(function(){
        TweenLite.to(aboutLink, 2, {text:"소", ease:Power2.easeIn});
    });

    why.mouseover(function(){
        TweenLite.to(whyLink, 2, {text:"중요성", ease:Power2.easeIn});
    });

    why.mouseleave(function(){
        TweenLite.to(whyLink, 2, {text:"중", ease:Power2.easeIn});
    });

    var fit = fitty('h1');
    var phraseActual = phrase.find('h1')
    var imageIcon = $('#icon-image');
    var translationActual = translation.find('p');
    var sliderRow = $('#sliderrow');

    var  toggle = true;
    imageIcon.on("click",function(){
        if (toggle) {
            fit[0].unsubscribe();
            phraseActual.animate({
                fontSize: "40px",
                marginTop: "+190px"
            },400);
            translationActual.animate({
                fontSize: ".8em",
                marginTop: "20px"
            },400);
            sliderRow.animate({
                marginTop: "50px"
            });
            $('.image-1').delay(200).animate({
                left: "0"
            },700);
            console.log("toggle");
            toggle=!toggle;
        } else {
            phraseActual.delay(200).animate({
                marginTop: "0px"
            },400);
            translationActual.animate({
                fontSize: "1em",
                marginTop: "0px"
            },400);
            sliderRow.animate({
                marginTop: "25px"
            });
            $('.image-1').animate({
                left: "-100%"
            },700);
            $(function(){
                fitty('h1');
            },500).delay(200);
            console.log("works");
            toggle=!toggle;
        }
        
    })



    











});