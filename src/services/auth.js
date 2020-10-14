import Vue from 'vue'
import router from 'vue-router'
import { LocalStorage } from 'quasar'
import { notify, messages } from './messages'
import { SET_USER_MUTATION } from '../store'

const API_BASE_URL = 'https://dev-api.pbbg.com'

export const registerUser = async ({ name, email, password }) => {
  try {
    const response = await Vue.prototype.$axios.post(API_BASE_URL + '/register', { name, email, password })
    setAxiosAuthHeader(response.data.token)
    notify(messages.register(name))
    return true
  } catch(error) {
    notify(messages.failRegister)
  }
}

export const loginUser = async ({ email, password }) => {
  try {
    const response = await Vue.prototype.$axios.post(API_BASE_URL + '/login', { email, password })
    setAxiosAuthHeader(response.data.token)
    notify(messages.login)
  } catch(error) {
    notify(messages.failLogin)
  }
}

export const getUser = async () => {
  try {
    const response = await Vue.prototype.$axios.get(API_BASE_URL + '/user')
    return response.data
  } catch(error) {
    notify(messages.failGetUser)
  }
}

export const setProfileAndGoDashboard = async commit => {
  router.push('/dashboard')
  const user = await getUser()
  if (user) {
    commit(SET_USER_MUTATION, user)
  } else {
    router.push('/')
  }
}

const AUTH_TOKEN_NAME = 'pbbgUserToken'

const setAxiosAuthHeader = token => {
  LocalStorage.set(AUTH_TOKEN_NAME, token)
  Vue.prototype.$axios.default.headers = {
    'Authorization': 'Bearer ' + token,
  }
}
