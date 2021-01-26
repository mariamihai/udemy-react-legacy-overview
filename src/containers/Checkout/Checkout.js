import React from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends React.Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

    cancelOrderHandler = () => {
        this.props.history.goBack();
    }

    continueOrderHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    }

    UNSAFE_componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let totalPrice = 0;

        for (let param of query.entries()) {
            if (param[0] === 'totalPrice') {
                totalPrice = +param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }

        this.setState({ ingredients: ingredients, totalPrice: totalPrice });
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancel={this.cancelOrderHandler}
                    checkoutContinue={this.continueOrderHandler} />

                <Route path={this.props.match.path + '/contact-data'}
                    render={(props) => (
                        <ContactData ingredients={this.state.ingredients}
                            totalPrice={this.state.totalPrice}
                            {...props} />
                    )} />
            </div>
        )
    }
}

export default Checkout;