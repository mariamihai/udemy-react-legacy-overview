import React, { Component } from 'react';
import './App.css';

import InputComponent from './InputComponent/InputComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: "",
    length: 0
  }

  changedLengthHandler = (event) => {
    const text = event.target.value;
    const length = event.target.value.length;

    this.setState({
      text: text,
      length: length
    });
  }

  render() {
    let splittedString = this.state.text.split("");
    let chars = null;
    if(this.state.length >= 5) {
      chars = (
        <div>
          {splittedString.map((ch, index) => {
            return <CharComponent char={ch}
                      key={index+ch}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <InputComponent 
          inputLength={this.state.length}
          change={this.changedLengthHandler}
        />
        <ValidationComponent 
          inputLength={this.state.length}
        />
        {chars}
      </div>
    );
  }
}

export default App;
