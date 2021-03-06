import React from 'react';
import { storiesOf } from '@storybook/react';
import useForm, { FORM_CONSTANTS, FormComponents } from '../src/index';
import { autoAppendTitleExample, useThemeSwitcher } from './helpers';

const VALUES = {
  message: 'Examples of how to use validateFormValues action',
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
    type: FORM_CONSTANTS.INTEGER_TYPE,
    name: 'integer',
    required: true,
    max: 10,
  },
  {
    type: FORM_CONSTANTS.QUANTITY_TYPE,
    name: 'quantity',
    default: 11,
    max: 10,
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
  {
    type: FORM_CONSTANTS.SINGLE_SELECT_TYPE,
    name: 'single_select',
    required: true,
  },
  {
    type: FORM_CONSTANTS.SWITCH_TYPE,
    name: 'switch',
    required: true,
  },
  {
    type: FORM_CONSTANTS.DATE_TYPE,
    name: 'date',
    required: true,
  },
  {
    type: FORM_CONSTANTS.EMAIL_TYPE,
    name: 'email',
    required: true,
  },
  {
    type: FORM_CONSTANTS.ITEMS_TYPE,
    name: 'items',
    required: true,
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
  single_select: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
  switch: [
    { label: 'Option A', value: 0 },
    { label: 'Option B', value: 1 },
    { label: 'Option C', value: 2 },
  ],
};

const fileName = '06_form_action';

storiesOf('Form Action', module)
  .add('validateFormValues Action', () => {
    const [theme, themSwitcherRender] = useThemeSwitcher({ fileName });
    const [formRender, { validateFormValues }] = useForm({
      values: VALUES,
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      theme,
    });
    return (
      <div>
        {themSwitcherRender()}
        {formRender()}
        <FormComponents.Button
          title="Trigger validation on all fields"
          onClick={validateFormValues}
          style={{
            marginLeft: 20,
          }}
          theme={theme}
        />
      </div>
    );
  })
  .add('resetFormValues Action', () => {
    const [theme, themSwitcherRender] = useThemeSwitcher({ fileName });
    const [formRender, { resetFormValues }] = useForm({
      values: {
        ...VALUES,
        message: 'Example of how to use resetFormValues action',
      },
      fields: FIELDS,
      options: OPTIONS,
      mode: FORM_CONSTANTS.EDIT_MODE,
      theme,
    });
    return (
      <div>
        {themSwitcherRender()}
        {formRender()}
        <FormComponents.Button
          title="Reset to initial values"
          theme={theme}
          onClick={resetFormValues}
          style={{
            marginLeft: 20,
          }}
        />
      </div>
    );
  });
