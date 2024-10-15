import { useState } from "react";

export default function Logout() {
  const [loggedIn, setLoggedIn] = useState(false);
  //tertiary operator
  //conditional rendering
  
  return (
    <div
      style={{
        backgroundColor: loggedIn == true ? "#00ff00" : "#ff0000",
      }}
    >
      <button
        onClick={() => {
          setLoggedIn(true);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setLoggedIn(false);
        }}
      >
        logout
      </button>
      {loggedIn == true ? "You are logged in" : "You are logged out"}
    </div>
  );
}
