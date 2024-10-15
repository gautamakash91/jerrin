import { useState } from "react"

export default function Slider(){
  const [red, setRed] = useState(0)
  return (
    <div
      style={{
        backgroundColor: "rgb("+red+", "+red+", 250)"
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
          setRed(event.target.value)
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