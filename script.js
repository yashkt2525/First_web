console.log("Hello");
let count = 0;
const outputDiv = document.getElementById("output");
outputDiv.innerText = count;

function add() {
  count = count + 1;
  outputDiv.innerText = count;
}
function sub() {
  count = count - 1;
  outputDiv.innerText = count;
}
