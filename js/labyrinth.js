'use strict';

var labyrinth = document.querySelector('#labyrinth');

var row = 10, col = 20;
var html = '';
for(var i = 0; i < row; i++) {
  html += '<div class="row">';
  for(var j = 0; j < col; j++) {
    html += '<div class="field"></div>';
  }
  html += '</div>';
}

labyrinth.innerHTML = html;
var position = 0;
var oldPosition = position;
var visited = [];
var obstacles = [ 4,       14,
                 24,       34,
                 44,  49,  54,
                      69,
                      89,
                     109,
                144, 129, 154,
                164, 149, 174,
                184,      194];
var currentField = document.querySelector('.field');
var allFields = document.querySelectorAll('.field');
currentField.style.backgroundColor = 'red';

var goal = allFields[199];
goal.style.backgroundColor = 'yellow';

// for (var i = 0; i < obstacles.length; i++) {
//   allFields[obstacles[i]].style.backgroundColor = 'black';
// };

window.addEventListener('keydown',function(e) {
  var key = e.key;
  currentField = changeCurrentActiveField(currentField,key);
});

function changeCurrentActiveField(current, key) {
  oldPosition = position;
  switch (key) {
    case 'ArrowLeft':
      position--;
      break;
    case 'ArrowDown':
      position += col;
      break;
    case 'ArrowUp':
      position -= col;
      break;
    case 'ArrowRight':
      position++;
    break;
  };

  // if (position == 199 && oldPosition != position) {
  //   setTimeout(
  //     function() { alert("\u004B\u006F\u007A\u00ED\u0020\u0038\u002C\u0020\u0044\u006F\u006F\u0072\u0062\u0065\u006C\u006C\u0020\u0034\u0030\u0038"); }, 100
  //   );
  // }

  if (position == 199 && oldPosition != position) {
    setTimeout(
      function() { alert("Yay! You've done it!"); }, 100
    );
  }

  current.style.backgroundColor = 'blue';
  if (visited.indexOf(position) == -1 && obstacles.indexOf(position) == -1 && position >= 0 && position < row * col) {
    current = allFields[position];
    current.style.backgroundColor = 'red';
    visited.push(position);
  } else {
    current.style.backgroundColor = 'red';
    position = oldPosition;
  };

  return current;
};
