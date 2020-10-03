/*
 * Field Descriptor api
 * ============
 * NOTE: also remember to import the Quasar UI Component (i.e. QInput, etc..) via quasar.conf.js if it
 * hasn't been used before.
 *
 *
 * const <field-name> = {
 *    component: '<ui-component-name>',
 *    default: '',               // Default value
 *    model: '<model-field-name>',
 *    fieldOptions: {
 *       attrs: {                // Native component attributes
 *          _type: 'password'    // Prefix keyword with '_'
 *       },
 *       class: [],
 *       key: '',
 *       id: '',
 *       on: {
 *          input: true,         // Required to update model
 *          <event-name>: <event-function>,
 *       },
 *       props: {},              // Custom component attributes
 *       ref: '',
 *       slot: '',               // Named slot for 'template' components
 *       style: {},
 *    },
 *    children: []
 * }
 *
 *
 */

const name = {
  component: 'q-input',
  model: 'name',
  fieldOptions: {
    class: [],
    on: { input: true },
    attrs: {
      placeholder: 'Enter your full name',
      _type: 'text',
    },
    props: {
      outlined: true,
      label: 'Name',
      rules: [val => !!val || 'Field is required'],
    },
  },
}

const email = {
  component: 'q-input',
  model: 'email',
  fieldOptions: {
    class: [],
    on: { input: true },
    attrs: {
      placeholder: 'Enter your email address',
      _type: 'email',
    },
    props: {
      outlined: true,
      label: 'Email',
      rules: [val => !!val || 'Field is required'],
    },
  },
  children: [
    {
      component: 'template',
      fieldOptions: {
        slot: 'prepend',
      },
      children: [
        {
          component: 'q-icon',
          fieldOptions: {
            class: ['cursor-pointer'],
            props: {name: 'mail'},
          },
        },
      ],
    },
  ],
}

const password = {
  component: 'q-input',
  model: 'password',
  fieldOptions: {
    class: [],
    on: { input: true },
    attrs: {
      placeholder: 'Enter your password',
      _type: 'password',
    },
    props: {
      outlined: true,
      label: 'Password',
      rules: [val => !!val || 'Field is required'],
    },
  },
  children: [
    {
      component: 'template',
      fieldOptions: {
        slot: 'prepend',
      },
      children: [
        {
          component: 'q-icon',
          fieldOptions: {
            class: ['cursor-pointer'],
            props: {name: 'lock'},
          },
        },
      ],
    },
  ],
}

const fieldDescriptors = {
  name,
  email,
  password,
}

export function descriptor(fieldName) {
  return fieldDescriptors[fieldName] ? fieldDescriptors[fieldName] : throw new Error(`Field Descriptor for ${fieldName} is not defined`)
}

export default () => {
  return fieldDescriptors
}
