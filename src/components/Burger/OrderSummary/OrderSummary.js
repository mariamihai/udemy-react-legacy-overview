import React from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return (
                <li key={ingredientKey}>
                    <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
                </li>
            )
        });

    return (
        <Auxiliary>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>

            <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>

            <p>Continue to Checkout?</p>
            <Button btnType='Danger' click={props.clickCancel}>CANCEL</Button>
            <Button btnType='Success' click={props.clickContinue}>CONTINUE</Button>
        </Auxiliary>
    );
}

orderSummary.propTypes = {
    ingredients: PropTypes.objectOf(PropTypes.number),
    totalPrice: PropTypes.number,
    clickContinue: PropTypes.func,
    clickCancel: PropTypes.func
}

export default orderSummary;