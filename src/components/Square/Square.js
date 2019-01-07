import React from 'react';
import './Square.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }
    
    render() {
      const winningSquares = this.props.winningSquares;
      const squareKey = this.props.squareKey;
      return (
        <button className={"square " + ((winningSquares.indexOf(squareKey) > -1) ? ' winning-squares' : '')} onClick={() => this.props.onClick()}>
            {this.props.value}
        </button>
      );
    }
}

export default Square;