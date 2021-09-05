import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const {
    id,
    name,
    labelText,
    options,
    onChange,
    testID,
  } = props;
  return (
    <label
      htmlFor={ id }
    >
      { labelText }
      <select
        name={ name }
        id={ id }
        onChange={ onChange }
        data-testid={ testID }
      >
        {
          options ? options.map((item, index) => (
            <option
              key={ index }
              value={ item }
            >
              { item }
            </option>
          )) : null
        }
      </select>
    </label>
  );
}

const { string, array, func } = PropTypes;

Select.propTypes = {
  id: string,
  name: string,
  labelText: string,
  options: array,
  onChange: func,
  testID: string,
}.isRequired;

export default Select;
