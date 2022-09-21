import { useState } from "react";
import useCalculator from "./useCalculator";

const useDisplay = () => {
  const [current, setCurrent] = useState([]);
  const [list, setList] = useState([]);
  const operators = "+-÷*";
  const calculator = useCalculator();

  const backspace = () => {
    if (!current.length) return;

    const lastPos = current.length - 1;
    const lastValue = current[lastPos];

    if (lastValue.length === 1) {
      let array = current;
      array.pop();
      setCurrent([...array]);
    } else {
      let array = current;
      array[lastPos] = lastValue.slice(0, -1);
      setCurrent([...array]);
    }
  };

  const clearDisplay = () => {
    setCurrent([]);
    setList([]);
  };

  const addNumber = (number) => {
    const lastPos = current.length - 1;
    const lastValue = current[lastPos];

    if (current.length === 0 || operators.includes(lastValue)) {
      if (number === ".") {
        let array = current;
        array.push("0.");
        setCurrent([...array]);
      } else if (number === "0") {
        return;
      } else {
        let array = current;
        array.push(number);
        setCurrent([...array]);
      }
    } else {
      if (lastValue.length <= 7) {
        if (number === ".") {
          if (!lastValue.includes(".")) {
            const value = lastValue + number;
            let array = current;
            array[lastPos] = value;
            setCurrent([...array]);
          }
        } else {
          const value = lastValue + number;
          let array = current;
          array[lastPos] = value;
          setCurrent([...array]);
        }
      }
    }
  };

  const addOperator = (operator) => {
    const lastPos = current.length - 1;
    const lastValue = current[lastPos];

    if (current.length > 0) {
      if (operators.includes(lastValue)) {
        let array = current;
        array[lastPos] = operator;
        setCurrent([...array]);
      } else {
        let array = current;
        array.push(operator);
        setCurrent([...array]);
      }
    }
  };

  const calculate = () => {
    let operation = [...current];
    const lastPos = current.length - 1;
    const lastValue = current[lastPos];

    if (current.length > 0) {
      if (operators.includes(lastValue)) {
        operation.pop();
      }
      const result = calculator.calculate(operation);
      const listArray = [...list];
      listArray.push({
        operation: current,
        result: result,
      });
      setCurrent([]);
      setList([...listArray]);
    }
  };

  return {
    current,
    list,
    addNumber,
    addOperator,
    clearDisplay,
    backspace,
    calculate,
  };
};

export default useDisplay;
