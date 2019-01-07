import React from 'react';
import Square from '../Square/Square';

import './Board.css';

class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square key={i}
          value={this.props.squares[i]} 
          onClick={() => this.props.onClick(i)} 
          squareKey={i} 
          winningSquares={this.props.winningSquares} />
        );
    }

    render() {
      return (
        <div>{this.createBoard()}</div>
      );
    }

    createBoard = () => {
      const size = 3;
      let board = [];
      for(let i = 0; i < size; i++) {
        let row = [];
        for(let j = i*size; j < (i*size) + size; j++) {
          row.push(this.renderSquare(j))

        }
        board.push(<div key={i} className="board-row">{row}</div>)
      }
      return board;
    }
}

export default Board;