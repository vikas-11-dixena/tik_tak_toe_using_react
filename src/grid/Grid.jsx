import React, { useState } from "react";
import Card from "../card/Card";
import "./Grid.css";
import isWinner from "../isWinner/Iswinner";

const Grid = ({ numberOfCards }) => {
  let [board, setBoard] = useState(Array(numberOfCards).fill(""));
  let [turn, setTurn] = useState(true);
  let [winner, setWinner] = useState(null);

  function play(index) {
    if (turn === true) {
      board[index] = "X";
    } else {
      board[index] = "O";
    }
    let win = isWinner(board, turn ? "X" : "O");
    if (win) {
      setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    setBoard(Array(numberOfCards).fill(""));
    setTurn(true);
    setWinner(null);
  }

  return (
    <div className="grid-wrapper">
      {winner && (
        <>
          <h1 className="turn">
            {winner === "Draw" ? "It's a Draw Match!" : `Winner: ${winner}`}
          </h1>
          <button onClick={reset}>Reset Game</button>
        </>
      )}
      <h2>Current Turn: {turn ? "X" : "O"}</h2>
      <div className="grid">
        {board.map((item, index) => {
          return (
            <Card
              gameEnd={winner ? true : false}
              key={index}
              player={item}
              onPlay={play}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
