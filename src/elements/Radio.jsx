import React from 'react';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME } from '../helpers/constants';

export default function Radio({
  disabled,
  style,
  name,
  value,
  options = [],
  theme,
  onChange,
}) {
  const onClick = (option) => onChange(name, option.value);

  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <div
          className="inline fields"
          style={{
            ...style,
            flexWrap: 'wrap',
          }}
        >
          {
            options.map((option) => (
              <div
                key={option.value}
                className="field"
                onClick={() => onClick(option)}
                onKeyDown={() => onClick(option)}
                role="button"
              >
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name={name}
                    checked={value === option.value}
                    className="hidden"
                    readOnly
                    tabIndex="0"
                    disabled={disabled}
                  />
                  <label>{option.label}</label>
                </div>
              </div>
            ))
          }
        </div>
      );
  }
}

Radio.propTypes = Types.ELEMENT_TYPE;