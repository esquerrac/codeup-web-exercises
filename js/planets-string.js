(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);
    var planetsArray =  planetsString.split("|");
    console.log(planetsArray);


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsBreak = planetsArray.join("<br>");
    console.log(planetsBreak);
    planetsArray.shift();
    planetsArray.pop();
    planetsArray.unshift("<ul><li>Mercury");
    planetsArray.push("Neptune</li></ul>");
    var planetsList = planetsArray.join("</li><li>");
    console.log(planetsList);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

})();
