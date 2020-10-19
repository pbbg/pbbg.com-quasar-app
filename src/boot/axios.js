import axios from 'axios'
import auth from '../services/auth'
import { USER_PROFILE_UPDATED_ACTION } from '../store'

export default async ({ store, Vue }) => {
  console.log('API Base URL environment variable is: ' + process.env.API_BASE_URL)
  axios.defaults.baseURL = process.env.API_BASE_URL
  Vue.prototype.$axios = axios

  if (auth.loggedIn()) {
    auth.setAxiosAuthHeader()
    await auth.setProfile()
    store.dispatch(USER_PROFILE_UPDATED_ACTION)
  }
}
