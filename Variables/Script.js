/* Variables */

/* Global variable */

var counter = 10;

function myFunction() {
    return counter;
}

document.writeln("Global variable inside myFunction " + myFunction());

function myAnotherFunction() {
    document.write("<br/>");
    document.write("Global Variable inside anotherfunction " + counter);
}

myAnotherFunction();

/* local variable*/

function mylocalfunction() {
    var local_variable = "hello";
    document.write("<br/>");
    document.write("my local variable inside function " + local_variable);
}
mylocalfunction();

function myanotherlocalfunction() {
    document.write("<br/>");
    document.write("accessing local variable" + local_variable);
}
/*
local variable outside the scope.
 */
//myanotherlocalfunction();



/*
Hoisting
*/

function myhoisting() {
    /* window object */
    document.write("<br/>");
    document.write("my counter value" + window.counter);

    /* undefined*/
    document.write("<br/>");
    document.write("my counter value" + counter);

    /* local variable*/
    var counter = 20;
    document.write("<br/>");
    document.write("my counter value changed" + counter);
}
myhoisting();


/* ES2015 */
/* let makes block scope variable */
function mynewfunction() {
    if (true) {
        //var counter = 2000; block scope(allows outside the block)
        let counter = 2000; // make is avalible only inside the block.
        document.write("<br/>");
        document.write("my counter value" + counter);
    }
    document.write("<br/>");
    document.write("my counter value again" + counter);
}
mynewfunction();
