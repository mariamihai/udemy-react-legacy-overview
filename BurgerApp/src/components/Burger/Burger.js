import React from 'react';
import PropTypes from 'prop-types';

import styles from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => (
                <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
            ));
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients.</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />

            {transformedIngredients}

            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

burger.propTypes = {
    ingredients: PropTypes.objectOf(PropTypes.number)
}

export default burger;