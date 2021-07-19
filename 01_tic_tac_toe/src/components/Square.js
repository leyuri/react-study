import React, { Component } from 'react';

class Square extends Component {
    // this.props = {value: "1"}
    render() { //jsx
        const { value } = this.props;
        return (
            <button className="square">{value}</button>
        );
    }
}

export default Square;