import React from 'react';
import PropTypes from 'prop-types';

function Letter(props) {
  return (
    <React.Fragment>
      <button onClick={() => props.whenLetterClicked(props.currentLetter)}>{props.currentLetter}</button>
    </React.Fragment>
  );
}

Letter.propTypes = {
  currentLetter: PropTypes.string,
  id: PropTypes.string,
  whenLetterClicked: PropTypes.func
}

export default Letter;

