import React from 'react';
import Square from './Square';

class Board extends React.Component {
    renderRow() {
        return (
            <div>
                <Square value="1" />
                <Square value="2" />
                <Square value="3" />
            </div>
        )
    }
    render() {
        const status = "Next player: X"
        return (
            <div>
                <div className="status">{status}</div>
                {this.renderRow()}
                {this.renderRow()}
                {this.renderRow()}
            </div>
        )
    }
}

export default Board;