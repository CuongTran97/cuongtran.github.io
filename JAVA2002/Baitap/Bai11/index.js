var t1 = "Doan   thi   Diem"
var space = " "

function count(text){
    var dem = 0;
    for(var i=0; i < text.length; i++){
        if (text.charAt(i) === space){
            dem ++;
        }
    }
    return dem
}

console.log(count(t1))
var t2 = " 1  2   3    4"
console.log(count(t2))
