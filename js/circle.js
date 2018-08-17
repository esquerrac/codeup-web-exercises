(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (radius, pi) {
            var area = (this.radius*this.radius)* Math.PI;
            return area;
        },

        logInfo: function (boolean) {
            if (boolean === true){
                console.log (Math.round(circle.getArea()));
            }else {
                console.log (circle.getArea());
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };

    // log info about the circle
    console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.getArea() + ".");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    var circle2 = {
        radius: 5,

        getArea: function (radius, pi) {
            var area = (this.radius*this.radius)* Math.PI;
            return area;
        },

        logInfo: function (boolean) {
            if (boolean === true){
                console.log (Math.round(circle2.getArea()));
            }else {
                console.log (circle2.getArea());
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };


    // log info about the circle
    console.log("Area of a circle with radius: " + circle2.radius + ", is: " + circle2.getArea() + ".");
    circle2.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle2.logInfo(true);
})();
