import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>I am a paragraph.</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies: racing</Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );
  }
}

export default App;
