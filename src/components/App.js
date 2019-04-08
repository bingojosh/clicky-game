import React, { Component } from 'react';
import '../App.css';
import {Card} from './Card.js'
import fonzies from '../fonzies.json';

class App extends Component {

  state = {
    score: 0,
    fonz: this.setFalse(fonzies)
  }

  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  setFalse(arr) {
    arr.forEach((x,i,arr) => arr[i].clicked = false)
    return arr
  }

  handleClick = (clicked, url) => {
    if(clicked){
      alert("Womp Womp. Try Again.")
      this.resetScore();
    }
    else {
      
      // If this card was not clicked yet, find the index of the card in state.fonz and set its clicked value to true then reshuffle the cards
      var tempFonz = this.state.fonz
      tempFonz[tempFonz.findIndex(f => f.url === url)].clicked = true;
      this.setState( { score: this.state.score + 1, fonz: this.shuffleArray(tempFonz) });
    }
  }

  increaseScore() {
    this.setState({ score: this.state.score+1})
  }

  resetScore() {
    this.setState( {score: 0, fonz: this.shuffleArray(this.setFalse(fonzies))})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Welcome to the coolest clicky game on the internet.
          </h1>
          <h5>Click each card once to earn a point but click the same card twice and you lose. Be careful, the cards are tricky and move when clicked.</h5>
        </header>
        <div className="container">
          <div className="row"><div>{this.state.fonz.map((u,i) => <Card url={u.url} key={i} handleClick={this.handleClick} clicked={u.clicked}/>)}</div>
          </div>
          <div className="row">
            <div className="col mx-auto">
              <span className="score h1 ">Score: </span> <span className="score h2 mt-2">{this.state.score}</span></div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
