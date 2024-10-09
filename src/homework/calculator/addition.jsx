function Addition(props) {
  var { num1, num2, sum } = props; //object destructuring

  function showtext() {
    return "this is my dummy text";
  }

  return (
    <div>
      Sum is {sum(num1, num2)}
      <br />
      {/* TO SHOW A VARIABLE  */}
      {num1}
      <br />
      
      {/* TO PERFORM ARITHEMATIC OPERATIONS */}
      {num1 + num2}
      <br />

      {/* TO CALL A FUNCTION  */}
      {showtext()}
    </div>
  );
}

export default Addition;
