import React from 'react';

import styles from './Order.module.css';

const order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }
    const intredientOutput = ingredients.map(ingredient => {
        return <span
            className={styles.OrderIngredient}
            key={ingredient.name}>
            {ingredient.name} ({ingredient.amount}) </span>
    });

    return (
        <div className={styles.Order}>
            <p>Ingredients: {intredientOutput}</p>
            <p>Total price: <strong>USD {props.totalPrice.toFixed(2)}</strong></p>
        </div>
    )
};

export default order;