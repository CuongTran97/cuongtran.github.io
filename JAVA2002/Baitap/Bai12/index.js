
var space = " "
var enter = '\n'
function remove(text){
    var dem = 0;
    for(var i = 0; i <text.length ; i++){
        
        var so= text.length;
        text = text.trim();
        if(text.charAt(i)=== space){
            
            text = text.substring(0,i) + text.substring(i+1,text.length)
            i--
        }
        if(text.charAt(i) === enter){
            
        }
    }
    return text
}

var t1= "    a vv s  c"
var t2 = "ss fxc      c z a       "
var t3 = 'aa\n sxcx  \n 4szzxcaasdfs'
console.log(remove(t1));
console.log(remove(t2))
console.log(remove(t3))
