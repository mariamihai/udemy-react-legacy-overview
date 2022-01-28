import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary';

// import axios from '../../axios-orders';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        state = {
            error: null
        }

        // Will be replaced with a React Hook later
        UNSAFE_componentWillMount() {
            this.requestIntercepter = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });

            this.responseIntercepter = axios.interceptors.response.use(response => response,
                error => {
                    this.setState({ error: error });
                });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestIntercepter);
            axios.interceptors.response.eject(this.responseIntercepter);
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