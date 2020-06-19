var n;
var number;
do{
    n = prompt("Enter n","1")
    number = Number(n);
}while (Number.isNaN(number))

for(var i = 1 ; i <= n; i++ ){
    console.log(i )
}