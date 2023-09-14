// var calBody = document.querySelector(".js-calculator-body");
// var pads = calBody.querySelector(".pads");
// var buttons = pads.querySelectorAll("button");

// buttons.addEventListener("click", function(){
//   displayInput.value += "2";
// });

function appendToResult(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  try {
    let expression = document.getElementById("result").value;
    let result = eval(expression);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "error";
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}

function deleteFromResult() {
  document.getElementById("result");
  result.value = result.value.slice(0, -1); //from array
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculate();
  }
});
