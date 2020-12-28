import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // the initial state can be initialized here
    // this.state = ...
  }

  // the initialization can be done in constructor
  // the constructor is added for you here
  state = {
    persons: [
      { id: 'aadsag', name: "Max", age: 28 },
      { id: 'fdghdg', name: "Manu", age: 29 },
      { id: 'afssfs', name: "Stephanie", age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => id === p.id);

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] render');

    let persons = null;

    // the child components are rendered as well
    if (this.state.showPersons) {
      persons =
        <Persons persons={this.state.persons}
          click={this.deletePersonsHandler}
          change={this.nameChangedHandler}
        />
    }

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>Remove Cockpit</button>

        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          click={this.togglePersonsHandler}
        /> : null}

        {persons}
      </WithClass>
    );
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
}

export default App;