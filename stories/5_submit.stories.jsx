import { storiesOf } from '@storybook/react';
import useForm, { FORM_CONSTANTS } from '../src/index';
import { autoAppendTitleExample } from './helpers';

const VALUES = {
  message: 'Examples of how to use built-in submit button',
  number: 1,
  text: 'Init value for Text type field',
  radio: 1,
};

export const FIELDS = autoAppendTitleExample([
  {
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    name: 'message',
    required: true,
  },
  {
    type: FORM_CONSTANTS.TEXT_TYPE,
    name: 'text',
    required: true,
    max: 16,
  },
  {
    type: FORM_CONSTANTS.NUMBER_TYPE,
    name: 'number',
    required: true,
    min: 10,
  },
  {
    type: FORM_CONSTANTS.PASSWORD_TYPE,
    name: 'password',
    required: true,
    min: 6,
    max: 6,
  },
  {
    type: FORM_CONSTANTS.NOTE_TYPE,
    name: 'note',
    required: true,
    max: 12,
  },
  {
    type: FORM_CONSTANTS.TOGGLE_TYPE,
    name: 'toggle',
    required: true,
  },
  {
    type: FORM_CONSTANTS.RADIO_TYPE,
    name: 'radio_1',
    required: true,
  },
  {
    type: FORM_CONSTANTS.CHECKBOX_TYPE,
    name: 'checkbox_1',
    required: true,
    min: 2,
  },
]);

export const OPTIONS = {
  radio_1: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
  checkbox_1: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
};


storiesOf('Submit', module)
  .add('Built-in Button', () => {
    const [formRender] = useForm({
      values: VALUES,
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      onSubmit: (values) => window.confirm(`Success! Values: ${JSON.stringify(values)}`),
      configs: {
        submitTitle: 'Save',
        submitError: 'Something wrong with your inputs!',
      },
    });
    return formRender();
  });