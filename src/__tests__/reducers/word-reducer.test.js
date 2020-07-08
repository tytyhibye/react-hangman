import wordReducer from '../../reducers/word-reducer';
import { wordList } from '../../components/Words';
import * as milka from '../../actions/ActionTypes';

describe('wordReducer', () => {
  test('Should set secret word to a random word from word list', () => {
    const action = {
      type: milka.GET_WORD
    };
    expect(wordList.includes(wordReducer(null, action))).toBe(true);
  });
})