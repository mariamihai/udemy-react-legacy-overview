import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering');

        return (
            <Auxiliary>
                <p key='k1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key='k2'>{this.props.children}</p>
                <input key='k3' type="text" onChange={this.props.change}
                    value={this.props.name} />
            </Auxiliary>
        );
    }
}

export default withClass(Person, classes.Person);