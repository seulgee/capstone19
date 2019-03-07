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

    imageIcon.on("click",function(){
        if (fit) {
            fit[0].unsubscribe();
            phraseActual.animate({
                fontSize: "40px",
                marginTop: "+190px"
            },300);
            translationActual.animate({
                fontSize: "20px",
                marginTop: "20px"
            },300);
            sliderRow.animate({
                marginTop: "50px"
            });
            $('.image-1').animate({
                left: "0"
            },400)
        } else {
            fit.fit();
            console.log("works");
        }
        
    })

    let items = new Array();
    items[0]="../mainPage/index-1.html"; 
    items[1]="../mainPage/index-2.html"; 
    items[2]="<src='../mainPage/index-3.html'>"; 
    items[3]="<src='../mainPage/index-4.html'>";
    items[4]="<src='../mainPage/index-5.html'>"; 
    items[5]="<src='../mainPage/index-6.html'>"; 

    var refreshIcon = $('#icon-refresh');
    refreshIcon.on("click",function(){
        window.location.assign(function(){
            for(let i = 0; i < items.length; i++){
    
                console.log(items[i]);
             
             }
             
        });
    })

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