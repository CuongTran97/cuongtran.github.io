var a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
function total(n){
    var t=0;
    for(var i =0; i<n.length;i++){
        t +=n[i]
    }
    return t
}
console.log(total(a))