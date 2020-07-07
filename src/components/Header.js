import React from 'react';

function Header(){
  return (
    <React.Fragment>
      <h2> Hangman </h2>
      <p>Click on a letter of the alphabet to guess that letter, but beware, you only have six guesses to get it right!</p>
    </React.Fragment>
  );
}

export default Header;