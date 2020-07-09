import { getWord } from '../components/Words';
import * as milka from './../actions/ActionTypes';

export default (state = {word: "chisato", hint: "Murukami"}, action) => {
  switch (action.type) {
    case milka.GET_WORD:
      const currentWord = getWord();//random word obj
      return currentWord;
    default:
      return state;
  }
};