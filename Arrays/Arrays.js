/* arrays */
var days = ["mon", "tue", "wed", "thurs", "fri", "sat"];

/* push*/
document.write("<br/>");
document.write("length before push " + days.length);
document.write("<br/>");
document.write("Using push" + days.push("sun"));
document.write("<br/>");

for (var i = 0; i < days.length; i++) {
    document.write(days[i] + ",");
}

/*unshift*/
document.write("<br/>");
document.write(days.unshift("new"));
document.write("<br/>");
document.write("length after unshift " + days.length);


/* pop */

document.write("<br/>");
document.write(" length before pop" + days.length);
document.write("<br/>");
document.write(" pop" + days.pop("sun"));
document.write("<br/>");
document.write(" length after pop" + days.length);

document.write("<br/>");

for (var i = 0; i < days.length; i++) {
    document.write(days[i] + ",");
}

/* shift operation*/

document.write("<br/>");
document.write(" length before shift" + days.length);
document.write("<br/>");
document.write("shift" + days.shift("new"));
document.write("<br/>");
document.write(" length after shift" + days.length);
