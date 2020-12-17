import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? '#ffcccb' : 'lightgreen'};
    color: black
  }
`

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

    let persons = null;
    if(this.state.showPersons) {
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
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p className={paragraphClasses.join( ' ' )}>I am a paragraph.</p>

        <StyledButton alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>
          Toggle persons
        </StyledButton>

        {persons}
      </div>
    );
  }
}

export default App;