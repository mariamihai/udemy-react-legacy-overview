import React from 'react';
import './Input.css';

const input = (props) => {
    const shownText = props.inputLength === 0 ? null : '[' + props.value + ']';

    return (
        <div className="Input">
            <label htmlFor="inputText">Introduce a text:</label>
            <input
                value={props.value}
                name="inputText" 
                type="text" 
                onChange={props.change}/>
            <p>The length of the provided text {shownText} is {props.inputLength}.</p>
        </div>
    );
};

export default input;