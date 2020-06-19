var myCanvas = document.getElementById("my-canvas")
console.log(myCanvas)
var context = myCanvas.getContext("2d")

context.strokeStyle ="red"
context.moveTo(0,0)
context.lineTo(200,300)
context.stroke()

context.beginPath()
context.strokeStyle = "green"
context.moveTo(200,0)
context.lineTo(0,300)
context.stroke()

context.fillStyle = "yellow"
context.fillRect(0,0,100,100)

context.beginPath()
context.arc(100, 150, 100, 0, 2*Math.PI)
context.stroke()


context.fillStyle = "Black"
context.font = "30px Arial"
context.fillText("Hello",100,100)

window.onload = () =>{
    var imgPlayer = document.getElementsByTagName("image")
    console.log(imgPlayer)
    context.drawImage(imgPlayer, 0, 0, 50, 50)
}