import React, { Component } from 'react';
import './App.css';

import Input from './Input/Input';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    text: "",
    splittedString: []
  }

  changedLengthHandler = (event) => {
    const text = event.target.value;

    let splittedString = text.split("");

    this.setState({
      text: text,
      splittedString: splittedString
    });
  }

  deleteChar = (event, index) => {
    let splittedString = [ ...this.state.splittedString];
    splittedString.splice(index, 1);

    const text = splittedString.join("");

    this.setState({
      text: text,
      splittedString: splittedString
    });
  }


  render() {
    let chars = null;

    chars = (
      <div>
        {this.state.splittedString.map((ch, index) => {
          return <Char char={ch}
                    key={index}
                    click={(event) => this.deleteChar(event, index)}/>
        })}
      </div>
    );

    return (
      <div className="App">
        <Input
          inputLength={this.state.text.length}
          value={this.state.text}
          change={this.changedLengthHandler}
        />
        <Validation 
          inputLength={this.state.text.length}
        />
        {chars}
      </div>
    );
  }
}

export default App;
