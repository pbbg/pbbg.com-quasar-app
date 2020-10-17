import axios from 'axios'
import auth from '../services/auth'
import { USER_PROFILE_UPDATED_ACTION } from '../store'

const setBaseUrl = () => {
  const isLocalHost = window.location.origin.includes('localhost')
  const isDevEnvironment = window.location.origin.includes('dev-api.pbbg.com')
  const apiBaseUrl = (isLocalHost || isDevEnvironment) ? 'https://dev-api.pbbg.com' : 'https://api.pbbg.com'
  axios.defaults.baseURL = apiBaseUrl
}

export default async ({ store, Vue }) => {
  setBaseUrl()
  Vue.prototype.$axios = axios

  if (auth.loggedIn()) {
    auth.setAxiosAuthHeader()
    await auth.setProfile()
    store.dispatch(USER_PROFILE_UPDATED_ACTION)
  }
}
