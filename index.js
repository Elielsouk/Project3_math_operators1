
let a; //Declare variable
let b; //Declare variable
let c; //Declare variable

document.getElementById("rollButton").onclick = function(){ //This a fuction

    a = Math.floor(Math.random() * 100) + 1; //This is generate random numbers 0 to 100.
    b = Math.floor(Math.random() * 100) + 1; //This is generate random numbers 0 to 100.
    c = Math.floor(Math.random() * 100) + 1; //This is generate random numbers 0 to 100.

    document.getElementById("alabel").innerHTML = a;
    document.getElementById("blabel").innerHTML = b;
    document.getElementById("clabel").innerHTML = c;
}

function myFunction1() { //This is a function.
  document.getElementById("demo1").innerHTML = "Hello!";//document.getElementId to change the Text.
  var x1 = document.getElementById("demo1");
  
let x = 50;// Assign the value 50 to x.
let y = 8;// Assign the value 8 to y.
let z = x + y;// Assign the value x + y to = z.
document.getElementById("demo").innerHTML = "" + z;// Display z Result:
  }