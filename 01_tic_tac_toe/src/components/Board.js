import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    renderRow(rowNum) {
        return (
            <div>
                <Square value={rowNum * 3 + 0} />
                <Square value={rowNum * 3 + 1} />
                <Square value={rowNum * 3 + 2} />
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