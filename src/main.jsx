import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Calculator from "./homework/calculator/calculator.jsx";
// import Counter, { Calculator } from "./components/counter.jsx"; //relative path

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Calculator />
  </StrictMode>
);
