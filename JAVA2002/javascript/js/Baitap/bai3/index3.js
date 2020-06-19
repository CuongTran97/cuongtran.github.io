var n;
var number;
do {
    n = prompt ("Enter n","1")
    number = Number(n)
} while (Number.isNaN(number) || number < 1);

for( var i = 1; i<=n; i ++){

    if( i%2 ===0 ){
        console.log(i)

    }
}