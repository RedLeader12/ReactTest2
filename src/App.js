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

  deleteLetterHandler = (index) => {
    const chosen = [...this.state.letters]
    chosen.splice(index,1);
    this.setState({letters: chosen})
  }


  render() {

    let letters = this.state.letters.map((letter,index) => {
      let idletter = index + 1
      return <Char 
      letter= {letter}
      key= {idletter}
      click={() => this.deleteLetterHandler(index)}
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
