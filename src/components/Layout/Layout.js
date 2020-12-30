import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import styles from './Layout.module.css';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    openSideDrawer = () => {
        this.setState({ showSideDrawer: true });
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar 
                    openSideDrawer={this.openSideDrawer}
                />

                <SideDrawer
                    showSideDrawer={this.state.showSideDrawer}
                    closeSideDrawer={this.sideDrawerCloseHandler} />

                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    };
};

export default Layout;