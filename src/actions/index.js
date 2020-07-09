import * as milka from './ActionTypes';

export const getWord = () => ({
  type: milka.GET_WORD
});

export const addGuess = (letter) => ({
  type: milka.ADD_GUESS,
  value: letter
});

export const addWrongGuess = (value) => ({
  type: milka.ADD_WRONG_GUESS,
  value: value
});

export const resetGuesses = () => ({
  type: milka.RESET_GUESSES
});

export const resetWrongGuesses = () => ({
  type: milka.RESET_WRONG_GUESSES
});