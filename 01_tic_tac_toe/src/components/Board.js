import React from 'react';
import Square from './Square';

class Board extends React.Component {
    renderRow(rowNum) {
        return (
            <div>
                <Square value={rowNum * 3 + 1} />
                <Square value={rowNum * 3 + 2} />
                <Square value={rowNum * 3 + 3} />
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