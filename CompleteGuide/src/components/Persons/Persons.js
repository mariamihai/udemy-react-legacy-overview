import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';

class Persons extends PureComponent {

    // We don't have an initial state
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // // Replaced by extending PureComponent
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.click !== this.props.click ||
    //         nextProps.change !== this.props.change;
    // }

    render() {
        console.log('[Persons.js] rendering');

        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.click(index)}
                change={(event) => this.props.change(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
            />
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

Persons.propTypes = {
    persons: PropTypes.array,
    click: PropTypes.func,
    change: PropTypes.func
}

export default Persons;