import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, testid, value, onChange } = this.props;

    if (type === 'checkbox') {
      return (
        <div>
          <label htmlFor={ name }>
            <input
              name={ name }
              type={ type }
              data-testid={ testid }
              checked={ value }
              onChange={ onChange }
            />
          </label>
        </div>
      );
    }

    return (
      <div>
        <label htmlFor={ name }>
          <input
            name={ name }
            type={ type }
            data-testid={ testid }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
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
