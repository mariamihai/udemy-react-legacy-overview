import React from 'react';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Order from '../../components/Order/Order';

class Orders extends React.Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(result => {
                const fetchedOrders = [];

                for (let key in result.data) {
                    fetchedOrders.push({
                        ...result.data[key],
                        id: key
                    });
                }
                
                this.setState({ orders: fetchedOrders, loading: false });
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    totalPrice={+order.price}
                    />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);