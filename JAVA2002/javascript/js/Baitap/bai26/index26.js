var k = 8;
let arr = [1,2,3,4,6,7];
var s1 = arr.sort( (a, b) => Math.abs(k - a) -  Math.abs(k - b) )[0];

var s2 = arr.sort( (a, b) => Math.abs(k - a) -  Math.abs(k - b) )[1];

if(k>s2 ){
    console.log(s1);   
}
else{
    console.log(s1,s2)
}