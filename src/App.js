import React, { Component } from 'react';
import './App.css';

import InputComponent from './InputComponent/InputComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
    text: "",
    length: 0
  }

  changedLengthHandler = (event) => {
    const length = event.target.value.length;

    this.setState({length: length});
  }

  render() {
    return (
      <div className="App">
        <InputComponent 
          inputLength={this.state.length}
          change={this.changedLengthHandler}
        />
        <ValidationComponent 
          inputLength={this.state.length}
        />  
      </div>
    );
  }
}

export default App;
