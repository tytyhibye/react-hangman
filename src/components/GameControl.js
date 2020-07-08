import React from 'react';
import HangmanBody from './HangmanBody';
import LetterBoard from './LetterBoard';
import Words from './Words';
import BlankLetters from './BlankLetters';
import _ from 'underscore';
import PropTypes from 'prop-types';
import * as kiwi from '../actions';
import { connect } from 'react-redux';


class GameControl extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      correctGuesses: 0
    }
    
  }
  

  newGame = () => {
    const { dispatch } = this.props;
    const firstAction = kiwi.getWord();
    dispatch(firstAction);
    const secondAction = kiwi.resetGuesses();
    dispatch(secondAction);
    const thirdAction = kiwi.resetWrongGuesses();
    dispatch(thirdAction);
  }

  getHint = () => {
    const { dispatch } = this.props;
    const theHint = this.props.hint; // need to fix this
    dispatch(theHint)
  }

  secretWord(){
    return this.props.word.split('').map(letter => (this.props.guesses.has(letter) ? letter : " _ "));
  };

  handleGuess = (letter) => {
    const { dipatch } = this.props;
    const firstAction = kiwi.addGuess(letter);
    dispatch(firstAction);
    const secondAction = this.props.word.includes(letter) ? kiwi.wrongGuess(0) : kiwi.wrongGuess(1);
    dispatch(secondAction);
    if(this.props.word.includes(letter)){
      const updatedCount = this.state.correctGuesses += 1;
      this.setState({correctGuesses: updatedCount});
    }
  };

  render() {
    const gameOverWin = this.secretWord().join('') === this.props.word;
    const gameOverLose = this.props.wrongGuess >= 6;
    const gameOver = gameOverWin || gameOverLose;

    let gameStatus;
    if(gameOverWin) {
      gameStatus = "You saved the day!";
    }
    if (gameOverLose) {
      gameStatus = "Better luck next time!";
    }

    return(
      <React.Fragment>
        <div className="imageCard">
          <image src={images[this.props.wrongGuess]} alt="hangman"></image>
        </div>
        <div>
          <p>{!gameOver ? this.secretWord() : this.props.word}</p>
          {!gameOver ? <LetterBoard guessedLetters={this.props.guesses} onLetterClick={this.handleGuess} /> : <p>Game Over</p>}

          <p>{gameStatus}</p>
        </div>
        <div>
          {this.props.word}
        </div>
        {/* <div>
          {this.props.hint}
        </div> */}
        <button onClick={this.getHint}>Hint</button>
        <button onClick={this.newGame}>New Game</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    guesses: state.guesses,
    word: state.word.word,
    hint: state.word.hint
  }
}

GameControl = connect(mapStateToProps)(GameControl)

GameControl.propTypes = {
  guesses: PropTypes.object,
  word: PropTypes.string,
  hint: PropTypes.string
};


export default GameControl;



