import React from 'react';
import Square from './Square';

class Board extends React.Component {
    render() {
        const status = "Next player: X"
        return (
            <div>
                <div className="status">{status}</div>
                <div>
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div>
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div>
                    <Square />
                    <Square />
                    <Square />
                </div>
            </div>
        )
    }
}

export default Board;