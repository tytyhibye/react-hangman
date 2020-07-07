import React from 'react';
import HangmanBody from './HangmanBody';
import LetterBoard from './LetterBoard';
import Words from './Words';
import BlankLetters from './BlankLetters';
import _ from 'underscore';
import PropTypes from 'prop-types';

class GameControl extends React.Component {
  
  
  constructor(props) {
    super(props)
    this.state = {
      currentWord: null,
      currentHint: null,
    }
    // this.newGame = this.newGame.bind(this)
  }
  

  // newGame(props) {
  //   const secretWord = randomKey.word;
  //   const secretHint = randomKey.hint;
  //   this.setState({
  //     currentWord: secretWord,
  //     currentHint: secretHint
  //   })
  // }

 
    
  render() {

    return(
      <React.Fragment>
        <div>
          <BlankLetters
          word={this.state.word}
          reveal={this.state.over}
          guesses={this.state.guesses}/>
        </div>
        <div>
          {this.state.currentWord}
        </div>
        <div>
          {this.state.currentHint}
        </div>
        <button onClick={this.getHint}>Hint</button>
        <button onClick={this.newGame}>New Game</button>
      </React.Fragment>
    );
  }
}


export default GameControl;



