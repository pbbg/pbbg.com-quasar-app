import Vue from 'vue'
import { notify } from './utils'
import router from 'vue-router'
import { LocalStorage } from 'quasar'
import { SET_USER_MUTATION } from '../store'

const API_BASE_URL = 'https://dev-api.pbbg.com'

export const registerUser = async ({ name, email, password }) => {
  try {
    notify({
      message: 'Welcome!',
      color: 'info',
      type: 'info',
    })
    const response = await Vue.prototype.$axios.post(API_BASE_URL + '/register', { name, email, password })
    setAxiosAuthHeader(response.data.token)
    return true
  } catch(error) {
    notify({
      message: 'Whoops! There was an issue trying to register.',
      color: 'negative',
      type: 'negative',
    })
  }
}

export const loginUser = async ({ email, password }) => {
  try {
    notify({
      message: 'Welcome back',
      color: 'info',
      type: 'info',
    })
    const response = await Vue.prototype.$axios.post(API_BASE_URL + '/login', { email, password })
    setAxiosAuthHeader(response.data.token)
  } catch(error) {
    notify({
      message: 'Whoops! There was an issue trying to login.',
      color: 'negative',
      type: 'negative',
    })
  }
}

export const getUser = async () => {
  try {
    const response = await Vue.prototype.$axios.get(API_BASE_URL + '/user')
    return response.data
  } catch(error) {
    notify({
      message: 'Whoops! There was an issue trying to retrieve your user profile',
      color: 'negative',
      type: 'negative',
    })
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
