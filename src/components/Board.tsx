import "../App.css";
import Square from "./Square";

type BoardProps = {
  squares: (string | null)[];
  onSquareClick: (index: number) => void;
};

const Board: React.FC<BoardProps> = ({ squares, onSquareClick }) => {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onSquareClick(index)} />
      ))}
    </div>
  );
};

export default Board;
