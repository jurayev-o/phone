import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function MiniGame({ setNewModal }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (boardCopy[index] || calculateWinner(boardCopy)) return;
    boardCopy[index] = isXNext ? "X" : "O";
    setBoard(boardCopy);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `G'olib: ${winner}`
    : `Navbat: ${isXNext ? "X" : "O"}`;

  return (
    <AnimatePresence>
      <motion.div
        className="NewModal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setNewModal(false)}
      >
        <motion.div
          className="NewModal"
          initial={{ opacity: 0, scale: 0.3, y: -150 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.3, y: -150 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="NewModal-close" onClick={() => setNewModal(false)}>
            ✖️
          </div>

          <div className="game-board">
            <h2>{status}</h2>
            <div className="board">
              {board.map((square, index) => (
                <motion.div
                  key={index}
                  className="square"
                  onClick={() => handleClick(index)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {square}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            className="restart-button"
            onClick={() => setBoard(Array(9).fill(null))}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Yangi o'yin
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MiniGame;
