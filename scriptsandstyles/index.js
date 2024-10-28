//koala clicker//
let clicks = 0;
function koalaClicker() {
  console.log(Math.random(1, 1000));
  clicks = clicks + 1;
  document.getElementById("p2").innerHTML =
    "you've clicked the koala " + clicks.toString() + " times";
  if (clicks == 69) {
    alert("hahaha 69 funnzy number");
  }
  if (clicks == 420) {
    alert("ANOTHER FUNNY NUMBER :3");
  }
  if (clicks == 1000) {
    $("#p2").text("YOU POPED THE KOALA :(");
    $("#img1").fadeToggle(2000);
  }
}
//koala clicker
