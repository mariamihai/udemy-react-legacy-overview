import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    // We don't have an initial state
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');

        return nextProps.persons !== this.props.persons;
    }

    render() {
        console.log('[Persons.js] rendering');

        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.click(index)}
                change={(event) => this.props.change(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id} />
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // snapshot is the null value returned by getSnapshotBeforeUpdate
        console.log('[Persons.js] componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');    
    }
}

export default Persons;