import { BOOTSTRAP_THEME, SEMANTIC_THEME } from './constants';
import { buildClassNames } from './builder';

export const getFieldClass = (theme, error) => {
  let className;
  switch (theme) {
    case BOOTSTRAP_THEME:
      className = buildClassNames({
        'form-control': true,
        'is-invalid': error,
      });
      break;
    case SEMANTIC_THEME:
    default:
      className = null;
      break;
  }
  return className;
};

export const getLoaderClass = (theme) => {
  let className;
  switch (theme) {
    case BOOTSTRAP_THEME:
      className = 'spinner-border';
      break;
    case SEMANTIC_THEME:
    default:
      className = 'ui active loader medium';
      break;
  }
  return className;
};

export const getHintClass = (theme) => {
  let className;
  switch (theme) {
    case BOOTSTRAP_THEME:
      className = 'invalid-feedback';
      break;
    case SEMANTIC_THEME:
    default:
      className = 'ui pointing red basic label';
      break;
  }
  return className;
};

export const getMessageClass = (theme, disabled) => {
  let className;
  switch (theme) {
    case BOOTSTRAP_THEME:
      className = disabled ? 'text-muted' : null;
      break;
    case SEMANTIC_THEME:
    default:
      className = null;
      break;
  }
  return className;
};

export const getFormClass = (theme) => {
  let className;
  switch (theme) {
    case BOOTSTRAP_THEME:
      className = null;
      break;
    case SEMANTIC_THEME:
    default:
      className = 'ui form';
      break;
  }
  return className;
};

export const getToggleClasses = (theme) => {
  let classNames;
  switch (theme) {
    case BOOTSTRAP_THEME:
      classNames = {
        toggle: 'custom-control custom-switch',
        toggleInput: 'custom-control-input',
        toggleLabel: 'custom-control-label',
      };
      break;
    case SEMANTIC_THEME:
    default:
      classNames = {
        toggle: 'ui toggle checkbox',
        toggleInput: null,
        toggleLabel: null,
      };
      break;
  }
  return classNames;
};