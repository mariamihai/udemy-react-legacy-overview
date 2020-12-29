import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState(updatedIngredients) {
        const sum = Object.keys(updatedIngredients)
            .map(ingredientKey => {
                return updatedIngredients[ingredientKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = this.updatedIngredientList(type, 1);

        const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotalPrice
        });

        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) {
            return;
        }

        const updatedIngredients = this.updatedIngredientList(type, -1);

        const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotalPrice
        });

        this.updatePurchaseState(updatedIngredients);
    }

    updatedIngredientList = (type, value) => {
        const prevIngredientValue = this.state.ingredients[type];

        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = prevIngredientValue + value;

        return updatedIngredients;
    }

    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Auxiliary>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>

                <Burger ingredients={this.state.ingredients} />

                <BuildControls
                    totalPrice={this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    disabledInfo={disabledInfo}
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;