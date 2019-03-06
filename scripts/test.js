$(document).ready(function(){

var softSlider = document.getElementById('soft');

noUiSlider.create(softSlider, {
    start: 10,
    snap: true,
    connect: true,
    range: {
        'min': 0,
        '10%': 10,
        'max': 80
    },
    behaviour: 'tap',
    pips: {
        mode: 'values',
        values: [20, 80],
        density: 4
    }
});

softSlider.noUiSlider.on('change', function (values, handle) {
    if (values[handle] < 20) {
        softSlider.noUiSlider.set(20);
    } else if (values[handle] > 80) {
        softSlider.noUiSlider.set(80);
    }
});



});