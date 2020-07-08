import { getWord } from '../components/Words';
import * as milka from './../actions/ActionTypes';

export default (state = {word: "exapmle", hint:"example"}, action) => {
  switch (action.type) {
    case milka.GET_WORD:
      const currentWord = getWord();
      console.log(currentWord);
      return currentWord;
    default:
      return state;
  }
};