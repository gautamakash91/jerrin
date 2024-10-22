import { useState } from "react";
var a = 10;

export default function Styling() {
  const [margin, setMargin] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("password1234");
  // function handleChange(event){
  //   setMargin(parseInt(event.target.value))
  // }

  const handleChange = (event) => {
    // setMargin(parseInt(event.target.value));
    if (email == "akash@gmail.com") {
    }

    if (password.length > 8) {
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#4d4dff",
        padding: 10,
        margin: margin,
        color: "#0000ff",
        height: "100vh",
      }}
    >
      <input
        value={margin}
        type="number"
        placeholder="enter margin..."
        onChange={(event) => {
          setMargin(parseInt(event.target.value));
        }}
      />
      hello
      <div
        style={{
          backgroundColor: "white",
          padding: 10,
        }}
      >
        1: {margin}
        <br />
        2: "margin"
      </div>
    </div>
  );
}

//CASING
//camel casing
//pascal casing

// akash-gautam
// akashGautam - camel casing
// AkashGautam - pascal casing
