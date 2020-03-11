import React from 'react';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME, MESSAGE_TYPE } from '../helpers/constants';
import {
  isStringType,
  isNumberType,
  isSelectType,
  isBooleanType,
  isArrayType,
} from '../helpers/validation';

export default function Message({
  style,
  value,
  options,
  theme,
  type,
}) {
  let labelValue = value;
  const isDefaultValue = type === MESSAGE_TYPE
    || isStringType(type)
    || isNumberType(type);
  if (!isDefaultValue) {
    if (isBooleanType(type)) {
      labelValue = value ? 'True' : 'False';
    } else if (isSelectType(type)) {
      const matchedOption = options.find((option) => option.value === value);
      if (matchedOption) {
        labelValue = matchedOption.label;
      }
    } else if (isArrayType(type)) {
      const matchedOptions = [];
      options.forEach((option) => {
        if (!value.includes(option.value)) {
          return;
        }
        matchedOptions.push(option.label);
      });
      if (matchedOptions.length !== 0) {
        labelValue = matchedOptions.join(', ');
      }
    }
  }
  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return <p style={style}>{labelValue}</p>;
  }
}

Message.propTypes = Types.ELEMENT_TYPE;
