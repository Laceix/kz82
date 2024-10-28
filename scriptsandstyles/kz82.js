//math functions//
function addFunc() {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);
  let awnsr;
  var total = num1 + num2;
  awnsr = window.prompt("what is " + num1 + " + " + num2);
  if (awnsr == total) {
    document.getElementById("p1").innerHTML = "CORECT!!!";
  } else {
    document.getElementById("p1").innerHTML = "INCORECT!!!";
  }
}
function subFunc() {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);
  let awnsr;
  var total = num1 - num2;
  awnsr = window.prompt("what is " + num1 + " - " + num2);
  if (awnsr == total) {
    document.getElementById("p1").innerHTML = "CORECT!!!";
  } else {
    document.getElementById("p1").innerHTML = "INCORECT!!!";
  }
}
function mulFunc() {
  var num1 = Math.floor(Math.random() * 11);
  var num2 = Math.floor(Math.random() * 51);
  let awnsr;
  var total = num1 * num2;
  awnsr = window.prompt("what is " + num1 + " X " + num2);
  if (awnsr == total) {
    document.getElementById("p1").innerHTML = "CORECT!!!";
  } else {
    document.getElementById("p1").innerHTML = "INCORECT!!!";
  }
}
function divFunc() {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 10);
  let awnsr;
  var total = Math.floor(num1 / num2);
  awnsr = window.prompt("what is " + num1 + " / " + num2);
  if (awnsr == total) {
    document.getElementById("p1").innerHTML = "CORECT!!!";
  } else {
    document.getElementById("p1").innerHTML = "INCORECT!!!";
  }
}
//math functions//
