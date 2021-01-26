import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
    meat: 1.3,
    cheese: 0.4,
    salad: 0.5,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        // 4 = base price
        totalPrice: 4,
        purchasable: true,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://udemy-react-burger-app-fbe4a-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
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

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        }

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryParams.join('&')
        });
        // this.setState({ loading: true });

        // const order = {
        //     ingredients: this.state.ingredients,
        //     // Should be calculated on the server
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Max',
        //         address: {
        //             street: 'Street 1',
        //             zipCode: '12345',
        //             country: 'Germany'
        //         },
        //         email: 'abc@abc.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }

        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({ loading: false, purchasing: false });
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false, purchasing: false });
        //     });
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let summary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
        if (this.state.ingredients) {
            summary = (
                <OrderSummary
                    totalPrice={this.state.totalPrice}
                    clickContinue={this.purchaseContinueHandler}
                    clickCancel={this.purchaseCancelHandler}
                    ingredients={this.state.ingredients}
                />
            );

            burger = (
                <Auxiliary>
                    <Burger ingredients={this.state.ingredients} />

                    <BuildControls
                        totalPrice={this.state.totalPrice}
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        ordered={this.purchaseHandler}
                        purchasable={this.state.purchasable}
                        disabledInfo={disabledInfo}
                    />
                </Auxiliary>
            );
        }

        if (this.state.loading) {
            summary = <Spinner />;
        }

        return (
            <Auxiliary>
                <Modal
                    show={this.state.purchasing}
                    modalClose={this.purchaseCancelHandler}
                >
                    {summary}
                </Modal>

                {burger}
            </Auxiliary>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);