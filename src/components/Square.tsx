import { useState } from "react";
import "../App.css";

function Square() {
  const [clicked, setClicked] = useState<boolean>(false);
  const [icon, setIcon] = useState("O");

  function handleClick() {
    setClicked(true);
    setIcon(icon === "O" ? "X": "O");
  }

  return (
    <>
      <button onClick={handleClick}>{clicked ? icon : ""}</button>
    </>
  );
}

export default Square;
