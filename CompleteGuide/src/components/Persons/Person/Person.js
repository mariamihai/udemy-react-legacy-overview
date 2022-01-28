import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);

        this.inputElementRef = React.createRef();
    }

    // connect this component to the context
    static contextType = AuthContext;

    render() {
        console.log('[Person.js] rendering');

        return (
            <Auxiliary>
                {this.context.authenticated ?
                    <p>Authenticated!</p> : <p>Please log in</p>
                }

                <p key='k1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key='k2'>{this.props.children}</p>
                <input
                    key='k3'
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name} />
            </Auxiliary>
        );
    }

    componentDidMount() {
        this.inputElementRef.current.focus();

        console.log(this.context.authenticated);
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person, classes.Person);