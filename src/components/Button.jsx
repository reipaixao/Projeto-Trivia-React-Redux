import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
  const { category, id, onClick, testID, text, disabled } = props;
  return (
    <button
      type={ category ? 'button' : 'submit' }
      id={ id }
      onClick={ onClick }
      data-testid={ testID }
      disabled={ disabled }
    >
      { text }
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  testID: PropTypes.string,
  text: PropTypes.string,
}.isRequired;

export default Button;
