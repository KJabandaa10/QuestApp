// Options appear on hover
const optionsDiv = document.querySelector(".options-btn-div");
const hiddenButtons = [...document.querySelectorAll(".hidden")];
function optionsHover() {
  hiddenButtons.forEach(button => button.classList.toggle("hidden"));
}
optionsDiv.addEventListener("mouseenter", optionsHover);
optionsDiv.addEventListener("mouseleave", optionsHover);

// ALGORITHM
// vars - change with random function according to users boundaries
let a = Math.floor(Math.random() * 100);
let b = 17;
let c = 2;
let d = 0.433;
let e = 550;
let f = 19221;
let g = -14.8;

const x = a + 2 * c - e + f + 1000 * g;
console.log(x);

// random number between specified params
function randInt() {
  let min = 1; // user input determines min  max values // input.value => see weather app code
  let max = 10;
  const randomnum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomnum);
}

function randDecimal() {
  let decimal = 100; // user input determines decimal points // input.value => see weather app code
  let integral = 10;
  const randomnum =
    Math.floor(
      Math.random() * (integral * decimal - 1 * decimal) + 1 * decimal
    ) /
    (1 * decimal);
  console.log(randomnum);
}

// add event listeners to call functions when params have been accepted
