import React, { Component } from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'
import './App.css';

class App extends Component {

  state = {
    letters: [],
    length: 0
  }

  letterInputHandler = (event) => {
    const letter = event.target.value.split('')
    const length = letter.length
    this.setState({letters: letter, length: length})
  }


  render() {

    let letters = this.state.letters.map(letter => {
      return <Char 
      letter= {letter}
      />
    })

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.letterInputHandler(event)}/>
        < Validation length={this.state.length}/>
        {letters}
      </div>
    );
  }
}

export default App;
