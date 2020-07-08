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
      
    }
    // this.newGame = this.newGame.bind(this)
  }
  

  newGame = () => {
    const { dispatch } = this.props;
    const secretWord = kiwi.getWord();
    dispatch(secretWord);
  }

 
    
  render() {

    return(
      <React.Fragment>
        <div>
          {/* <BlankLetters
          word={this.state.word}
          reveal={this.state.over}
          guesses={this.state.guesses}/> */}
        </div>
        <div>
          {this.props.word}
        </div>
        <div>
          {this.props.hint}
        </div>
        <button onClick={this.getHint}>Hint</button>
        <button onClick={this.newGame}>New Game</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    word: state.word.word,
    hint: state.word.hint
  }
}

GameControl = connect(mapStateToProps)(GameControl)

GameControl.propTypes = {
  word: PropTypes.string,
  hint: PropTypes.string
};



export default GameControl;



