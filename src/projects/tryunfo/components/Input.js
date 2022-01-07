import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { type, name, testid, value, onChange } = props;

  if (type === 'checkbox') {
    return (
      <div>
        <label htmlFor={name}>
          <input name={name} type={type} checked={value} onChange={onChange} />
        </label>
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={name}>
        <input name={name} type={type} value={value} onChange={onChange} />
      </label>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
