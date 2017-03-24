/* About Strings*/
var name = "xxx";
var name1 = new String("yyyy");

/* concat two String*/
document.write(name + " " + name1);

/* typeof */
document.write("<br/>");
document.write("Typeof name " + typeof(name));
document.write("<br/>");
document.write("Typeof name " + typeof(name1));

/* length of String*/
document.write("<br/>");
document.write("length of String " + name.length);

/* slice property*/

var String1 = "How are you doing?";

document.write("<br/>");
document.write("Slice the String " + String1.slice(4, 7));

document.write("<br/>");
document.write("Slice the negative String " + String1.slice(-0, -7));

/* subString */

document.write("<br/>");
document.write("Substring value is " + String1.substr(12, 2));

/* split */

document.write("<br/>");
document.write("String split " + String1.split(" "));

/* indexof*/

var mystery = new String("I am a mystery you cannot fine me , incase you find me, tel me when you find what you find ? ");
document.write("<br/>");
document.write("indexof value is " + mystery.indexOf("xxx"));

/*charAt*/
document.write("<br/>");
document.write("CharAt the String " + String1.charAt(10));
