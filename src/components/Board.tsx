//import { useState } from "react";
import "../App.css";
import Square from "./Square";

function Board() {
  const boardLength = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const boardContent = boardLength.map((num) => {
    {
      return <Square key={num} />;
    }
  });
  console.log(boardContent);

  return (
    <>
      <div className="board">{boardContent}</div>
    </>
  );
}

export default Board;
