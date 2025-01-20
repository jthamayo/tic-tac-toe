import { useState } from "react";
import "../App.css";

function Square({value}) {
  const [clicked, setClicked] = useState<boolean>(false);
  const [icon, setIcon] = useState("O");

  function handleClick() {
    setClicked(true);
    setIcon(value);
  }

  return (
    <>
      <button onClick={handleClick}>{clicked ? icon : ""}</button>
    </>
  );
}

export default Square;
