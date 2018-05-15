import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    letters: [],
    length: 0
  }

  letterInputHandler = (event) => {
    const letter = event.target.value.split('')
    this.setState({letters: letter})
    console.log(this.state.letters)
  }


  render() {
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.letterInputHandler(event)}/>
        <p> {this.state.length} </p>
      </div>
    );
  }
}

export default App;
