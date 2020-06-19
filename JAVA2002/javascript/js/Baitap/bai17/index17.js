function max(a,b,c){
   var max= 0;
    if(a-b >0){
        if(a-c >0){
            max = a;
        }
    }else{
        if(b-c > 0){
            max = b;
        }else max = c;
    }
    return max;
}
function min(a,b,c){
    var min= 0;
     if(a-b <0){
         if(a-c <0){
             min = a;
         }
     }else{
         if(b-c < 0){
             min = b;
         }else min = c;
     }
     return min;
 }

console.log(max(10,6,2))
console.log(min(9,2,5))