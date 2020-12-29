import React from 'react';

import BuildControl from "./BuildControl/BuildControl";

import styles from './BuildControls.module.css';

const controls = [
    { label: 'Mead', type: 'meat'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label}/>
        ))}
    </div>

);

export default buildControls;