export const VIEW_MODE = 'View';
export const EDIT_MODE = 'Edit';
export const MODES = [VIEW_MODE, EDIT_MODE];

export const TEXT_TYPE = 'Text';
export const PASSWORD_TYPE = 'Password';
export const EMAIL_TYPE = 'Email';
export const NUMBER_TYPE = 'Number';
export const INTEGER_TYPE = 'Integer';
export const QUANTITY_TYPE = 'Quantity';
export const NOTE_TYPE = 'Note';
export const MESSAGE_TYPE = 'Message';
export const TOGGLE_TYPE = 'Toggle';
export const RADIO_TYPE = 'Radio';
export const SWITCH_TYPE = 'Switch';
export const SINGLE_SELECT_TYPE = 'SingleSelect';
export const CHECKBOX_TYPE = 'Checkbox';
export const ITEMS_TYPE = 'Items';
export const DATE_TYPE = 'Date';
export const TYPES = [
  MESSAGE_TYPE,
  TEXT_TYPE,
  EMAIL_TYPE,
  NUMBER_TYPE,
  INTEGER_TYPE,
  QUANTITY_TYPE,
  PASSWORD_TYPE,
  NOTE_TYPE,
  TOGGLE_TYPE,
  RADIO_TYPE,
  SINGLE_SELECT_TYPE,
  SWITCH_TYPE,
  CHECKBOX_TYPE,
  ITEMS_TYPE,
  DATE_TYPE,
];

export const SEMANTIC_THEME = 'Semantic';
export const BOOTSTRAP_THEME = 'Bootstrap';
export const THEMES = [SEMANTIC_THEME, BOOTSTRAP_THEME];

export const TEXT_ICONS = {
  CLOSE: 'close',
  DROPDOWN: 'dropdown',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
};

export const EMAIL_REGX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
