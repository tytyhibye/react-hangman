import _ from 'underscore';
import React from 'react';
import LetterBoard from './LetterBoard';
import PropTypes from 'prop-types';
import * as kiwi from '../actions';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { images } from "./Images";
// import Words from './Words';

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
    return this.props.word.split("").map(letter => (this.props.guesses.has(letter) ? letter : " __ "));
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
      gameStatus = <h2>You saved the day!</h2>;
    }
    if (gameOverLose) {
      gameStatus = <h2>Better luck next time!</h2>;
    }

    return(
      <React.Fragment>
        <div className="container">
          <div className="imageCard">
            <img className="hangMan" src={images[this.props.wrongGuesses]}alt="hangman"/>
            {console.log(this.props.wrongGuesses)}
          </div>
          <div>
            {/* <h4>Wrong Guesses: {this.props.wrongGuesses} / 6</h4> */}
            <p>{!gameOver ? this.secretWord() : <h4>The word was... {this.props.word}</h4>}</p> 
            <br></br>
            {!gameOver ? <LetterBoard guessedLetters={this.props.guesses} onLetterClick={this.handleGuess} /> : <p></p>}

            <p>{gameStatus}</p>
          </div>
          <div className="hint">
            {hintDisplayState}
          </div>
          <Button color='success' onClick={this.getHint}>Hint</Button>
          <Button color='dark' onClick={this.newGame}>New Game</Button>
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



