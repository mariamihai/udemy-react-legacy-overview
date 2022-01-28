import React from 'react';
import PropTypes  from 'prop-types';

import styles from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <button
            className={styles.Less}
            onClick={props.ingredientRemoved}
            disabled={props.disabled}>Less</button>
        <button
            className={styles.More}
            onClick={props.ingredientAdded}>More</button>
    </div>
);

buildControl.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    ingredientAdded: PropTypes.func,
    ingredientRemoved: PropTypes.func 
}

export default buildControl;