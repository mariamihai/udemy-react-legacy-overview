import React from 'react';
import './UserOutput.css';

const output = (props) => {
    const spanStyle = {
        fontWeight: 'bold',
        fontStyle: 'italic'
    }

    return (
        <div className='Output'>
            <p><span style={spanStyle}>{props.username}</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat placerat mattis. Cras iaculis, risus non commodo faucibus, est ipsum elementum eros, eget varius velit risus vitae neque. Donec sodales laoreet ex, vel tempus mauris tempor quis. Pellentesque libero leo, auctor vel auctor sed, mollis eget dui. Phasellus fermentum pulvinar congue. Nam nec bibendum purus, quis vulputate nisi. </p>
            <p>Praesent tincidunt purus sit amet lorem vestibulum, in bibendum ante ornare. Nunc mattis nisi enim, eget malesuada est sodales posuere. Quisque semper sapien ut erat ornare eleifend. Nam blandit pellentesque enim quis facilisis. Proin dapibus cursus est. Cras molestie lorem a lorem sagittis, a pharetra risus facilisis.</p>
        </div>
    );
}

export default output;