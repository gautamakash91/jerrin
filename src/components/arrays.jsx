import { useState } from "react"
import mirror from "../assets/2.png";

export default function Arrays(){
  const [arr, setArr] = useState([]);

  const handleClick = () => {
    const temp = [...arr];
    temp.push("hello")
    setArr(temp);
  }

  console.log(arr);

  return (
    <div>
      <img 
        src={mirror} 
        style={{
          width: 100
        }}
      />
      <input />
      <button 
        onClick={handleClick}
        style={{
          border: "1px solid green",
          color: "green",
          padding: 5,
          borderRadius: 10
        }}
      >
        add
      </button>

      <button
        style={{
          border: "1px solid red",
          color: "red",
          padding: 5,
          borderRadius: 10,
          marginLeft: 10
        }}
        onClick={()=>{
          const temp = [...arr];
          temp.pop();
          setArr(temp);
        }}
      >
        remove
      </button>
      <div>
        {arr}
      </div>
    </div>
  )
}