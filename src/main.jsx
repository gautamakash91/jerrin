import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import Calculator from "./homework/calculator/calculator.jsx";
import Counter from "./components/counter.jsx";
import Styling from "./components/styling.jsx";
import Logout from "./components/logout.jsx";
import Slider from "./homework/slider/slider.jsx";
// import Counter, { Calculator } from "./components/counter.jsx"; //relative path
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Slider />
  </StrictMode>
);
