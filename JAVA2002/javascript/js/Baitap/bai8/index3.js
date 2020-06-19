var answer
var number
do {
    answer = prompt("Enter a number","0")
    number = Number(answer)
} while (Number.isNaN(number) || number <  2);
var check = true;
while(number>0)
{
    var remain= number %10;
    if(remain % 2 ==0){
        check= false;
        break;
    }
    number = Math.floor(number/10)

}
alert(check)