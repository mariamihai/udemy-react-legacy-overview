import React, { Component } from 'react';
import './App.css';

import InputComponent from './InputComponent/InputComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: "",
    splittedString: [],
    length: 0
  }

  changedLengthHandler = (event) => {
    const text = event.target.value;
    const length = event.target.value.length;

    let splittedString = text.split("");

    this.setState({
      text: text,
      splittedString: splittedString,
      length: length
    });
  }

  deleteChar = (event, index) => {
    let splittedString = [ ...this.state.splittedString];
    splittedString.splice(index, 1);

    const text = splittedString.join("");
    const length = text.length;

    this.setState({
      text: text,
      splittedString: splittedString,
      length: length
    });
  }


  render() {
    let chars = null;

    chars = (
      <div>
        {this.state.splittedString.map((ch, index) => {
          return <CharComponent char={ch}
                    key={index}
                    click={(event) => this.deleteChar(event, index)}/>
        })}
      </div>
    );

    return (
      <div className="App">
        <InputComponent 
          inputLength={this.state.length}
          value={this.state.text}
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
