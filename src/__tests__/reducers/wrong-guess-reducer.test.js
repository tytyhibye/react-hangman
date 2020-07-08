import wrongGuessReducer from '../../reducers/wrong-guess-reducer';
import * as milka from '../../actions/ActionTypes';

describe('wrongGuessReducer', () => {

  test('Should return default state if no action type is specified', () => {
    expect(wrongGuessReducer(0, { type: null })).toEqual(0);
  });

  test('should add 1 to wrong guesses', () => {
    const action = {
      type: milka.ADD_WRONG_GUESS,
      value: 1
    };
    expect(wrongGuessReducer(0, action)).toEqual(1);
  });

  test('Should reset wrong guesses to 0', () => {
    const action = {
      type: milka.RESET_WRONG_GUESSES
    };
    expect(wrongGuessReducer(1, action)).toEqual(0);
  });
});