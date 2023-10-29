let weight = document.getElementById("weight");
let height = document.getElementById("height");
let output = document.getElementById("output");
let suggestion = document.getElementById("suggestion");

function calculate() {
  let bmi = weight.value / height.value ** 2;
  if (!bmi) {
    output.innerText = 0;
  } else {
    output.innerText = bmi;
    if (bmi < 18) {
      suggestion.innerText = "You are Underweight you have to gain your weight";
    } else if (bmi > 25) {
      suggestion.innerText = "You are Overweight you have to loss your weight";
    } else {
      suggestion.innerText = "You are perfect!!! ";
    }
  }
}
