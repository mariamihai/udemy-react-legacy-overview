import React from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends React.Component {
    state = {
        ingredients: {
            meat: 1,
            cheese: 1,
            salad: 1,
            bacon: 1
        }
    }

    cancelOrderHandler = () => {
        this.props.history.goBack();
    }

    continueOrderHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};

        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }

        this.setState({ ingredients: ingredients });
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancel={this.cancelOrderHandler}
                    checkoutContinue={this.continueOrderHandler} />
            
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
            </div>
        )
    }
}

export default Checkout;