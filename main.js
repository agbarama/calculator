// var calBody = document.querySelector(".js-calculator-body");
// var pads = calBody.querySelector(".pads");
// var buttons = pads.querySelectorAll("button");

// buttons.addEventListener("click", function(){
//   displayInput.value += "2";
// });

function appendToResult(value) {
  let displayInput = (document.getElementById("result").value += value);
}

// function signUsed() {
//   let signUsed = false;

//   const inputField = document.getElementById(".result");
//   inputField.addEventListener("input", function (event) {
//     const inputValue = event.target.value;

//     if (inputValue.match("+", "-", "/", "*")) {
//       signUsed = true;
//     } else {
//       signUsed = false;
//     }
//   });

//   const calculatorForm = document.querySelector(".calculator-form");
//   calculatorForm.addEventListener("submit", function (event) {
//     if (signUsed) {
//       alert("Error");
//       event.preventDefault();
//     }
//   });
// }

function calculate() {
  try {
    let expression = document.getElementById("result").value;
    // let result = eval(expression);
    document.getElementById("result").value = result;

    // Check if the expression contains morethan two maths operators
    const operators = expression.match("+", "-", "/", "*");

    if (operators && operators.lenghth > 1) {
      throw new Error("Error!!");
    }
    // Evaluate expression and return result
    let result = eval(expression);
  } catch (error) {
    document.getElementById("result").value = "error";
    setTimeout(function () {
      alert("One mathematical function at a time");
    }, 1000);
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

// function blockFunction() {
//   const displayInput = (document.getElementById("result").value += value);
//   if (displayInput === "+" && "-") {
//     console.log("error");
//   }
// }

// blockFunction();
