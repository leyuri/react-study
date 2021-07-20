import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
        };
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) { // squares[a] null이 아니여야 함
                return squares[a]; // 그 자리에 있는 게 이겼다는 의미 
            }
        }
        return null; // 다 돌았는데도 아무도 찾지 못했으면 이긴 사람이 없다는 뜻, null 값을 리턴
    }

    handleClick(i) {
        const { history, xIsNext } = this.state;
        const current = history[history.length - 1];
        const squares = current.squares.slice(); // copy
        if (squares[i] !== null || this.calculateWinner(squares)) { // arr[i]
            return
        }
        squares[i] = xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([{ squares: squares }]),
            xIsNext: !xIsNext
        })
    }

    render() {
        const { history, xIsNext } = this.state;
        const squares = history[history.length - 1].squares;
        const winner = this.calculateWinner(squares);
        let status; // status 값은 변경 가능해야 하므로 let keyword 사용
        if (winner) { // winner가 있으면    
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${xIsNext ? 'X' : 'O'}`;
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol></ol>
                </div>
            </div>
        )
    }
}

export default Game;

