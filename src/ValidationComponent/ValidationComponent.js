import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {
    let textMessage = (
        <p className="error">Text too short (should have minimum 5 characters).</p>
    );

    if(props.inputLength >= 5) {
        textMessage = (
            <p className="success">The text is acceptable.</p>
        );
    }

    return (
        <div className="ValidationComponent">
            {textMessage}
        </div>
    );
};

export default validationComponent;