var students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
    var findName = students.filter((value) =>{
        if (students.lastName === "Do")
        return students.lastName
    })
    console.log(findName)

var check = students.filter((a)=>{
    var split = a.lastName.split(" ");
    if(split[0] ==='Do'){
        console.log(a);
    }
})