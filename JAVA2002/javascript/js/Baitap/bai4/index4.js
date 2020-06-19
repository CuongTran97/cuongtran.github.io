var n;
var number
do {
    n = prompt("Enter n: ", "2")
    number = Number(n);
} while (Number.isNaN(number) || number < 2);

var isPrime = true
for (var j =2; j<= number ; j++){
    if(j == 2 ){
        console.log(j)
    }else{
        for(var i =2 ; i<=j ; i++){
        
            if(j % i === 0 ){
                isPrime = false
                break;
            }else console.log(j)
        }
    }
    
}

// if(isPrime === true){
//     console.log(number + "La so nto")
// }else console.log(number + "khong phai la so nto")