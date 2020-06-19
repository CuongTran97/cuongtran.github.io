var s1 = `computer =      " nga  n 98 " AND class = " REACTJS2002 "
AND class = " Vietiss "
AND class = " REAC            TJS2003 " AND class = " S20   03 "
AND class = " RE   AC "`
var s2 = " "
function chuanhoa(n1,n2){
    n1 =n1.trim();
    for(var i = 0; i< n1.length; i++){
        if(n1.charAt(i) === " " && n1.charAt(i+1) === " "){
            n1 = n1.slice(0,i) + n1.slice(i+2,n1.length)
        }
    }
    var s="";
    var x
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

    for(var j =0 ; j< n1.length; j++){
        if(n1.charAt(j) === `"`){
        //    //s +=n1.slice(j,n1.slice(j+1,n1.length).indexOf(`"`))
        //     x=Number(n1.slice(0,j+1).lastIndexOf(`"`)+1) + Number(n1.slice(j+1,n1.length).indexOf(`"`)+1)          
        //     s = n1.slice(j,x)
        //     s = remove(s);
        //     n1 = n1.slice(0,j) + s + n1.slice(x,n1.length)
        //     j= x+2
            for(var k=j+1;k<=n1.length;k++){
                if(n1.charAt(k)===`"`){
                    s= n1.slice(j,k+1)
                    s = remove(s)
                    n1 = n1.slice(0,j) + s + n1.slice(k+1,n1.length)
                    j = (n1.slice(0,j)+s).lastIndexOf(`"`)+2
                    //console.log(j)
                    break
                }
            }

        }
    }
    return n1
}

console.log("abc  :"+chuanhoa(s1,s2))