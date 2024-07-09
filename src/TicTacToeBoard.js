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
    this.setState({ board: newBoard });
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