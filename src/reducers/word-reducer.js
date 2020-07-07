import { getWord } from '../components/Words';
import * as milka from './../actions/ActionTypes';

export default (state = "travis", action) => {
  switch (action.type) {
    case milka.GET_WORD:
      const currentWord = getWord.word;
      return currentWord;
      default:
        return state;
  }
};