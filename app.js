// Problem 01
let yourname = prompt("Enter your first name");
let yourlastname = prompt("Enter your last name");
alert("Hello, " + yourname + " " + yourlastname);

// Problem 02
let model = prompt("Enter your favorite mobile phone model");
document.write("My favorite phone is: " + model);
document.write("<br>Length of string: " + model.length + "<br><br>");

// Problem 03
let word1 = "Pakistani";
document.write("String: " + word1);
document.write("<br>Index of 'n': " + word1.indexOf("n") + "<br><br>");

// Problem 04
let word2 = "Hello World";
document.write("String: " + word2);
document.write("<br>Last index of 'l': " + word2.lastIndexOf("l") + "<br><br>");

// Problem 05
let word = "Pakistani";
document.write("String: " + word);
document.write("<br>Character at index 3: " + word.charAt(3) + "<br><br>");

// Problem 06
let firstname = prompt("Enter your first name");
let lastname = prompt("Enter your last name");
let fullname = firstname + " " + lastname;
alert("Hello, " + fullname);

// Problem 07
let city = "Hyderabad";
document.write("City: " + city);
let newcity = city.replace("Hyder", "Islam");
document.write("<br>After replacement: " + newcity + "<br><br>");

// Problem 08
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newmessage = message.replace(/and/g, "&");
document.write("Message: " + message);
document.write("<br>After replacement: " + newmessage + "<br><br>");

// Problem 09
let str = "472";
document.write("Value: " + str);
document.write("<br>Type: " + typeof str);
let num1 = Number(str);
document.write("<br>Value: " + num1);
document.write("<br>Type: " + typeof num1 + "<br><br>");

// Problem 10
let userinput = prompt("Enter a word");
document.write("User input: " + userinput);
document.write("<br>Upper case: " + userinput.toUpperCase() + "<br><br>");

// Problem 11
let userinput1 = prompt("Enter a word");
let titlecase = userinput1.charAt(0).toUpperCase() + userinput1.slice(1).toLowerCase();
document.write("User input: " + userinput1);
document.write("<br>Title case: " + titlecase + "<br><br>");

// Problem 12
let num2 = 35.36;
let strnum = num2.toString().replace(".", "");
document.write("Number: " + num2);
document.write("<br>Result: " + strnum + "<br><br>");

// Problem 13
let username = prompt("Enter a username");
if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
    alert("Please enter a valid username without special characters (@, ., ,, !)");
} else {
    alert("Username is valid");
}

// Problem 14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userinput2 = prompt("Welcome to ABC Bakery. What do you want?");
let lowerinput = userinput2.toLowerCase();

if (A.includes(lowerinput)) {
    alert(userinput2 + " is available at index " + A.indexOf(lowerinput));
} else {
    alert("Sorry! " + userinput2 + " is not available");
}

// Problem 15
let password = prompt("Enter a password");
let passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

if (passwordregex.test(password)) {
    alert("Password is valid");
} else {
    alert("Password must be at least 6 characters long and contain letters and numbers");
}

// Problem 16
let university = "University of Karachi";
let chars = university.split("");

document.write("University: " + university + "<br>");
for (let i = 0; i < chars.length; i++) {
    document.write(chars[i] + "<br>");
}

// Problem 17
let userinput3 = prompt("Enter a word");
let lastchar = userinput3.charAt(userinput3.length - 1);
document.write("User input: " + userinput3);
document.write("<br>Last character: " + lastchar + "<br><br>");

// Problem 18
let text = "The quick brown fox jumps over the lazy dog";
let wordcount = text.toLowerCase().split("the").length - 1;
document.write("Text: " + text);
document.write("<br>Occurrences of 'the': " + wordcount);
