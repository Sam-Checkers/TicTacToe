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
      ],
      winner: '',
      clickedCells: {}
    };
  }

  handleCellClick = (row, col) => {
    const newBoard = [...this.state.board];
    newBoard[row][col] = 'X';
    const clickedCells = { ...this.state.clickedCells, [`${row}-${col}`]: 'green' };
    this.setState({ board: newBoard, clickedCells }, () => {
      this.placeRandomO();
      this.checkWin();
    });
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
      const clickedCells = { ...this.state.clickedCells, [`${row}-${col}`]: 'red' };
      this.setState({ board: newBoard, clickedCells });
    }
  }

  checkWin = () => {
    const { board } = this.state;
    const checkPlayerWin = (player) => {
      for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
          return true;
        }
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
          return true;
        }
      }
      if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
          (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
        return true;
      }
      return false;
    };

    if (checkPlayerWin('X')) {
      this.setState({ winner: 'You Win!' });
    } else if (checkPlayerWin('O')) {
      this.setState({ winner: 'You Lose!' });
    }
  }

  render() {
    return (
      <div>
        <div className="tic-tac-toe-board">
          {this.state.board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={`tic-tac-toe-cell ${this.state.clickedCells[`${rowIndex}-${cellIndex}`] || ''}`}
                  onClick={() => this.handleCellClick(rowIndex, cellIndex)}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>{this.state.winner}</div>
      </div>
    );
  }
}

export default TicTacToeBoard;