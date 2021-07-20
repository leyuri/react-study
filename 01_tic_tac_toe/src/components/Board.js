import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => {
                    this.handleClick(i);
                }}
            />
        )
    }

    renderRow(rowNum) {
        return (
            <div className="row">
                {this.renderSquare(rowNum * 3 + 0)}
                {this.renderSquare(rowNum * 3 + 1)}
                {this.renderSquare(rowNum * 3 + 2)}
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderRow(0)}
                {this.renderRow(1)}
                {this.renderRow(2)}
            </div>
        )
    }
}

export default Board;