var secondsvalue = 0,
    minutesvalue = 0;
var clockId;

/* Clock Function*/
function clockfunction() {
    var svalue = document.getElementById("seconds").innerHTML;
    if (svalue == 59) {
        secondsvalue = 0;
        minutesvalue++;
    }
    document.getElementById("seconds").innerHTML = secondsvalue;
    secondsvalue++;
    document.getElementById("minute").innerHTML = minutesvalue;
}

/* Reset button*/
function resetfunction() {
    clearInterval(clockId);
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
}

/* stop button*/
function stopfunction() {
    clearInterval(clockId);
    document.getElementById("seconds").innerHTML = secondsvalue;
    document.getElementById("minute").innerHTML = minutesvalue;
}

/* start button */
function startfunction() {
    var secondstext = document.getElementById("seconds").innerHTML;
    var minutestext = document.getElementById("minute").innerHTML;
    if (secondstext == 0) {
        secondsvalue = 0;
    }
    if (secondstext == 00 && minutestext == 00) {
        secondsvalue = 0;
        minutesvalue = 0;
    }
    clockId = setInterval(clockfunction, 1000);
}
