import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from "./Modal.module.css";

import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop
                    show={this.props.show}
                    click={this.props.modalClose}
                />
                <div
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                    className={styles.Modal}
                >
                    {this.props.children}
                </div>
            </Auxiliary>
        )
    }
}

Modal.propTypes = {
    show: PropTypes.bool,
    modalClose: PropTypes.func
}

export default Modal;