var a = [1,2,3,2,3,4,6,7]
        var Prime = a.filter((value) =>{
           if(value < 2 ){
            return false
           }
           else{
               for(var i = 2; i < value - 1; i++){
                   if(value % i == 0){
                    return false
                   }
               }
           }
           return true
        })
        console.log(Prime)