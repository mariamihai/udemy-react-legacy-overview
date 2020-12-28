import React, { Component } from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering');

        // return (
        //     <div className={classes.Person}>
        //         <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.change}
        //             value={this.props.name} />
        //     </div>
        // );

        // // Return an array
        // return [
        //     <p key='k1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key='k2'>{this.props.children}</p>,
        //     <input key='k3' type="text" onChange={this.props.change}
        //         value={this.props.name} />
        // ];

        // Use a higher order component
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

export default Person;