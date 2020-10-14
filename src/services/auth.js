import Vue from 'vue'
import { LocalStorage } from 'quasar'
import { notify } from './utils'
import router from 'vue-router'
import { SET_USER_MUTATION } from '../store'
const AUTH_TOKEN_NAME = 'pbbgUserToken'
const API_BASE_URL = 'https://dev-api.pbbg.com'

export async function registerUser({ name, email, password }) {
  try {
    const response = await Vue.prototype.$axios.post(API_BASE_URL + '/register', {
      name,
      email,
      password,
    })
    LocalStorage.set(AUTH_TOKEN_NAME, response.data.token)
    setAxiosAuthHeader()
    notify({
      message: 'Welcome!',
      color: 'info',
      type: 'info',
    })
    return true
  } catch(error) {
    notify({
      message: 'Whoops! There was an issue trying to register.',
      color: 'negative',
      type: 'negative',
    })
  }
}

export async function loginUser({ email, password }) {
  try {
    const response = await Vue.prototype.$axios.post(API_BASE_URL + '/login', {
      email,
      password,
    })
    LocalStorage.set(AUTH_TOKEN_NAME, response.data.token)
    setAxiosAuthHeader()
    notify({
      message: 'Welcome back',
      color: 'info',
      type: 'info',
    })
  } catch(error) {
    notify({
      message: 'Whoops! There was an issue trying to login.',
      color: 'negative',
      type: 'negative',
    })
  }
}

export async function getUser() {
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

export async function setProfileAndGoDashboard(commit) {
  router.push('/dashboard')
  const user = await getUser()
  if (user) {
    commit(SET_USER_MUTATION, user)
  } else {
    router.push('/')
  }
}

function setAxiosAuthHeader() {
  Vue.prototype.$axios.default.headers = {
    'Authorization': 'Bearer ' + LocalStorage.getItem(AUTH_TOKEN_NAME),
  }
}
