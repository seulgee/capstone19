$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();  
    
    function isTouchDevice(){
        return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
    }
    if(isTouchDevice()===false) {
        $("[rel='tooltip']").tooltip();
    }


    var phrase = $('#main-phrase')
    var translation = $('#translation')
    var slider = $('#slidercontainer, .slider-text')

    //page load transitions

    setTimeout(function(){
        $('#icon-audio').animate({opacity:1},300)
        $('#dot-1').animate({opacity:1},300)
        setTimeout(function(){
            $('#icon-refresh').animate({opacity:1},300)
            $('#dot-2').animate({opacity:1},300)
            setTimeout(function(){
                $('#icon-image').animate({opacity:1},300)
                $('#dot-3').animate({opacity:1},300)
                setTimeout(function(){
                    $('#dot-4').animate({opacity:1},300)
                },150)
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

    //about page page load 

    var aboutText = $('.about-text')
    aboutText.delay(100).animate({
        opacity: '1'
    },700);

    //why page page load

    var arrow = $('.arrow')
    arrow.delay(100).animate({
        opacity: 1
    },700)

    var timeline = $('.slide__title')
    timeline.delay(120).animate({
        bottom: "2vh",
        opacity: 1
    },500)

    var whyText = $('.slide__text')
    whyText.delay(450).animate({
        opacity: 1
    },500)

    //nav items animation
    var about = $(".nav-about__link")
    var aboutLink1 = $(".about-letter1")
    var aboutLink2 = $(".about-letter2")

    about.mouseenter(function(){
        aboutLink1.animate({
            right: "15px"
        }, 200)
        aboutLink2.animate({
            opacity: 1 
        }, 200)
    })

    about.mouseleave(function(){
        aboutLink1.animate({
            right: "0px"
        }, 200)
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

    //mobile nav

    var y = window.matchMedia("(max-width: 896px) and (max-height: 414px)")
        var button = $('.mobile-nav')
        var nav = $('.nav-container')
        var overlayNav = $('#overlay-nav')
        var overlaySlider = $('#overlay-slider')
		myFunction(y) // Call listener function at run time
		y.addListener(myFunction) // Attach listener function on state changes

		function myFunction() {
    		if (y.matches){
    			button.show();
                nav.hide();
                overlayNav.hide();
                overlaySlider
                    .removeClass('col-sm-8')
                    .addClass('col-sm-6')

    		} else {
    			button.hide();
                nav.show();
                overlayNav.show();
    		}
    	};

        var toggle = true
        var navItem = $('.nav-item').find('a')
        var mobileNav = $('.mobile-letters')
        var navLetters = $('.letters')
        var navAbout = $('.nav-about__link')
        var navSim = $('.nav-index__link')
        var navWhy = $('.nav-why__link')
        var exit = $('#exit')

        button.on("click", function(){
            if (toggle) {
                $(this).animate({
                    right: "0px",
                    top: "0px",
                    width: "100%",
                    height: "100%",
                    borderRadius: "0",
                    opacity: 1
                });
                nav
                    .css({
                        "top": "50%",
                        "right": "50%",
                        "transform": "translate(+50%, -50%)",
                        "z-index": "17",
                        "text-align": "center"
                    })
                    .show()
                navItem.css({
                    "color": "#ffffff",
                    "text-align": "center"
                });
                navAbout.css({
                    "margin-bottom": "0"
                })
                navSim.css({
                    "margin-bottom": "0"
                })
                navWhy.css({
                    "margin-bottom": "0"
                })

                navLetters.hide();
                exit.fadeIn('fast');
                mobileNav.fadeIn('slow');
                toggle = !toggle;
            } else {
                $(this).animate({
                    right: "-50px",
                    top: "-50px",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%"
                })
                // nav.hide();
                exit.fadeOut('fast');
                mobileNav.fadeOut('fast');
                toggle = !toggle
                
            }   
        })


    




    











});