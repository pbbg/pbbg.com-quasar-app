import Vue from 'vue'
import { LocalStorage } from 'quasar'
import { errorMessageFromApiResponse } from './utils'
import { notify, messages } from './messages'

const AUTH_TOKEN_NAME = 'pbbgUserToken'

export default {
  profile: null,
  async registerUser({ name, email, password }) {
    try {
      const response = await Vue.prototype.$axios.post('/register', { name, email, password })
      this.setAxiosAuthHeader(response.data.data.token)
      notify(messages.register(name))
    } catch(error) {
      let errorMessage = errorMessageFromApiResponse(error)
      notify(messages.failRegister(errorMessage))
      throw error
    }
  },
  async login({ email, password }) {
    try {
      const response = await Vue.prototype.$axios.post('/login', { email, password })
      this.setAxiosAuthHeader(response.data.data.token)
    } catch(error) {
      if (error.response.data && error.response.data.message === 'Unauthorized') {
        notify(messages.invalidLogin)
      } else {
        notify(messages.failLogin)
      }
      throw error
    }
  },
  logout() {
    this.profile = null
    LocalStorage.remove(AUTH_TOKEN_NAME)
    delete Vue.prototype.$axios.defaults.headers.common['Authorization']
  },
  async getUser() {
    try {
      const response = await Vue.prototype.$axios.get('/user')
      return response.data.data
    } catch(error) {
      notify(messages.failGetUser)
      return null
    }
  },
  async setProfile() {
    this.profile = await this.getUser()
    return this.profile
  },
  setAxiosAuthHeader(token) {
    if (token) {
      LocalStorage.set(AUTH_TOKEN_NAME, token)
    }
    Vue.prototype.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + LocalStorage.getItem(AUTH_TOKEN_NAME)
  },
  loggedIn() {
    return LocalStorage.has(AUTH_TOKEN_NAME)
  },
}
