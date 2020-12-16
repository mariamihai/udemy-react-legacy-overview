import React, { Component } from 'react';
import './App.css';
import Input from './UserInput/UserInput';
import Output from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'AbcAbc'
  }

  updateUsernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Input change={this.updateUsernameHandler}
          username={this.state.username}
        />
        <Output username='useruseruser'/>
        <Output username={this.state.username}/>
        <Output username={this.state.username}/>
      </div>
    );
  }
}

export default App;
