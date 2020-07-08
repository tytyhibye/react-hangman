import * as milka from './../../actions/ActionTypes';
import * as actions from './../../actions';

describe('hangman actions', () => {
  it('getWord should create GET_WORD action', () => {
    expect(actions.getWord()).toEqual({
      type: milka.GET_WORD
    });
  });
  it('addWrongGuess should create ADD_WRONG_GUESS action', () => {
    expect(actions.addWrongGuess()).toEqual({
      type: milka.ADD_WRONG_GUESS
    });
  });
  it('addGuess should create ADD_GUESS action', () => {
    expect(actions.addGuess('t')).toEqual({
      type: milka.ADD_GUESS,
      value: 't'
    });
  });
  it('resetGuesses should create RESET_GUESSES action', () => {
    expect(actions.resetGuesses()).toEqual({
      type: milka.RESET_GUESSES
    });
  });
  it('resetWrongGuesses should create RESET_WRONG_GUESSES action', () => {
    expect(actions.resetWrongGuesses()).toEqual({
      type: milka.RESET_WRONG_GUESSES
    });
  });
});