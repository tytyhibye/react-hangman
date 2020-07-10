import letterBoardReducer from '../../reducers/letterboard-reducer';
import wrongGuessReducer from '../../reducers/wrong-guess-reducer';
import { wordList } from '../../components/Words';
import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import * as milka from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', ()=> {
  let action;

  test('Should return default state if no action type is specified', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      guesses: new Set([]),
      wrongGuesses: 0,
      word: {
        hint: 'The "tubular" of coding',
        word: 'modularity',
      },
    });
  });

  test('Check that new state of wrongGuessReducer matches rootReducer', () => {
    action = {
      type: milka.ADD_WRONG_GUESS,
      value: 1
    };
    store.dispatch(action);
    expect(store.getState().wrongGuesses).toEqual(wrongGuessReducer(undefined, action));
  });

  test('Check that new state of letterBoardReducer matches rootReducer', () => {
    action = {
      type: milka.ADD_GUESS,
      value: 't'
    };
    store.dispatch(action);
    expect(store.getState().guesses).toEqual(letterBoardReducer(undefined, action));
  });

  test('Check that new state of getWordReducer matches rootReducer', () => {
    action ={
      type: milka.GET_WORD
    };
    store.dispatch(action);
    expect(wordList.includes(store.getState().word)).toBe(true);
  });
});