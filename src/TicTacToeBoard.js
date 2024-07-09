import React, { Component } from 'react';
import './TicTacToeBoard.css';

class TicTacToeBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ]
    };
  }


  handleCellClick = (row, col) => {
    const newBoard = [...this.state.board];
    newBoard[row][col] = 'X';
    this.setState({ board: newBoard }, this.placeRandomO);
  }

  placeRandomO = () => {
    const { board } = this.state;
    const emptyCells = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === ' ') {
          emptyCells.push({ row: i, col: j });
        }
      }
    }
    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const { row, col } = emptyCells[randomIndex];
      const newBoard = [...board];
      newBoard[row][col] = 'O';
      this.setState({ board: newBoard });
    }
  }

  render() {
    return (
      <div className="tic-tac-toe-board">
        {this.state.board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className="tic-tac-toe-cell"
                onClick={() => this.handleCellClick(rowIndex, cellIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default TicTacToeBoard;