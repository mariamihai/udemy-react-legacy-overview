import React from 'react';
import './Validation.css';

const validation = (props) => {
    let textMessage = (
        <p className="error">Text too short (should have minimum 5 characters).</p>
    );

    if(props.inputLength >= 5) {
        textMessage = (
            <p className="success">The text is acceptable.</p>
        );
    }

    return (
        <div className="Validation">
            {textMessage}
        </div>
    );
};

export default validation;