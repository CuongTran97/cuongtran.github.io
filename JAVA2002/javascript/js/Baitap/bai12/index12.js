var s= `abc   123  czxc           \n \n\n\n\nasdzxc\n` 
function remove(n){
    n.trim();
     for(var i=0; i< n.length ; i++){
         if(n.charAt(i) === " " || n.charAt(i) === '\n'){
            n= n.slice(0,i)+ n.slice(i+1,n.length)
            i--;
         }
     }
    return n;
}

var t = remove(s);
 
console.log(t)
//  console.log(s.length)
// console.log(s.slice(0,2))
// console.log(s.slice(2,s.length))