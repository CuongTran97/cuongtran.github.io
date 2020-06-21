var a = [5,2,4,19,8,12,4,2,5,6,8,10];
var min = a[0];
var max = a[0];
for(var i = 1; i<a.length ; i++){
    if(min>a[i]){
        min = a[i]
    }
    if(max<a[i]){
        max = a[i]
    }

}
console.log(max,min,sx); 