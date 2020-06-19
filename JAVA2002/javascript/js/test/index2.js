function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML =
          this.responseText;
        //console.log(this.responseText)
      }
    };
    xhttp.open("GET", "https://5e8e421f22d8cd0016a7a062.mockapi.io/api/v1/users?fbclid=IwAR0p_IO1ln6dKviox9fOmxsrlOeDN-rQa05ihIeYuCXCOj2s7zqdGdp1kd4", true);
    xhttp.send();
  }

//   loadDoc()
 
//   fetch('https://5e8e421f22d8cd0016a7a062.mockapi.io/api/v1/users?fbclid=IwAR0p_IO1ln6dKviox9fOmxsrlOeDN-rQa05ihIeYuCXCOj2s7zqdGdp1kd4')
//   .then(response => response.json())
//   .then(data => console.log(data));

//class
class Person {
    constructor(firstName,lastName){
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = firstName +" "+ lastName ;
        // this.go = this.go.bind(this)
    }

    // go = function(){
    //     console.log(this.name + " is going ....")
    // }.bind(this)

    go = () => {
        console.log(this.name + " is going ...")
    }
}

var person = new Person("cuong", "tran");
var person2 = new Person("dung", "phan");
console.log("Person: ",person)
person.go()
console.log("Person2: ",person2)
person2.go()

function someoneGoing(go){
    go()
}
someoneGoing(person.go)

class Doctor extends Person{
    constructor(lastName , firstName, degree){
        // this.firstName = firstName;
        // this.lastName = lastName;
        super(lastName, firstName)
        this.name = firstName +" "+ lastName ;
        this.degree = degree
    }
    go = () => {
        console.log(this.name + " is going ...")
    }

}

class Developer extends Person{
    constructor(lastName, firstName, language){
        super(lastName, firstName)
        this.name = firstName + lastName
        this.language = language
    }
    go = () => {
        console.log(this.name + " is going ...")
    }
}
class Hacker extends Developer{
    constructor(lastName, firstName, language, hat){
        super(lastName, firstName)
        this.name = firstName + lastName
        this.language = language
        this.hat = hat
    }
    go = () => {
        console.log("Hacker" + this.name + " is going ...")
    }
}

var doctor = new Doctor("cuong", "tran", "dentist")
console.log(doctor)

var developer = new Developer("cuong", "tran", ["html","css"])
console.log(developer)

var hacker = new Hacker("cuong", "tran", ["html","css","assembly"], "black hat")
console.log(hacker)
hacker.go()

//advance
let x = 5
 x= 6
console.log("x:  ",x )
