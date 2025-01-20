import { useState } from "react";
import "../App.css";
import Board from "./Board";

function Game(){
    const [player, setPlayer] = useState("X");

    return (<Board turn={player}/>)
}

export default Game;