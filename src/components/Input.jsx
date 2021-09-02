import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { type, name, id, labelText, placeholder, testID, onChange } = props;
  return (
    <label
      htmlFor={ id }
    >
      { labelText }
      <input
        type={ type }
        name={ name }
        id={ id }
        placeholder={ placeholder }
        data-testid={ testID }
        onChange={ onChange }
      />
    </label>
  );
}

const { string, func } = PropTypes;

Input.propTypes = {
  type: string,
  name: string,
  id: string,
  labelText: string,
  placeholder: string,
  testID: string,
  onChange: func,
}.isRequired;

export default Input;
