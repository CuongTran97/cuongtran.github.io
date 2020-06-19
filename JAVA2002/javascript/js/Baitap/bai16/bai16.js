var s = "https://www.facebook.com/ngothucdat"
var s2= "https://www.facebook.com/"
//console.log( s.lastIndexOf("https://www.facebook.com/"))



function cut(n1,n2){
    var t = n1.slice(n2.length,n1.length)
    return t;
}

console.log(cut(s,s2))