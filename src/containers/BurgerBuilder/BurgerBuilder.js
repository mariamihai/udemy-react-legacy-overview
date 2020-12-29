import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    meat: 1.3,
    cheese: 0.4,
    salad: 0.5,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        // 4 = base price
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = this.updatedIngredientList(type, 1);

        const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotalPrice
        });
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] <= 0) {
            return;
        }

        const updatedIngredients = this.updatedIngredientList(type, -1);

        const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotalPrice
        });
    }

    updatedIngredientList = (type, value) => {
        const prevIngredientValue = this.state.ingredients[type];

        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = prevIngredientValue + value;

        return updatedIngredients;
    }

    render() {
        const disabledInfo = { ...this.state.ingredients }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />

                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                />
            </Auxiliary>

        );
    }
}

export default BurgerBuilder;