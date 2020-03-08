# TrainsForms

## Install
```
npm install trains-forms --save;
npm install semantic-ui-css --save;
```

## Example
[Demos & examples](https://byn9826.github.io/trains-forms)
```
import useForm, { FORM_CONSTANTS };
import 'semantic-ui-css/semantic.min.css';

const fields = [
  {
    name: 'form_message',
    type: FORM_CONSTANTS.MESSAGE_TYPE,
    title: 'A simple example of TrainsForm',
  },
  {
    name: 'pet_name',
    type: FORM_CONSTANTS.TEXT_TYPE,
    title: 'Pet Name',
  },
  {
    name: 'pet_type',
    type: FORM_CONSTANTS.RADIO_TYPE,
    title: 'Pet Type,
  },
];

const values = {
  pet_name: 'Shilee',
};

const options = {
  user_gender: [
    { label: 'Dog', value: 1 },
    { label: 'Cat', value: 2 },
    { label: 'Bird', value: 3 },
    { label: 'Other', value: 4 },
  ],
};

const [formRender] = useForm({
  fields,
  values,
  options,
  mode: FORM_CONSTANTS.EDIT_MODE,
});

return (
  <div>
    ...
    {formRender()}
    ...
  </div>
);
```

## Configuration

### Form Props
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Effect</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fields</td>
      <td>Array: field definition objects</td>
      <td>Render form field accordingly.</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>Values</td>
      <td>Object: field name/value pairs</td>
      <td>Object keys come from field names, object values turn into field values.</td>
      <td>{}</td>
    </tr>
    <tr>
      <td>Options</td>
      <td>Object: options for select type fields</td>
      <td>Object keys come from field names, object values(Array: Objects contain label and value keys) turn into field options.</td>
      <td>{}</td>
    </tr>
    <tr>
      <td>Mode</td>
      <td>'View'/'Edit'</td>
      <td>Render fields for display/edit purpose.</td>
      <td>'Edit'</td>
    </tr>
    <tr>
      <td>onSubmit</td>
      <td>Function</td>
      <td>Built-in submit button will be rendered when provided, and this function will be called with form values if there's no validation error after submit button clicked.</td>
      <td>null</td>
    </tr>
  </tbody>
</table>

### Form Configs
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Effect</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>theme</td>
      <td>'Semantic'</td>
      <td>Determine overall styles used for form.</td>
      <td>'Semantic'</td>
    </tr>
    <tr>
      <td>spacing</td>
      <td>Number</td>
      <td>Spacing used among fields by px.</td>
      <td>20</td>
    </tr>
    <tr>
      <td>innerSpacing</td>
      <td>Number</td>
      <td>Spacing used among fields by px.</td>
      <td>10</td>
    </tr>
    <tr>
      <td>submitTitle</td>
      <td>String</td>
      <td>Customize the name of submit button.</td>
      <td>'Submit'</td>
    </tr>
    <tr>
      <td>submitError</td>
      <td>String</td>
      <td>Customize the content of error message when submit error occurs.</td>
      <td>'Please check your inputs!'</td>
    </tr>
  </tbody>
</table>

### Field Props
<table>
  <thead>
    <tr>
      <th>
        Name
      </th>
      <th>
        Value
      </th>
      <th>
        Effect
      </th>
      <th>
        Default
      </th>
      <th>
        Available to field types
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        width
      </td>
      <td>
        Number
      </td>
      <td>
        Determine the width of a field by percentage in a row.
      </td>
      <td>
        100
      </td>
      <td>
        Message, Text, Number, Password, Note, Toggle, Radio, Checkbox
      </td>
    </tr>
    <tr>
      <td>
        placeholder
      </td>
      <td>
        String
      </td>
      <td>
        Define the placeholder value of a field.
      </td>
      <td></td>
      <td>
        Text, Number, Password, Note, Toggle
      </td>
    </tr>
    <tr>
      <td>
        default
      </td>
      <td>
        Any(According to field type)
      </td>
      <td>
        Default value to be used if field value not provided by form values object.
      </td>
      <td></td>
      <td>
        Message, Text, Number, Note, Toggle, Radio, Checkbox
      </td>
    </tr>
    <tr>
      <td>
        disabled
      </td>
      <td>
        Boolean
      </td>
      <td>
        Determine a field is editable or not in Edit mode.
      </td>
      <td>
        false
      </td>
      <td>
        Message, Text, Number, Password, Note, Toggle, Radio, Checkbox
      </td>
    </tr>
    <tr>
      <td>
        required
      </td>
      <td>
        Boolean
      </td>
      <td>
        Determine a field is required or not.
      </td>
      <td>
        false
      </td>
      <td>
        Message, Text, Number, Password, Note, Toggle, Radio, Checkbox
      </td>
    </tr>
    <tr>
      <td>
        requiredError
      </td>
      <td>
        String
      </td>
      <td>
        Define the content of error message for require validation.
      </td>
      <td>
        'This field is required.'
      </td>
      <td>
        Message, Text, Number, Password, Note, Toggle, Radio, Checkbox
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        min
      </td>
      <td rowspan="3">
        Number
      </td>
      <td>
        Min character required.
      </td>
      <td rowspan="3"></td>
      <td>
        Text, Password, Note
      </td>
    </tr>
    <tr>
      <td>
        Min number required.
      </td>
      <td>
        Number
      </td>
    </tr>
    <tr>
      <td>
        Min selection required.
      </td>
      <td>
        Checkbox
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        minError
      </td>
      <td rowspan="3">
        String
      </td>
      <td rowspan="3">
        Define the content of error message for min validation.
      </td>
      <td>
        `Minimum ${field.min} characters required.`
      </td>
      <td>
        Text, Password, Note
      </td>
    </tr>
    <tr>
      <td>
        `Number is required to be no less than ${field.min}.`
      </td>
      <td>
        Number
      </td>
    </tr>
    <tr>
      <td>
        `Minimum ${field.min} selection required.`
      </td>
      <td>
        Checkbox
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        max
      </td>
      <td rowspan="3">
        Number
      </td>
      <td>
        Max character allowed.
      </td>
      <td rowspan="3"></td>
      <td>
        Text, Password, Note
      </td>
    </tr>
    <tr>
      <td>
        Max number allowed.
      </td>
      <td>
        Number
      </td>
    </tr>
    <tr>
      <td>
        Max selection allowed.
      </td>
      <td>
        Checkbox
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        maxError
      </td>
      <td rowspan="3">
        String
      </td>
      <td rowspan="3">
        Define the content of error message for max validation.
      </td>
      <td>
        `Maximum ${field.max} characters allowed.`
      </td>
      <td>
        Text, Password, Note
      </td>
    </tr>
    <tr>
      <td>
        `Number is required to be no greater than ${field.max}.`
      </td>
      <td>
        Number
      </td>
    </tr>
    <tr>
      <td>
        `Maximum ${field.max} selection allowed.`
      </td>
      <td>
        Checkbox
      </td>
    </tr>
  </tbody>
</table>
