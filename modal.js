var static_cube = document.querySelector(".static_cube");
var radioGroup = document.querySelector(".radio-group");
var currentClass = "";

function changeSide() {
  var checkedRadio = radioGroup.querySelector(":checked");
  var showClass = "show-" + checkedRadio.value;
  if (currentClass) {
    static_cube.classList.remove(currentClass);
  }
  static_cube.classList.add(showClass);
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener("change", changeSide);

// (function () {
//   var rotateY = 0,
//     rotateX = 0;

//   document.onkeydown = function (e) {
//     if (e.keyCode === 37) rotateY -= 4;
//     else if (e.keyCode === 38) rotateX += 4;
//     else if (e.keyCode === 39) rotateY += 4;
//     else if (e.keyCode === 40) rotateX -= 4;

//     document.querySelector(".cube").style.transform =
//       "rotateY(" + rotateY + "deg)" + "rotateX(" + rotateX + "deg)";
//   };
// })();
