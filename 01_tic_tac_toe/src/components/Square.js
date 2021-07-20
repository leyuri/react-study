import React, { Component } from 'react';

class Square extends Component {
    render() { //jsx
        // console.log("this.props", this.props)
        const { value } = this.props;
        return (
            <button
                className="square"
                onClick={() => {
                    this.props.onClick(value);
                }}
            >{value}
            </button>
        );
    }
}

export default Square;