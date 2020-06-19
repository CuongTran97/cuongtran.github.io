function greeting() {
    console.log("Hello")
}

function say(greeting) {
    greeting()
}

say(greeting)

// callback hell

var cookingSoup = () => {
    console.log("Cooking soup done!")
}

var cookingFish = () => {
    console.log("Cooking fish done!")
    console.log("Start cooking soup")
    setTimeout(cookingSoup, 2000)
}

var cookingRice = () => {
    console.log("Cooking rice done!");
    console.log("Start cooking fish")
    setTimeout(cookingFish, 2000)
}

var thinking = () => {
    console.log("Done thinking");
    console.log("Start cooking rice");
    setTimeout(cookingRice, 3000)
}

function cooking() {
    console.log("Thinking.......")
    setTimeout(thinking, 2000)
}

// cooking()
console.log("Main thread");
/// Promise

var goodStudent = true;
var goodBoy = true;

var buyCarCallback = (resolve, reject) => {
    setTimeout(() => {
        if (goodStudent) {
            resolve({ name: "Vinfast" })
        } else {
            reject({ reason: "Not good student" })
        }
    }, 2000)
}

var hangoutCallback = (resolve, reject) => {
    setTimeout(() => {
        if (goodBoy) {
            resolve({ name : "hangout"})
        } else {
            reject({ reason: "Failed" })
        }
    }, 3000)
}

var buildHouseCallBack = (resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 0)
}
var buyCarPromise = new Promise(buyCarCallback);
buyCarPromise
    .then((data) => {
        console.log("Bought car: ", data.name);
        var hangoutPromise = new Promise(hangoutCallback);
        var buildHousePromise = new Promise(buildHouseCallBack);
        return Promise.all([hangoutPromise, buildHousePromise])
    })
    .then(() => {
        console.log("Have a girl friend and house");
        // return new Promise(SettleDownCallback)
    })
    //  .then(() => {
    //      console.log("Settle down")
    //  })
    //  .then(() => {
    //      console.log("Have babies")
    //  })
    //  .catch((data) => {
    //      console.log("Reject:", data.reason)
    //  })

 //async await

async function myPromises() {
    var buyCarResolve = await new Promise(buyCarCallback)
    console.log("by car done")
    
    var hangoutResolve = await new Promise(hangoutCallback)
    console.log("hangout done")
    console.log("All done", buyCarResolve,hangoutResolve)
    // buyCarPromise.then(() => {
    //     console.log("buyCarPromise: " ,buyCarPromise)
    // })
    // console.log("Hangout.....")
}

myPromises()

console.log("My main Thread")

