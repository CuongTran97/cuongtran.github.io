var n;
var number
do {
    n = prompt("Enter n: ", "1")
    number = Number(n);
} while (Number.isNaN(number) || number < 1);
var t = 0;
for( var i =1 ; i<=number ; i++){
    t = t + i;
}
 console.log(t)