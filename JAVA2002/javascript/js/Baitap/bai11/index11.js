var s = prompt("Enter the string");

// console.log(s)
function countSpace(n){
    var count=0;
    for(var i = 0; i < n.length ; i++){
        if(n.charAt(i) === " "){
            count ++;
        }
    }
    return count;
}
var t=countSpace(s);
console.log(t)