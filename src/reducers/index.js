import letterBoardReducer from './letterboard-reducer';
import wordReducer from './word-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  guesses: letterBoardReducer,
  word: wordReducer
});

export default rootReducer;