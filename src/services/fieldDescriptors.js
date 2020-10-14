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

import { validAlphaNumericString, validEmailString } from './utils'

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
      dense: true,
      label: 'Name',
      rules: [
        val => val && !!val.trim() || 'Field is required',
        val => val && validAlphaNumericString(val.trim()) || 'Name may only contain letters and/or numbers',
      ],
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
      dense: true,
      label: 'Email',
      rules: [
        val => val && !!val.trim() || 'Field is required',
        val => val && validEmailString(val.trim()) || 'Email must be in correct format (x@y.z)',
      ],
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
      dense: true,
      rules: [
        val => val && !!val.trim() || 'Field is required',
        val => val && val.trim().length > 7 || 'Password must be at least 8 characters long',
      ],
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

const confirmPassword = {
  component: 'q-input',
  model: 'confirmPassword',
  fieldOptions: {
    class: [],
    on: { input: true },
    attrs: {
      placeholder: 'Confirm your password',
      _type: 'password',
    },
    props: {
      outlined: true,
      dense: true,
      label: 'Confirm Password',
      rules: [
        val => val && !!val.trim() || 'Field is required',
        val => val && val.trim().length > 7 || 'Password must be at least 8 characters long',
      ],
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

const gameUrl = {
  component: 'q-input',
  model: 'url',
  fieldOptions: {
    class: [],
    on: { input: true },
    attrs: {
      placeholder: 'https://example.com',
      required: true,
      _type: 'url',
    },
    props: {
      outlined: true,
      dense: true,
      label: 'URL *',
      rules: [val => val && !!val.trim() || 'Field is Required'],
    },
  },
}

const gameName = {
  component: 'q-input',
  model: 'gameName',
  fieldOptions: {
    class: [],
    on: { input: true },
    attrs: {
      placeholder: 'Enter the game name',
      required: true,
      _type: 'text',
    },
    props: {
      outlined: true,
      dense: true,
      label: 'Name *',
      rules: [val => val && !!val.trim() || 'Field is required'],
    },
  },
}

const gameTags = {
  component: 'q-select',
  model: 'tags',
  fieldOptions: {
    class: [],
    on: { input: true },
    attrs: {
      placeholder: 'Add one or multiple',
      _type: 'text',
    },
    props: {
      outlined: true,
      dense: true,
      multiple: true,
      'use-chips': true,
      'use-input': true,
      'hide-dropdown-icon': true,
      'new-value-mode': 'add-unique',
      label: 'Tags',
      rules: [''],
    },
  },
}

const gameShortDescription = {
  component: 'q-input',
  model: 'shortDescription',
  fieldOptions: {
    class: [],
    on: { input: true },
    attrs: {
      placeholder: 'Enter short description',
      required: true,
      _type: 'textarea',
    },
    props: {
      outlined: true,
      dense: true,
      label: 'Short Description *',
      rules: [val => val && !!val.trim() || 'Field is required'],
    },
  },
}

const fieldDescriptors = {
  name,
  email,
  password,
  confirmPassword,
  gameUrl,
  gameName,
  gameTags,
  gameShortDescription,
}

export const descriptor = fieldName => {
  return fieldDescriptors[fieldName] ? fieldDescriptors[fieldName] : throw new Error(`Field Descriptor for ${fieldName} is not defined`)
}
