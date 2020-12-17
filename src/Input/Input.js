import React from 'react';
import './Input.css';

const input = (props) => {
    return (
        <div className="Input">
            <label htmlFor="inputText">Introduce a text:</label>
            <input
                value={props.value}
                name="inputText" 
                type="text" 
                onChange={props.change}/>
            <p>The length of the provided text is {props.inputLength}.</p>
        </div>
    );
};

export default input;