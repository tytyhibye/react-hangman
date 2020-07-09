import React from 'react';
// import HangmanBody from './HangmanBody';
import LetterBoard from './LetterBoard';
// import Letter from './Letter';
import Words from './Words';
import _ from 'underscore';
import PropTypes from 'prop-types';
import * as kiwi from '../actions';
import { connect } from 'react-redux';
import { images } from "./Images";


class GameControl extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      correctGuesses: 0,
      hintDisplay: false
    };
    this.getHint = this.getHint.bind(this);
  }

  newGame = () => {
    const { dispatch } = this.props;
    const firstAction = kiwi.getWord();
    dispatch(firstAction);
    const secondAction = kiwi.resetGuesses();
    dispatch(secondAction);
    const thirdAction = kiwi.resetWrongGuesses();
    dispatch(thirdAction);
    this.setState({
      hintDisplay: false
    })
  }

  getHint = () => {
    console.log('clicked')
    this.setState({
      hintDisplay: true
    })
  }

  secretWord(){
    return this.props.word.split("").map(letter => (this.props.guesses.has(letter) ? letter : " _ "));
  };

  handleGuess = (letter) => {
    const { dispatch } = this.props;
    const firstAction = kiwi.addGuess(letter);
    dispatch(firstAction);
    const secondAction = this.props.word.includes(letter) ? kiwi.addWrongGuess(0) : kiwi.addWrongGuess(1);
    dispatch(secondAction);
    if(this.props.word.includes(letter)){
      const updatedCount = this.state.correctGuesses += 1;
      this.setState({correctGuesses: updatedCount});
    }
  };

  render() {
    let hintDisplayState = null;
    if (this.state.hintDisplay === true){
      hintDisplayState = this.props.hint
    }
    
    const gameOverWin = this.secretWord().join("") === this.props.word;
    const gameOverLose = this.props.wrongGuesses >= 6;
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
        <div className='container'>
          <div className="imageCard">
            <image src={images[this.props.wrongGuesses]} alt="hangman"/>
            {console.log(this.props.wrongGuesses)}
          </div>
          <div>
            <p>{!gameOver ? this.secretWord() : this.props.word && this.props.word}</p>
            
            {!gameOver ? <LetterBoard guessedLetters={this.props.guesses} onLetterClick={this.handleGuess} /> : <p>Game Over</p>}

            <p>{gameStatus}</p>
          </div>
          
          <div className="hint">
            {hintDisplayState}
          </div>
          
          <button onClick={this.getHint}>Hint</button>
          <button onClick={this.newGame}>New Game</button>
        </div>
      </React.Fragment>
    );
  }
} 

GameControl.propTypes = {
  guesses: PropTypes.object,
  word: PropTypes.string,
  hint: PropTypes.string,
  wrongGuesses: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    guesses: state.guesses,
    word: state.word.word,
    hint: state.word.hint,
    wrongGuesses: state.wrongGuesses
  }
}

GameControl = connect(mapStateToProps)(GameControl)

export default GameControl;



