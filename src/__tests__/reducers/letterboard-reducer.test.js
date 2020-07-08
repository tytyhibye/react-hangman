import letterBoardReducer from '../../reducers/letterboard-reducer';
import * as milka from '../../actions/ActionTypes';

describe('letterBoardReducer', ()=> {

  test('Should return default state if there is no action type passed to the reducer', () => {
    expect(letterBoardReducer(new Set(), {type: null})).toEqual(new Set());
  });

  test('Should add a letter to guessed letter set object', () => {
    const value = 't';
    const action ={
      type: milka.ADD_GUESS,
      value: value
    };
    expect(letterBoardReducer(new Set(), action)).toContain('t');
  });

  test('Should reset guessed list to a new set object', () => {
    const action ={
      type: milka.RESET_GUESSES
    };
    expect(letterBoardReducer(new Set(), action)).toEqual(new Set());
  });
});