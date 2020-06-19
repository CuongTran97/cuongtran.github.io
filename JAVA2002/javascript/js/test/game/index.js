var game = document.getElementById("game")
var context = game.getContext("2d")
var imgPlayer = document.createElement("img")
imgPlayer.src = "./images/run2.png"

function clearScreen (ctx){
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,500,500)
}

var player = {
    x:0,
    y:0,
    width: 100,
    height: 100,
    img: imgPlayer,
    context: context,
    draw(){
        context.drawImage(this.img,this.x,this.y,this.width,this.height)
    },
    moveRight(){
        if(this.x<400){
            this.x +=20;}
    },moveDown(){
        if(this.y<400){
            this.y +=20;}
    },moveUp(){
        if(this.y>=20){
            this.y -=20;}
    },moveLeft(){
        if(this.x>=20){
        this.x -=20;}
    }
}
window.onload = () =>{
// context.drawImage(imgPlayer, 0, 0,100,100)
//  player.draw()
// setTimeout(() =>{
//     clearScreen(context)
//     player.x = 70
//     player.y = 70
//     player.draw()
// },500)
setInterval(() => {
    clearScreen(context)
    player.draw()
}, 1);
}


window.addEventListener("keydown",(event) =>{
    console.log(event);
    switch(event.keyCode){
        case 37:
            console.log("left arrow")
            player.moveLeft()
            break;
        case 38:
            console.log("Top arrow")
            player.moveUp()
            break
        case 39:
            console.log("Right arrow")
            player.moveRight()
            // clearScreen(context)
            // player.draw()
            break
        case 40:
            console.log("Down arrow")
            player.moveDown()
            break

    }
})