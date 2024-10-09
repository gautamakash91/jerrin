import Addition from "./addition";

function Calculator(){
  var a = 30;
  var b = 20;
  
  function sum(num1, num2){
    return num1+num2;
  }

  return (
    <div>
      this is the calculator
      <Addition num1={a} num2={b} sum={sum} />
    </div>
  )
}

export default Calculator;