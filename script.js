var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var gradientDirection = document.getElementById("gradientDirection");
var options = document.querySelectorAll("option");

function setGradient() {
  body.style.background =
    "linear-gradient("
    + String(getDirection())
    + ", "
    + color1.value
    + ", "
    + color2.value
    + ")";
  // this bit displays the current gradient code
  css.textContent = body.style.background
  + ";";
}
// display gradient on page load
window.onload = setGradient();
// listeners for color inputs
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
// listener for random hex gen button
button.addEventListener("click", getRandomGradients);
// function to generate random hex codes, found on stackoverflow with my google-fu
function makeRandomColor() {
  var c = '';
  while (c.length < 6) {
    c += (Math.random()).toString(16).substr(-6).substr(-1)
  }
  return '#' + c;
}
// function to update the values.
function getRandomGradients() {
  color1.value = makeRandomColor();
  color2.value = makeRandomColor();
  setGradient();
}
// make direction of gradient adjustable
function getDirection() {
  for (var x of gradientDirection) {
    gradientDirection.addEventListener("click", setGradient);
    return gradientDirection.options[gradientDirection.selectedIndex].text;
  }
}




