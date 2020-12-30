import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
    let attachStyles = [styles.SideDrawer, styles.Close];
    if(props.showSideDrawer) {
        attachStyles = [styles.SideDrawer, styles.Open];
    }

    return (
        <Auxiliary>

            <Backdrop
                show={props.showSideDrawer}
                click={props.closeSideDrawer}
            />

            <div className={attachStyles.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>

                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
};

export default sideDrawer;