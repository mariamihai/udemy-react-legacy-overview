import React from 'react';
import './UserInput.css';

const input = (props) => {
    return (
        <div className='Input'>
            <label for='inputUsername'>Add the username:</label>
            <input name='inputUsername'
                type="text" 
                onChange={props.change}
                value={props.username}
            />
        </div>
    );
}

export default input;