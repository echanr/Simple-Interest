function compute() {
    //Get the values and calculate 
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interest = principal * years * rate /100;
   var year = new Date().getFullYear()+parseInt(years);
    //Create the Interest text
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + Date + "</mark>";

}

//update the rate value
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


//Check for positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
