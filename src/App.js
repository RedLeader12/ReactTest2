import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    letters: [],
    length: 0
  }

  letterLengthHandler = (event) => {
    const letter = event.target.value
    const letterArray = [ ]
    letterArray.push(letter)
    this.setState({letters: letterArray})
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.letterLengthHandler(event)}/>
        <p> {this.state.length} </p>
      </div>
    );
  }
}

export default App;
