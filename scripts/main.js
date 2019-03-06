$(document).ready(function(){

    var about = $(".nav-about")
    var aboutLink = $(".nav-about__link")
    var why = $(".nav-why")
    var whyLink =$(".nav-why__link")

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