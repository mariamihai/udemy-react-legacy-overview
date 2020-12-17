import React from 'react';
import './InputComponent.css';

const inputComponent = (props) => {
    return (
        <div className="InputComponent">
            <label for="inputComponentText">Introduce a text:</label>
            <input
                name="inputComponentText" 
                type="text" 
                onChange={props.change}/>
            <p>The length of the provided text is {props.inputLength}</p>
        </div>
    );
};

export default inputComponent;