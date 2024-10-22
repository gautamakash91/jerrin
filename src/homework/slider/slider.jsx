import { useState } from "react"

//function definition
//function call 

export default function Slider(){
  const [red, setRed] = useState(0);

  return (
    <div
      // className="p-10 bg-red-500"
      style={{
        backgroundColor: "#ff0000",
        padding: 10
      }}
    >
      slider
      <br />
      <input 
        type="range"
        value={red}
        onChange={(event)=>{
          setRed(event.target.value)
        }}
      />
      {red}
      <br />
      <input 
        type="range"
        value={red}
        onChange={(event)=>{
          setRed(event.target.value);
        }}
      />
      {red}
      <br />
      <input 
        type="range"
        value={red}
        onChange={(event)=>{
          setRed(event.target.value)
        }}
      />
      {red}
    </div>
  )
}