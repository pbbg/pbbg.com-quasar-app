import { Notify } from 'quasar'

export const messages = {
  register: name => ({
    message: `Welcome, ${name}!`,
    color: 'info',
    type: 'info',
  }),
  failRegister: message => ({
    message: `${message || 'Whoops! There was an issue trying to register.'}`,
    color: 'negative',
    type: 'negative',
  }),
  failLogin: {
    message: 'Whoops! There was an issue trying to login.',
    color: 'negative',
    type: 'negative',
  },
  failGameSubmit: message => ({
    message: `${message || 'Oh noes! There was an issue trying to submit your game.'}`,
    color: 'negative',
    type: 'negative',
  }),
  invalidLogin: {
    message: 'Failed to login with the provided email and password.',
    color: 'negative',
    type: 'negative',
  },
  failGetUser: {
    message: 'Whoops! There was an issue trying to retrieve your user profile',
    color: 'negative',
    type: 'negative',
  },
  dataLoadedForGame: url => ({
    message: `Data loaded for ${url}`,
    color: 'gray-8',
    type: 'info',
  }),
  gameSubmitted: gameName => ({
    message: `Success! You submitted a new game: ${gameName}`,
  }),
  passwordsMustMatch: {
    message: 'Passwords must match!',
    color: 'negative',
    type: 'negative',
  },
}

export const notify = options => {
  Notify.create({
    message: options.message ? options.message : 'Success!',
    position: options.position ? options.position : 'bottom',
    color: options.color ? options.color : 'positive',
    type: options.type ? options.type : 'positive',
    actions: options.actions ? options.actions : [
      { label: 'Dismiss', color: 'white', handler: options.handler ? options.handler : () => { } },
    ],
  })
}
