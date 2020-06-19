
var answer
var number
do {
    answer = prompt("Enter a number","0")
    number = Number(answer)
} while (Number.isNaN(number) || number <  2);
var isPrime = true;
for(var i =2; i <= Math.sqrt(number);i++){
    if(number % i ===  0){
        isPrime = false;
        break;
    }
}

if(isPrime == 0){
    console.log("ko phai so nto")
    alert("khong phai so nto")
}else { console.log(" la so nto")
        alert("la so nto")}

