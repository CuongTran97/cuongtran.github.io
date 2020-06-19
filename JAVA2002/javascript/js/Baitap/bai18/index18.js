var s1 = "This is a beautiful day, is it?"
var s2 = "isa"

var s3 = "hi hi hi hi hi"
var s4 = "hi"

var s5 = "This is a beautiful day, is it?"
var s6 = "is"

function findPosition(n1,n2){
    var t = n1.slice(0,n1.lastIndexOf(n2)) 
    var t2 = t.lastIndexOf(n2);
    return t2
}

console.log(findPosition(s5,s6))
console.log(findPosition(s1,s2))
console.log(findPosition(s3,s4))