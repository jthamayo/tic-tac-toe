import { useState } from "react";
import "../App.css";
import Square from "./Square";

function Board(turn) {
  const [value, setValue] = useState(true);

  const boardLength = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const icon = turn ? "X" : "O";

  const boardContent = boardLength.map((num, index) => {
    {
      return <Square key={index + 1} value={icon} />;
    }
  });

  return (
    <>
      <div className="board">{boardContent}</div>
    </>
  );
}

export default Board;
