import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


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
    let btnClasses = [classes.Button];

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person 
                  click={() => this.deletePersonsHandler(index)}
                  change={(event) => this.nameChangedHandler(event, person.id)}
                  name={person.name} 
                  age={person.age}/>
              </ErrorBoundary>
          })}
        </div>
      );
      
      btnClasses.push(classes.Red);
    }

    const paragraphClasses = [];
    // Paragraph will be red if there are at most 2 persons
    if(this.state.persons.length <= 2) {
      paragraphClasses.push(classes.red);
    }
    // Paragraph will be bold if there is at most 1 persons
    if(this.state.persons.length <= 1) {
      paragraphClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App.</h1>
        <p className={paragraphClasses.join( ' ' )}>I am a paragraph.</p>

        <button className={btnClasses.join(' ')} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;