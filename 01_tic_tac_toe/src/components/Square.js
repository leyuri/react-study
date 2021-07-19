import React from 'react';

class Square extends React.Component {
    // this.props = {value: "1"}
    render() { //jsx
        return (
            <button className="square">{this.props.value}</button>
        );
    }
}

export default Square;