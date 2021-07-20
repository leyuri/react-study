import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(0)
        };
    }

    handleClick(no) {
        console.log(no);
    }

    renderSquare(no) {
        return (
            <Square 
                value={this.state.squares[no]} 
                onClick={(no) => {
                    this.handleClick(no);
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
        const status = "Next player: X"
        return (
            <div>
                <div className="status">{status}</div>
                {this.renderRow(0)}
                {this.renderRow(1)}
                {this.renderRow(2)}
            </div>
        )
    }
}

export default Board;