// alert("test")
var btnShow = document.getElementById("js-btn-show")
var inputValue = document.getElementById("js-input-value")
var pMessage = document.getElementById("js-message")

var inputNum1 = document.getElementById("js-input-num1")
var inputNum2 = document.getElementById("js-input-num2")
var showNum = document.getElementById("js-show-num")
var operator = document.getElementById("js-operator")
var btnCalculate =document.getElementById("js-btn-cal")

var unorderlist = document.getElementById("js-todo")
var inputAdd = document.getElementById("js-input-add")
var btnAdd = document.getElementById("js-btn-add")

btnShow=document.addEventListener("click", () =>  {
    // alert(inptValue = value       )
    pMessage.innerText = inputValue.value
})
function calculate(){
    let num1 = inputNum1.value
    let num2 = inputNum2.value
    let operator =getOperator();
    result = 0;
    switch(operator){
        case "+":
            result = Number(num1) + Number(num2)
            break;
        case "-":
            result = Number(num1) - Number(num2)
            break;
        case "*":
            result = Number(num1) * Number(num2)
             break;
        case "/":
            result = Number(num1) / Number(num2)
            break;   
                     
    }
    showNum.value = result
    
}
function getOperator(){
    return operator.options[operator.selectedIndex].value;
}

//console.log(operator.options[operator.selectedIndex].value)

inputNum1.oninput =  calculate;
inputNum2.oninput =  calculate;
operator.onchange = calculate;
btnAdd.onclick = () =>{
    let newTask = inputAdd.value;
    let listItem = document.createElement("li")
    let buttonRemove = document.createElement("button")
    listItem.innerText = newTask
    buttonRemove.innerText = "-"
    buttonRemove.onclick = () =>{
        unorderlist.removeChild(listItem)
    }
    listItem.append(buttonRemove)
    unorderlist.append(listItem)
}
