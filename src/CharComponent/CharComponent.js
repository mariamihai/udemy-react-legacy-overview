import React from 'react';

const charComponent = (props) => {
    const letterStyle = {
        display: 'inline-block',
        padding: '10px',
        textAlign: 'center',
        margin: '10px',
        border: '1px solid black'
    }

    return (
        <div style={letterStyle}
            onClick={props.click}>
            {props.char}
        </div>
    );
};

export default charComponent;