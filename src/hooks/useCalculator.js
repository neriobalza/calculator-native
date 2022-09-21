import React from "react";

const useCalculator = () => {
  const calculate = (operation) => {
    const total = operation;
    const length = operation.length;

    for (let i = 1; i < length; i += 2) {
      if (
        total.findIndex((element) => element === "÷" || element === "*") !== -1
      ) {
        const operatorIndex = total.findIndex(
          (element) => element === "÷" || element === "*"
        );
        const operator = total[operatorIndex];
        const a = parseFloat(total[operatorIndex - 1]);
        const b = parseFloat(total[operatorIndex + 1]);

        if (operator === "*") {
          total.splice(operatorIndex - 1, 3, multiply(a, b));
        } else {
          total.splice(operatorIndex - 1, 3, divide(a, b));
        }
      } else {
        const operatorIndex = total.findIndex(
          (element) => element === "+" || element === "-"
        );
        const operator = total[operatorIndex];
        const a = parseFloat(total[operatorIndex - 1]);
        const b = parseFloat(total[operatorIndex + 1]);

        if (operator === "+") {
          total.splice(operatorIndex - 1, 3, add(a, b));
        } else {
          total.splice(operatorIndex - 1, 3, subtract(a, b));
        }
      }
    }

    return total[0];
  };

  const add = (a, b) => {
    return a + b;
  };
  const subtract = (a, b) => {
    return a - b;
  };
  const multiply = (a, b) => {
    return a * b;
  };
  const divide = (a, b) => {
    return a / b;
  };

  return {
    calculate,
  };
};

export default useCalculator;
