/*
Inner Functions and calling them
 */
var counter = function() {
    document.write("<br/>");
    document.write("outer function");

    var innercounter = function() {
        document.write("<br/>");
        document.write("inner function");
    }
    return innercounter();
}
counter();

/*
 *closures
 *value of x exists in m2 even after m1 is finished executing.
 */

var m1 = function() {
    var x = 10;

    function m2() {
        var result = x * 10;
        document.write("<br/>");
        document.write("the value of result " + result);
    }
    return m2();
}
m1();


function m3() {
    function m4() {
        var name = "Apple";
        document.write("<br/>");
        document.write("name " + name);
    }

    return m4;
}

var call = m3();
call();
