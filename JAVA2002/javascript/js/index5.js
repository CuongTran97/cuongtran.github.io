var fruits = ['Apple', 'Banana', 'Orange']
var number = [1, 3, 5, 7, 2, 4]
var mixed = ['Apple', 2, 'Banana', true]

console.log("fruits: ", fruits);
console.log("number: ", number);
console.log("mixed: ", mixed);

console.log("first fruits: ", fruits[0])
console.log("last fruits: ", fruits[fruits.length - 1])
console.log("typeoOf(fruits): ", typeof(fruits))

// get and remove last element of array

var lastFruits = fruits[fruits.length - 1]
// fruits.length = fruits.length - 1
// console.log(`lastfruits: ${lastFruits}, fruits now: ${fruits}`)

// get and remove the first element of array

var firstFruits = fruits[0]

for( var i = 0; i < fruits.length ; i++){

    fruits[i] = fruits[i + 1]
}

fruits.length = fruits.length -1;

console.log(fruits)

fruits.push("Kiwi")
fruits.push("Banana")

fruits.unshift("Cherry")

console.log(fruits)

// indexOf

var foundBanana = fruits.indexOf("Banana")
var foundLastBanana = fruits.lastIndexOf("Banana")

console.log("Vi tri cua Banana: ",foundBanana)
console.log("Vi tri cua last Banana: ",foundLastBanana)

var subFruits =  fruits.slice(1,3) // start to end-1

var subFruits2 = fruits.slice(0) // end == length
console.log("subfruits: ", subFruits)
console.log("copy fruits: ", subFruits2)

var reverseFruits = fruits.slice(0).reverse();
console.log("reverse: ", reverseFruits)
console.log("fruits: ", fruits)

//remove a element in fruits

fruits.splice(fruits.indexOf("Orange"),1) // start index of orange then remove i element after orange
console.log("fruits: ", fruits)

fruits.splice(fruits.indexOf("Cherry"),1, "WaterMelon", "StrawBerry") // start index of Cherry then remove i element after orange then add new item
console.log("fruits: ", fruits)

//join 

console.log("join(,)", `[ ${fruits.join(", ")} ]`) // join array to sting by "item"

//callback

function hello(callback, number) {
    console.log("number: ", number)
    callback();

}

function sayHelloClass(){

    console.log("Hello Class")
}

// console.log(sayHelloClass)

hello(sayHelloClass, 122222)

function cooking(cookingFish) {
    // cooking rice
    cookingFish();
    // cooking soup

}

function cookingFish() {
    console.log("I'm cooking Fish")
    //boiled....
}

cooking(cookingFish)
// object
var cherry = {
    name: " Cherry",
    price: 5

}
var wartermelon = {
    name: " WaterMelon",
    price: 10

}
var fruit = [
    cherry,
    wartermelon,
    {
        name: "Banana",
        price: 7
    }

]

console.log("wartermelon name: ", wartermelon.name)

var foundBananaObj = fruit.indexOf({
    name: "Banana",
    price: 7
})

console.log(fruit)
//find

var findElem = function(item)  {
    console.log("item: ", item)
     return item.name === "WaterMelon";
}

function myFind(find){
    for( var i = 0; i< fruit.length; i ++){
        var result = find(fruit[i]);
        if(result){
            return fruit[i]
        }
    }
}
var findWater = myFind(findElem)
// var findBanana = fruit.find(findElem)

console.log("findBanana: ", findWater)