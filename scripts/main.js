$(document).ready(function(){

    var about = $(".nav-about")
    var aboutLink = $(".nav-about__link")
    var why = $(".nav-why")
    var whyLink = $(".nav-why__link")
    var phrase = $('#main-phrase')
    var translation = $('#translation')
    var slider = $('#slidercontainer, .slider-text')

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

    // var items = new Array();
    // items[0]="<a href='../mainPage/index-1.html'></a>"; 
    // items[1]="<a href='../mainPage/index-2.html></a>"; 
    // items[2]="<a href='../mainPage/index-3.html'></a>"; 
    // items[3]="<a href='../mainPage/index-4.html'></a>";
    // items[4]="<a href='../mainPage/index-5.html'></a>"; 
    // items[5]="<a href='../mainPage/index-6.html'></a>"; 

    // window.location.reload(function(){

    // });

    // Draggable.create("#slider-thumb", {
    //     type:"y",
    //     bounds: document.getElementById("slidercontainer"),
    //     throwProps:true,
    //     onClick:function() {
    //         console.log("clicked");
    //     },
    //     onDragEnd:function() {
    //         console.log("drag ended");
    //     }
    // });

    // var gridWidth = 100;
    // Draggable.create("#slider-thumb", {
    //     type:"x",
    //     edgeResistance:0.65,
    //     bounds:"#slider",
    //     overshootTolerance: 0,
    //     throwProps:true,
    //     snap: {
    //         x: function(endValue) {
    //             return Math.round(endValue / gridWidth) * gridWidth;
    //         }
    //     }
    // });

    











});