$(document).ready(function(){
    getFirstFontSize();
    var phrase = $('#main-phrase')
    var translation = $('#translation')
    var slider = $('#slidercontainer, .slider-text')

    //page load transitions

    $('.vl').animate({
        height: "100px"
    },350);

    setTimeout(function(){
        $('#icon-audio').animate({opacity:1},300)
        setTimeout(function(){
            $('#icon-refresh').animate({opacity:1},300)
            setTimeout(function(){
                $('#icon-image').animate({opacity:1},300)
            },150)
        },150)
    },400)

    translation.delay(15).animate({
        opacity: '1'
    },500);

    phrase.delay(400).animate({
        opacity: '1'
    },500)

    slider.delay(700).animate({
        opacity: '1',
        top: '0px'
    },400)


    //nav items animation
    var about = $(".nav-about__link")
    var aboutLink1 = $(".about-letter1")
    var aboutLink2 = $(".about-letter2")

    about.mouseenter(function(){
        aboutLink1.animate({
            right: "15px"
        }, 200)
        console.log('anim works')
        aboutLink2.animate({
            opacity: 1 
        }, 200)
    })

    about.mouseleave(function(){
        aboutLink1.animate({
            right: "0px"
        }, 200)
        console.log('anim works')
        aboutLink2.animate({
            opacity: 0 
        }, 200)
    })

    var why = $(".nav-why__link")
    var whyLink1 = $(".why-letter1")
    var whyLink2 = $(".why-letter2")
    var whyLink3 = $(".why-letter3")

    why.mouseenter(function(){
        whyLink1.animate({
            right: "30px"
        }, 200)
        console.log('anim works')
        whyLink2.animate({
            right: "15px",
            opacity: 1 
        }, 200)
        whyLink3.animate({
            opacity: 1 
        }, 200)
    })

    why.mouseleave(function(){
        whyLink1.animate({
            right: "0px"
        }, 200)
        console.log('anim works')
        whyLink2.animate({
            right: "0px",
            opacity: 0
        }, 200)
        whyLink3.animate({
            opacity: 0
        }, 200)
    })

    var index = $(".nav-index__link")
    var indexLink1 = $(".index-letter1")
    var indexLink2 = $(".index-letter2")
    var indexLink3 = $(".index-letter3")
    var indexLink4 = $(".index-letter4")
    var indexLink5 = $(".index-letter5")

    index.mouseenter(function(){
        indexLink1.animate({
            right: "60px"
        }, 230)
        console.log('anim works')
        indexLink2.animate({
            right: "45px",
            opacity: 1 
        }, 230)
        indexLink3.animate({
            right: "30px",
            opacity: 1 
        }, 230)
        indexLink4.animate({
            right: "15px",
            opacity: 1 
        }, 230)
        indexLink5.animate({
            opacity: 1 
        }, 230)
    })

    index.mouseleave(function(){
        indexLink1.animate({
            right: "0px"
        }, 230)
        console.log('anim works')
        indexLink2.animate({
            right: "0px",
            opacity: 0 
        }, 230)
        indexLink3.animate({
            right: "0px",
            opacity: 0
        }, 230)
        indexLink4.animate({
            right: "0px",
            opacity: 0
        }, 230)
        indexLink5.animate({
            opacity: 0
        }, 230)
    })

    // //image icon toggle function

    // var fitties = fitty('h1');
    // function delayFunction(){
    //     fitty('h1');
    //     setTimeout(getFontSize, 50);
    // };
    // var phraseActual = phrase.find('h1')
    // var imageIcon = $('#icon-image');
    // var translationActual = translation.find('p');
    // var sliderRow = $('#sliderrow');
    // var futureTarget = $('.future-change-en');
    // var toggle = true;

    // imageIcon.on("click",function(){

    //     if (toggle) {
    //         fitties[0].unsubscribe();
    //         futureTarget.removeClass('trans');
    //         phraseActual.animate({
    //             fontSize: "40px",
    //             marginTop: "+190px"
    //         },400);
    //         setTimeout(getFontSize, 400);
    //         translationActual.animate({
    //             fontSize: "19px",
    //             marginTop: "20px"
    //         },400);
    //         sliderRow.animate({
    //             marginTop: "50px"
    //         });
    //         $('.image-1').delay(200).animate({
    //             left: "0"
    //         },700);
    //         console.log("toggle");
    //         toggle=!toggle;
    //     } else {
    //         futureTarget.removeClass('trans');
    //         phraseActual.delay(200).animate({
    //             marginTop: "0px"
    //         },400);
    //         translationActual.animate({
    //             fontSize: "25px",
    //             marginTop: "0px"
    //         },400);
    //         sliderRow.animate({
    //             marginTop: "25px"
    //         });
    //         $('.image-1').animate({
    //             left: "-100%"
    //         },700);
    //         setTimeout(delayFunction, 550);
            
    //         //getFontSize();
    //         console.log("works");
    //         toggle=!toggle;
    //     }
        
    // });

    // function getFontSize (){
    //     // const element = document.querySelector('#translationRow')
    //     // const style = getComputedStyle(element)
    //     // const fontSize = style.fontSize
    //     // console.log(fontSize)
    //     var translationActual = $('#translationRow');
    //     var fontSize = translationActual.css("fontSize");
    //     console.log(fontSize  = parseInt(fontSize) + 1 + "px")
    //     translationActual.css("fontSize", fontSize );
    // }


    




    











});