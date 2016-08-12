function changeColor(element, color) {
  console.log(element, color);
  element.style.backgroundColor = color;
}

function myFunction() {
  var circles = document.getElementsByClassName("circ");
  var colors = ["hsl(0,100%,50%)", "hsl(50,100%,50%)", "hsl(160,100%,50%)", "hsl(180,100%,50%)", "hsl(210,100%,50%)", "hsl(240,100%,50%)", "hsl(270,100%,50%)"];
  for (var i = 0; i < circles.length; i++) {
    window.setTimeout(changeColor, i * 500, circles[i], colors[i])
  }
}
