let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");
let daysCount = document.getElementById("daysCount");
let daysCountEmail = document.getElementById("daysCountEmail");

startDate.addEventListener('input', calcDays);
endDate.addEventListener('input', calcDays);


function calcDays()
{
    let value = new Date(endDate.value) - new Date(startDate.value)
     
    if(value < 0)
    {
        toastr.error("Избраните дати трябва да бъдат в правилен формат!\nНачалната дата не може да бъде преди крайната!");
        endDate.value="";
        daysCount.value = null; daysCountEmail.value = null;
    }
    else if(value == 0)
    {daysCount.value = 1; daysCountEmail.value = 1;}
    else
    {daysCount.value = value / 86400000; daysCountEmail.value = value / 86400000;}
}



//----------------------------------------

let eurosSelected = document.getElementById("eurLimit");
eurosSelected.addEventListener('change',checkEURInput);
eurosSelected.addEventListener('input',checkEURInput);

function checkEURInput()
{
    debugger;
    let floatValue = parseFloat(eurosSelected.value);
    if(floatValue < 0 || isNaN(floatValue))
    {
        toastr.error("Сумата не може да бъде отрицателна!");
        eurosSelected.value ="";
    }
}