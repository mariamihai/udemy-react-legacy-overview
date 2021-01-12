import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary';

// import axios from '../../axios-orders';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        state = {
            error: null
        }

        // Will be replaced with React Hook later
        UNSAFE_componentWillMount() {
            axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });

            axios.interceptors.response.use(response => response,
                error => {
                    this.setState({ error: error });
                });
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Auxiliary>
                    <Modal show={this.state.error !== null}
                        modalClose={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>

                    <WrappedComponent {...this.props} />
                </Auxiliary>
            )
        }
    }
};

export default withErrorHandler;