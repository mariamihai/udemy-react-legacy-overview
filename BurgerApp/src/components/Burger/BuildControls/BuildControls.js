import React from 'react';
import PropTypes from 'prop-types';

import BuildControl from "./BuildControl/BuildControl";

import styles from './BuildControls.module.css';

const controls = [
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current price: <strong>{props.totalPrice.toFixed(2)}</strong></p>

        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                ingredientAdded={() => props.ingredientAdded(ctrl.type)}
                ingredientRemoved={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabledInfo[ctrl.type]}
            />
        ))}

        <button
            className={styles.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

buildControls.propTypes = {
    totalPrice: PropTypes.number,
    disabledInfo: PropTypes.objectOf(PropTypes.bool),
    ingredientAdded: PropTypes.func,
    ingredientRemoved: PropTypes.func,
    purchasable: PropTypes.bool,
    ordered: PropTypes.func
}

export default buildControls;