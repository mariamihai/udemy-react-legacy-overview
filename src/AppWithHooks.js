import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const appWithHooks = (props) => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      {name : "Max", age : 28},
      {name : "Manu", age : 29},
      {name : "Stephanie", age : 26}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name : "Maximilian", age : 28},
        {name : "Manu", age : 29},
        {name : "Stephanie", age : 27}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <p>I am a paragraph.</p>

      <button onClick={switchNameHandler}>Switch name</button>

      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
      >
        My Hobbies: racing
      </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>
    </div>
  );
}

export default appWithHooks;