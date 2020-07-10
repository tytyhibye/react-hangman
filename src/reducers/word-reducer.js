import { getWord } from '../components/Words';
import * as milka from './../actions/ActionTypes';

export default (state = {word: 'modularity', hint: 'The "tubular" of coding'}, action) => {
  switch (action.type) {
    case milka.GET_WORD:
      const currentWord = getWord();//random word obj
      return currentWord;
    default:
      return state;
  }
};