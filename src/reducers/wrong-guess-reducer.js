import * as milka from './../actions/ActionTypes';

export default (state = 0, action) => {
  const { value } = action;
  switch (action.type) {
    case milka.ADD_WRONG_GUESS:
      const updateWrongGuesses = state + value;
      return updateWrongGuesses;
    case milka.RESET_WRONG_GUESSES:
      return 0;
    default:
      return state;
  }
};