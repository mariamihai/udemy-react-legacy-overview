import React from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import axios from '../../../axios-orders';

import styles from './ContactData.module.css';

class ContactData extends React.Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            // Should be calculated on the server
            price: this.props.totalPrice,
            customer: {
                name: 'Max',
                address: {
                    street: 'Street 1',
                    zipCode: '12345',
                    country: 'Germany'
                },
                email: 'abc@abc.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Name" />
                <input className={styles.Input} type="text" name="email" placeholder="Eemail" />
                <input className={styles.Input} type="text" name="etreet" placeholder="Street name" />
                <input className={styles.Input} type="text" name="postal" placeholder="Postal Code" />

                <Button btnType="Success" click={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={styles.ContactData}>
                <h4> Enter your contact data:</h4>

                {form}
            </div>
        );
    }
}

export default ContactData;