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

    this.setState({
      text: text
    });
  }

  deleteCharHandler = (index) => {
    let splittedString = this.state.text.split('');
    splittedString.splice(index, 1);

    const updatedText = splittedString.join("");

    this.setState({ text: updatedText });
  }


  render() {
    const charList = (
      <div>
        {this.state.text.split('').map((ch, index) => {
          return <Char char={ch}
                    key={index}
                    click={() => this.deleteCharHandler(index)}/>
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
        {charList}
      </div>
    );
  }
}

export default App;
