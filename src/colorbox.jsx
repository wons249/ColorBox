import { useState } from "react";
import "./colorbox.css";

function randomChoice(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

export default function ColorBox({ colors }) {
  const [color, setColor] = useState(randomChoice(colors));
  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
  };
  return (
    <div
      className="ColorBox"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}
