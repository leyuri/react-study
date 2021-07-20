import React from 'react';

function Square({ value, onClick }) {
    return (
        <button
            className="square"
            onClick={onClick}
            // this 가 없으므로 이렇게 호출해도 무방
        >{value}
        </button>
    )

}

export default Square;