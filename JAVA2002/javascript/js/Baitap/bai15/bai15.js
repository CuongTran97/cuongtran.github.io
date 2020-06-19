var s = " PhAM ThI tHu Ha"
function chuanhoa(n){
    n = n.toLowerCase();
    n=n.trim()
    n = n.charAt(0).toUpperCase() + n.slice(1,n.length);
    for(var i = 1; i< n.length ; i++){

        if(n.charAt(i) === " "){
            n =n.slice(0,i+1) + n.charAt(i+1).toUpperCase() + n.slice(i+2,n.length)
        }
    }
    return n;
}

console.log(chuanhoa(s))