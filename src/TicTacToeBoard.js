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

  render() {
    return (
      <div className="tic-tac-toe-board">
        {this.state.board.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className="tic-tac-toe-cell">{cell}</div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default TicTacToeBoard;