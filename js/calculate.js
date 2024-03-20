// JavaScript

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");
  let currentExpression = "";

  // ボタンクリック時の処理
  for (const button of buttons) {
    button.addEventListener("click", function () {
      const value = button.textContent;
      if (currentExpression === "" && value.match(/^[+\-*/]/)) {
        return;
      } else if (value === "C") {
        currentExpression = "";
      } else if (value === "=") {
        try {
          const result = eval(currentExpression);
          currentExpression = result.toString();
        } catch (error) {
          currentExpression = "Error";
        }
      } else if (
        value.match(/[+\-*/]/) &&
        currentExpression.match(/[+\-*/]$/)
      ) {
        return;
      } else {
        currentExpression += value;
      }
      display.textContent = currentExpression;
    });
  }
});
