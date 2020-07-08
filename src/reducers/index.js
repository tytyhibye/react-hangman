import letterBoardReducer from './letterboard-reducer';
import wordReducer from './word-reducer';
import wrongGuessReducer from './wrong-guess-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  guesses: letterBoardReducer,
  word: wordReducer,
  wrongGuesses: wrongGuessReducer
});

export default rootReducer;