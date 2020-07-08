import * as milka from './ActionTypes';

export const getWord = () => ({
  type: milka.GET_WORD
});

export const resetGuesses = () => ({
  type: milka.RESET_GUESSES
});

export const resetWrongGuesses = () => ({
  type: milka.RESET_WRONG_GUESSES
});

export const addGuess = (letter) => ({
  type: milka.ADD_GUESS,
  value: letter
});

export const addWrongGuess = () => ({
  type: milka.ADD_WRONG_GUESS
});