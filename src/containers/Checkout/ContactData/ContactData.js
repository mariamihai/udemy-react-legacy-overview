import React from 'react';

import Button from '../../../components/UI/Button/Button';

import styles from './ContactData.module.css';

class ContactData extends React.Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className={styles.ContactData}>
                <h4> Enter your contact data:</h4>

                <form>
                    <input className={styles.Input} type="text" name="name" placeholder="Name" />
                    <input className={styles.Input} type="text" name="email" placeholder="Eemail" />
                    <input className={styles.Input} type="text" name="etreet" placeholder="Street name" />
                    <input className={styles.Input} type="text" name="postal" placeholder="Postal Code" />

                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;