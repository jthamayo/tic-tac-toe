import { useState } from "react";
import "../App.css";
import Board from "./Board";

type GameState = (string | null)[];

function Game() {
  const [squares, setSquares] = useState<GameState>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const handleClick = (index: number) => {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);

  return (
    <div className="game">
      <h1>Tres en raya</h1>
      <Board squares={squares} onSquareClick={handleClick} />
      <div className="game-info">
        {winner ? `Ganador: ${winner}` : `Siguiente jugador: ${isXNext ? "X" : "O"}`}
      </div>
    </div>
  );
}

type CalculateWinner = (squares: GameState) => string | null;

const calculateWinner: CalculateWinner = (squares) => {
  if (!squares || squares.length !== 9) {
    console.error("El estado squares no está correctamente inicializado");
    return null;
  }

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default Game;
