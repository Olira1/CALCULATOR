import React,{useState} from 'react';
import  './Calculator.css'

const Calculator = () => {
    const [input, setInput] = useState("")

    const handleClick = (value) => {
        setInput(input + value)
    }

    const clear = () => setInput("")

    const calculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error")
        }
    }


    return (
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          <button className="operator" onClick={() => handleClick("*")}>
            *
          </button>
          <button className="operator" onClick={() => handleClick("/")}>
            /
          </button>
          <button className="operator" onClick={() => handleClick("-")}>
            -
          </button>
          <button className="operator" onClick={() => handleClick("+")}>
            +
          </button>

          {[9, 8, 7, 6, 5, 4, 3, 2].map((num) => (
            <button key={num} onClick={() => handleClick(num)}>
              {num}
            </button>
          ))}

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button className="equal" onClick={() => calculate()}>
            =
          </button>
          <button className="clear" onClick={() => clear()}>
            C
          </button>
        </div>
      </div>
    );
}

export default Calculator;
