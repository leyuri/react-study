import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => { this.props.onClick(i) }}
            />
        )
    }

    renderRow(no) {
        return (
            <div className="row">
                {this.renderSquare(no * 3 + 0)}
                {this.renderSquare(no * 3 + 1)}
                {this.renderSquare(no * 3 + 2)}
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