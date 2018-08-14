// var count=1;
//
// while (count < 65536) {
//     count *= 2;
//     console.log (count);
// }

var conesStock = Math.floor(Math.random()*50)+50;
var conesSold = Math.floor(Math.random()*5)+1;

do {
    if (conesSold <= conesStock) {
        console.log(conesSold + " cones were sold.");
        conesStock -= conesSold;
    } else if (conesSold > conesStock) {
        console.log("I\'m sorry, I only have " + conesStock + " cones. I can\'t sell you " + conesSold + ", but here is " + conesStock + "!");
        conesStock =0;
    }
}while (conesStock >0);
    console.log ("I now have " + conesStock + " cones left.  I\'ve sold them all!");

    