var s = " this is beautiful day"

function reverse(n){
    var newStr="";
    for(var i = n.length;  i>= 0 ;i--){
        newStr  = newStr +  n.charAt(i)
    }
    return newStr
}

console.log(reverse(s))