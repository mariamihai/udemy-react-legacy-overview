import React from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

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

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancel={this.cancelOrderHandler}
                    checkoutContinue={this.continueOrderHandler}/>
            </div>
        )
    }
}

export default Checkout;