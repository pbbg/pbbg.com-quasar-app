import {Notify} from 'quasar'

export function mockGameInfoHttpRequest(url) {
  // mocking the api request until the endpoint is implemented
  return new Promise(resolve => {
    const data = {
      canonicalUrl: url,
      metaTitle: 'SomeMetaTitle',
      metaDescription: 'Some Meta Description Goes here....',
      image: 'https://www.imageHostedSomewhere.png',
    }
    setTimeout(() => {
      resolve({ data })
    }, 1000)
  })
}

export function notify(options) {
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

export function validAlphaNumericString(value) {
  const universalCharSupportedAlphaNumRegex = /^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9 _.-]+)$/
  return !!value.trim().match(universalCharSupportedAlphaNumRegex)
}

export function validEmailString(value) {
  const validBasicEmailRegex = /\S+@\S+\.\S+/
  return !!value.trim().match(validBasicEmailRegex)
}

export function isMatchingPasswords(pass1, pass2) {
  return pass1.trim() === pass2.trim()
}
