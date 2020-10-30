import { Loading, date } from 'quasar'
const { formatDate } = date

export const mockGameInfoHttpRequest = async url => {
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

export const asyncRequestWithLoader = async (
  { loadingMessage, tryCb, catchCb, finallyCb }
  = { loadingMessage: null, tryCb: null, catchCb: null, finallyCb: null }) => {
  loadingMessage ? Loading.show({ message: loadingMessage }) : null
  try {
    await tryCb()
  } catch(error) {
    catchCb ? await catchCb(error) : null
  } finally {
    finallyCb ? await finallyCb() : null
    loadingMessage ? Loading.hide() : null
  }
}

export const errorMessageFromApiResponse = error => {
  let errorBody = error.response.data.message ? [error.response.data.message] : ['There was an error.']
  if (error.response.data.errors) {
    for (let value of Object.values(error.response.data.errors)) {
      errorBody.push(value)
    }
  }
  return errorBody.join(' ')
}

export const validAlphaNumericString = value => {
  const universalCharSupportedAlphaNumRegex = /^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9 _.-]+)$/
  return !!value.trim().match(universalCharSupportedAlphaNumRegex)
}

export const validEmailString = value => {
  const validBasicEmailRegex = /\S+@\S+\.\S+/
  return !!value.trim().match(validBasicEmailRegex)
}

export const isMatchingPasswords = (pass1, pass2) => {
  return pass1.trim() === pass2.trim()
}

export const dateFromUnixTimestamp = unixTimestamp => {
  const timestamp = unixTimestamp * 1000
  return formatDate(parseInt(timestamp, 10), 'MMMM D YYYY')
}
