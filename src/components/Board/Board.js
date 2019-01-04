import React from 'react';
import Square from '../Square/Square';

import './Board.css';

class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
          value={this.props.squares[i]} 
          onClick={() => this.props.onClick(i)} />
        );
    }

    render() {
      return (
        <div>{this.createBoard()}</div>
      );
    }

    createBoard = () => {
      let size = 3;
      let board = [];
      for(let i = 0; i < size; i++) {
        let row = [];
        for(let j = i*size; j < (i*size) + size; j++) {
          row.push(this.renderSquare(j))

        }
        board.push(<div className="board-row">{row}</div>)
      }
      return board;
    }
}

export default Board;