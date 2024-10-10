import { useState } from "react";

function Counter() {
  const [a, setA] = useState(10);

  function IncreaseCount() {
    setA(a + 1);
  }

  function handleChange(event){
    // console.log(event);
    var b = parseInt(event.target.value)
    setA(b);
  }

  return (
    <div>
      <input 
        value={a}
        onChange={handleChange}
      />
      Count is {a}
      <button onClick={IncreaseCount}>
        increase count
      </button>
    </div>
  );
}

export default Counter;

//RULES
// 1. Component name should always start with a capital letter
// 2. A component needs to be exported to be imported in any other file.
// 3. Only one component can be exported by default. Other components in the same file can be exported normally.
// 4. Normally exported components have to be put inside { } when they are imported.
// 5. inside of the render function there always has to be a parent div
