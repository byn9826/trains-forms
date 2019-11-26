import React, { useContext } from 'react';
import TrainsContext from '../helpers/context';
import * as Props from '../helpers/props';

const TrainsInput = ({ field, disabled, elementStyle }) => {
  const trainsContext = useContext(TrainsContext);
  const { data, configs, actions } = trainsContext;

  switch (configs.theme) {
    case 'Semantic':
    default:
      return (
        <input
          type="text"
          style={elementStyle}
          key={field.name}
          disabled={disabled}
          name={field.name}
          value={data[field.name]}
          placeholder={field.placeholder}
          onChange={(e) => actions.onChange(field, e.target.value)}
        />
      );
  }
};

export default TrainsInput;

TrainsInput.defaultProps = Props.elementDefault;

TrainsInput.propTypes = Props.elementTypes;
