"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
var userConfirm = confirm("Would you like to enter a number?");
if (userConfirm === true){
    var userInput = prompt("Please enter a whole number without decimals:")
}
function isOdd(number){
    var result = (number % 2);
    return (result);
}
if (isOdd(userInput)=== 1) {
    alert("That sure is an ODD number!")
}else{
    alert("That number is EVEN better than I thought it would be!")
}
alert("If I add 100 to that that gives you " + (parseInt(userInput)+100));
if (userInput>0){
    alert("What a positive number you\'ve chosen!")
}else{
    alert("Don\'t you think your number is a bit negative?")
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// var colorInput = prompt("Enter your favorite color:");
function analyzeColor(color){
    if (color.toLowerCase()==="blue"){
    return alert("Blue, like the color of the sky!");
} else if (color.toLowerCase()==="red"){
    return alert("Red is the first color in the rainbow!");
}else if (color.toLowerCase()==="orange"){
    return alert("Do you think oranges were named after the color?  Or vice versa?")
}else if (color.toLowerCase()==="yellow"){
    return alert("Isn\'t it odd that most rubber ducks are yellow, but most real ducks aren\'t?");
}else if (color.toLowerCase()==="green"){
    return alert("Everybody always mentions that the grass is green.  That\'s kinda boring.");
}else if (color.toLowerCase()==="indigo"){
    return alert("The way I always remember indigo is that it\'s purple with a little extra blue");
}else if (color.toLowerCase()==="violet"){
    return alert("The way I always remember violet is that it\'s purple with a little extra red");
}else {
    return alert("I don\'t have anything interesting to say about that color.")}
}
// var colorResult = analyzeColor(colorInput);





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
var colorResult = analyzeColor(randomColor);
console.log(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var colorInput = prompt("Enter your favorite color:");
// switch(colorInput){
//     case "blue":
//         alert("Blue, like the color of the sky!");
//         break;
//     case "red":
//         alert("Red is the first color in the rainbow!");
//         break;
//     case "orange":
//         alert("Do you think oranges were named after the color?  Or vice versa?")
//         break;
//     case "yellow":
//         alert("Isn\'t it odd that most rubber ducks are yellow, but most real ducks aren\'t?");
//         break;
//     case "green":
//         alert("Everybody always mentions that the grass is green.  That\'s kinda boring.");
//         break;
//     case "indigo":
//         alert("The way I always remember indigo is that it\'s purple with a little extra blue");
//         break;
//     case "violet":
//         alert("The way I always remember violet is that it\'s purple with a little extra red");
//         break;
//     default:
//         alert("I don\'t have anything interesting to say about that color.");
//         break;
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal (number, price) {
    if (number === 0) {
        return alert("Your total due today is $" + parseInt(price) + "!")
    } else if (number === 1){
    return alert("Your total due today is $" + parseInt(price) * 0.9 + "!")
    } else if (number === 2){
    return alert("Your total due today is $" + parseInt(price)*.75 + "!")
    } else if (number === 3){
        return alert("Your total due today is $" + parseInt(price)*.65 + "!")
    } else if (number ===4){
        return alert("Your total due today is $" + parseInt(price*.5) + "!")
    } else (number === 5)
        return alert("Your total due today is $" + 0 + "!")
    }
    // console.log (calculateTotal(2, 100))

    /**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 5);
var totalBill = prompt("Please enter the amount you were billed for today:")
function calculateTotal (number, price) {
    if (number === 0) {
        return alert("Your price before your discount today was " + price + ". Your lucky number today was " + number + "! Your total due today is $" + parseInt(price) + "!")
    } else if (number === 1){
        return alert("Your price before your discount today was " + price + ". Your lucky number today was " + number + "! Your total due today is $" + parseInt(price) * 0.9 + "!")
    } else if (number === 2){
        return alert("Your price before your discount today was " + price + ". Your lucky number today was " + number + "! Your total due today is $" + parseInt(price)*.75 + "!")
    } else if (number === 3){
        return alert("Your price before your discount today was " + price + ". Your lucky number today was " + number + "! Your total due today is $" + parseInt(price)*.65 + "!")
    } else if (number ===4){
        return alert("Your price before your discount today was " + price + ". Your lucky number today was " + number + "! Your total due today is $" + parseInt(price*.5) + "!")
    } else (number === 5)
    return alert("Your price before your discount today was " + price + ". Your lucky number today was " + number + "! Your total due today is $" + 0 + "! Congratulations!")
}
calculateTotal (luckyNumber, totalBill);