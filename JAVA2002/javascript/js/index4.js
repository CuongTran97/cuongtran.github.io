var hello = " Hello 'World' "
var helloCuong = 'Hello \'Cuong\''
var helloClass = `Hello Class`


console.log(hello,helloCuong,helloClass)

function getIntroduce (name, age){
    var introduce = "I'm" + name + 
    " and have age is: " + age + "."
    var introduce2 = `I'm ${name} `
    return introduce,introduce2;
}

console.log(getIntroduce("Cuong"), 25)

// string method 
var str = "Today is a beautiful day, is'nt it"
var substr= "day"
var oldstr = "beautiful"
var newstr = "good"
console.log (`length: ${str.length}, charAt(0): ${str.charAt(0)},
                toUpperCase(): ${str.toLocaleUpperCase()},
                toLowerCase(): ${str.toLowerCase()},
                indexOf("day"): ${str.indexOf(substr)},
                lastIndexOf("day"): ${str.lastIndexOf(substr)},
                slice(0,5): ${str.slice(0,5)},
                substring(0,5); ${str.substring(0,5)},
                substr(0,5): ${str.substr(1,6)},
                concat(0,5); ${str.concat(substr)},
                repalce("beautiful", "good"): ${str.replace("beautiful", "good")}
            `);
    var pos= str.indexOf(oldstr);
    str = str.slice(0,pos)+ "good" + str.slice(pos + oldstr.length,str.length)

console.log(str)

function validateName(name){

    name = name.trim();
    // while(name.include(" ")){

    //     name = name.replace(" ", " ")
    // }
    name = name.split()
    return name
}

var userName = "    Dinh     Xuan     Toan    "
console.log("trim: >" + userName.trim() +"<")
console.log("validateName: >" + validateName(userName) +  "<")