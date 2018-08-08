"use strict";

console.log("Hello from External JS!");

alert("Welcome to my Website!");

var input = prompt ("What is your favorite color?");
alert("Great! " + input + " is my favorite color too!  Twinsies!");

var movieName = prompt("What's the name of a movie you\'d like to see?");
var movieDays = prompt("How many days would you like to rent this movie for?");
var price = 3;
alert("Okay, I\'ll rent " +movieName+ " to you for " +movieDays+ " days." + " I\'m gonna need $" +price*movieDays+ " to set that up for you.");