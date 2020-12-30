import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const button = (props) => (
    <button
        className={[styles.Button, styles[props.btnType]].join(' ')}
        onClick={props.click}
    >
        {props.children}
    </button>
);

button.propTypes = {
    btnType: PropTypes.oneOf(['Success', 'Danger']).isRequired,
    click: PropTypes.func
}

export default button;