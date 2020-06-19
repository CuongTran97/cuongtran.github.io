//function

// function helloWorld() {
//     alert("Hello World")
// }

//invoke, call function

function isPrime(number) {
    var isPrime = true
    if(number < 2){
        isPrime = false;
    } else{      
        for(var i =2; i <= Math.sqrt(number); i++){
            if(number % i ===  0){
                 isPrime = false;
                break
            }
        }
    }
    return isPrime
}

var isPrimeNumber = isPrime(7)
// alert(isPrimeNumber)

function isEven(number) {
    return number % 2 === 0
}

var n = 19

function getRamdomFrom1ToN(n){
    return Math.floor(Math.random() *n) +1;
}

// function random0toN(n){
//     return Math.floor(Math.random()*n +1)
// }

function getRamdom(from, to){
    return from + Math.floor(Math.random() * (to - from +1 )) 
}

console.log("result", getRamdom(n))
var from = 5;
var to = 10;
console.log("result " + from + " -> " + to + "  :",
        getRamdom(from, to))       

var name = "Mr.Cuong"
var name2 = 'Mr.Binh'
var name4 = `Mr.Chinh`
