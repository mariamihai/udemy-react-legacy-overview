import React from 'react';
import PropTypes from 'prop-types';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';

import styles from "./Toolbar.module.css";

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <DrawerToggle click={props.drawerToggleClick}/>

        <div className={styles.Logo}>
            <Logo />
        </div>

        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

toolbar.propTypes = {
    drawerToggleClick: PropTypes.func
}

export default toolbar;