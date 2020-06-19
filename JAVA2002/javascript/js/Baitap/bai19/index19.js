var n = prompt("Enter n: ", "0")
//console.log(n)

function total(t){
    if(Number(t) >= 1){
        return (Number(t) + total(Number(t)-1))
    }
    return t
}

console.log( "  " +total(n))