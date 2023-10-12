import { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
  const [displayValue, setDisplayValue] = useState(0);
  const [lastOperand, setLastOperand] = useState(0);
  const [lastOperation, setLastOperation] = useState(null);

  /** TODO: what happens when I click a number? */
  const handleNumberClick = (value) => {
    if(displayValue === 0) {
      setDisplayValue(value)
    } else {
      const newNumber = parseInt(`${displayValue}${value}`)
      setDisplayValue(newNumber)
    }
    
  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (operation) => {

    if(operation === 'C') {
      setLastOperand(0)
      setDisplayValue(0)
      setLastOperation(null)

    } else if(operation === '=') {
        calculate(lastOperation)
    } else if(lastOperand !== 0) {
        calculate(operation)
    } else {
      setLastOperation(operation)
      setLastOperand(displayValue)
      setDisplayValue(0)
    }

  };

  const calculate = (operation) => {
      switch (operation) {
        case '+':
          setDisplayValue(lastOperand + displayValue)
          setLastOperand(0)
          break;
        case '/':
          setDisplayValue(lastOperand / displayValue)
          setLastOperand(0)
          break;
        case 'x':
          setDisplayValue(lastOperand * displayValue)
          setLastOperand(0)
          break;
        case '-':
          setDisplayValue(lastOperand - displayValue)
          setLastOperand(0)
          break;
        default:
          break;
      }

   
    

  };

  return (
    <div className="container">
      <Screen value={displayValue} />
      <div className="inner">
        <div className="inner-section">
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={0} onClick={handleNumberClick} />
        </div>
        <div className="inner-section">
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="C" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
