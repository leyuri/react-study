import React  from 'react';

function Square({value, onClick}) {
    // console.log("{value}", value);
    return (
        <button
            className="square"
            onClick={() => {
                onClick();
            }}
        >{value}
        </button>
    )
    
}

export default Square;