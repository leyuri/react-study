import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };
    }

    handleClick(i) {
        const { squares, xIsNext } = this.state;
        const arr = squares.slice();
        if (arr[i] !== null || this.calculateWinner(squares)) { // arr[i]
            return
        }
        arr[i] = this.state.xIsNext ? "X" : "O";
        console.log("arr", arr);
        this.setState({
            squares: arr,
            xIsNext: !xIsNext
        })
    }

    renderSquare(no) {
        return (
            <Square
                value={this.state.squares[no]}
                onClick={() => {
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

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 1, 2],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for(const [a, b, c] of lines) {
            console.log("const [a, b, c]", [a, b, c]);
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) { // squares[a] null이 아니여야 함
                return squares[a]; // 그 자리에 있는 게 이겼다는 의미 
            }
        }
        return null; // 다 돌았는데도 아무도 찾지 못했으면 이긴 사람이 없다는 뜻, null 값을 리턴
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status; // status 값은 변경 가능해야 하므로 let keyword 사용
        if (winner) { // winner가 있으면    
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }
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