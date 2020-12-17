import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'aadsag', name : "Max", age : 28},
      {id: 'fdghdg', name : "Manu", age : 29},
      {id: 'afssfs', name : "Stephanie", age : 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => id === p.id);

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;

    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }
  
  deletePersonsHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);

      this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons) {
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: '#ffcccb', // light red 
        color: 'black'
      }

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonsHandler(index)}
              change={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name} 
              age={person.age}
              key={person.id}/>
          })}
        </div>
      );
    }

    const paragraphClasses = [];
    // Paragraph will be red if there are at most 2 persons
    if(this.state.persons.length <= 2) {
      paragraphClasses.push('red');
    }
    // Paragraph will be bold if there is at most 1 persons
    if(this.state.persons.length <= 1) {
      paragraphClasses.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App.</h1>
          <p className={paragraphClasses.join( ' ' )}>I am a paragraph.</p>
  
          <button onClick={this.togglePersonsHandler} style={style}>
            Toggle persons
          </button>

          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);