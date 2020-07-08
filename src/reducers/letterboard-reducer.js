import * as milka from './../actions/ActionTypes';

export default (state = new Set(), action) => {
  const { value } = action;
  switch(action.type) {
    case milka.ADD_GUESS:
      state.add(value);
      return state;
    case milka.RESET_GUESSES:
      const resetSet = new Set();
      return resetSet;
    default:
      return state;
  }
};