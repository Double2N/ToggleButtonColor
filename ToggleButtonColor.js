import { useState } from "react";
import "./style.css";

function ToggleButtonColor() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white"); //ternary operator
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  }

  return (
    <>
      <section style={{ backgroundColor, color: textColor }}>
        <button
          onClick={handleClick}
          style={{ buttonStyle, border: `2px solid ${textColor}` }}
        >
          {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
        </button>

        <section className="content">
          <h1>
            Welcome To A <br />
            Real World
          </h1>
        </section>
      </section>
    </>
  );
}

export default ToggleButtonColor;
