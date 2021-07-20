import React, { Component } from 'react';

class Square extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null
        };
    }

    onClick() {
        this.setState({value: "X"});
    }

    render() { //jsx
        const { value } = this.state;
        return (
            <button
                className="square"
                onClick={() => { this.onClick() }}>{value}
            </button>
        );
    }
}

export default Square;