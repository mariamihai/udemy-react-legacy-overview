import React from 'react';

import Burger from '../../Burger/Burger';

import Button from '../../UI/Button/Button';

import styles from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {

    return (
        <div className={styles.CheckoutSummary}>
            <h1>Hope you like it!</h1>

            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>

            <Button btnType="Danger"
                click>
                CANCEL
            </Button>
            <Button btnType="Success"
                click>
                CONTINUE
            </Button>
        </div>
    );
}


export default checkoutSummary;