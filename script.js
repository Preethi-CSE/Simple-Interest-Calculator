var amount =document.getElementById("Amount").Value;
var rate=document.getElementById("Interest Rate").value;
var years=document.getElementById("No. of Years").value;
var interest=amount * years * rate/100;
var year =new Date().getFullYear()+parseInt(years);
function updateRate()
{
    var rateval = document.getElementById("Interest Rate").value;
    document.getElementById("rate_val").innerText=rateval;

}
document.getElementById("result").innerHTML="If you deposit "+amount+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
