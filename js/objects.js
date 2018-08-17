(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {
        firstName: "Chris",
        lastName: "Esquerra",
    };


console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        console.log("Hello " + this.firstName + " " + this.lastName + "!")
    };
    person.sayHello();
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function shopperDiscount (array){
        for(var i=0; i<array.length; i++){
            if (array[i].amount >200){
                var discountInfo = array[i].amount*.12;
                var finalDiscount = array[i].amount - discountInfo;
                console.log(array[i].name+","+" Your Discount is $"+discountInfo.toFixed(2)+" off your total of $"+array[i].amount.toFixed(2)+" so your total due today is: $" + finalDiscount.toFixed(2)+ "!");
            }else{
                console.log(array[i].name+","+ " You did not qualify for an additional discount today.");
            }
        }
    }
    console.log(shopperDiscount(shoppers));





    // var shopper1=[];
    // var shopper2=[];
    // var shopper3=[];
    // function splitShoppers (array){
    //     shopper1.push(array[0]);
    //     shopper2.push(array.indexOf(1));
    //     shopper3.push(array.indexOf(2));
    //     }
    //     splitShoppers(shoppers);
    //     console.log(shopper1);
    //     console.log(shopper2);
    //     console.log(shopper3);




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {title: "How to Break Code and Confuse People",
        authorFirstName: "Probably",
        authorLastName: "Me"},
        {title: "Sure, we\'ve had Summer, but what about Second Summer?",
        authorFirstName: "San",
        authorLastName: "Antonio"},
        {title: "Every Bad Thing You\'ve Ever Done: A Retrospective",
        authorFirstName: "My",
        authorLastName: "Brain"},
        {title: "Everybody Else Knows What\'s Going On and I\'m Just Standing Here",
        authorFirstName: "General",
        authorLastName: "Population"},
        {title: "Listening to Violins Makes Me Fancy",
        authorFirstName: "Some",
        authorLastName: "Jerk"}

    ];
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function (books, index){
            return console.log("Book #" + (index+1) + "\nTitle: " +
                books.title + "\nAuthor: " + books.authorFirstName + " " +
                books.authorLastName);
    });
    // function bookInfo (array){
    //     for (var i=0; i<array.length; i++){
    //     return console.log("Book #" + array.[i]+ "\nTitle: " +
    //     array[i].title + "\nAuthor: " + array[i].authorFirstName + " " +
    //     array[i].authorLastName);
    //     }
    // }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
