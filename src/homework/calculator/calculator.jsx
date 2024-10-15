import { useState } from "react";
import Addition from "./addition";

function Calculator(){
  const [output, setOutput] = useState(0);
  var a = 30;
  var b = 20;
  
  function sum(num1, num2){
    return num1+num2;
  }

  return (
    <div>
      this is the calculator
      <input  
        placeholder="enter num 1"
      />
      <input  
        placeholder="enter num 2"
      />
      <button>+</button>
      <button>-</button>
      <button>*</button>
      <button>/</button>
      {output}
      {/* <button>+</button> */}

      {/* <Addition num1={a} num2={b} sum={sum} /> */}
    </div>
  )
}

export default Calculator;