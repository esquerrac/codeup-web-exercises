function showMultiplicationTable(number){
    console.log(number*1);
    console.log(number*2);
    console.log(number*3);
    console.log(number*4);
    console.log(number*5);
    console.log(number*6);
    console.log(number*7);
    console.log(number*8);
    console.log(number*9);
    console.log(number*10)
}
showMultiplicationTable(Math.floor(Math.random() *12) +1);
0
for (var i=0; i<10; i++) {
    var randomNumber = Math.floor(Math.random() * 200) + 20;
    if (randomNumber % 2 === 1) {
        console.log (randomNumber + " is Odd");
    } else if (randomNumber % 2 === 0) {
        console.log (randomNumber + " is Even");
    }
}
// var sample = "";
for(var i = 1; i< 10; i++) {
    for (var j = 0; j < i; j++) {
        i.toString();
        console.log(i);
    }
}
for(var i=100; i>0;i-=5){
    console.log(i);
}

