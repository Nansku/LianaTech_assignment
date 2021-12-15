

let start1 = 3000;
let start2 = 180;
let start3 = 10000;

let speed = 1000;

function set() {
    $("#value1").html(start1.toFixed(0));
    $("#value2").html(start2.toFixed(0));
    $("#value3").html(start3.toFixed(0));

    start1 += 0.125;
    start2 += 0.07;
    start3 += 0.400;
}

$(document).ready(function () {
    set();
    setInterval(function () {
        set();
    }, speed);

});

