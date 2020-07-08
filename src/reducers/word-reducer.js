import { getWord } from '../components/Words';
import * as milka from './../actions/ActionTypes';

export default (state = {name: 'example', hint:'example'}, action) => {
  switch (action.type) {
    case milka.GET_WORD:
      const currentWord = getWord();
      return currentWord;
    default:
      return state;
  }
};