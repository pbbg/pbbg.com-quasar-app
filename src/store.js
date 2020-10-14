import Vue from 'vue'
import Vuex from 'vuex'
import { Loading } from 'quasar'
import { mockGameInfoHttpRequest, notify } from './services/utils'
import { setValue } from './services/stateMutators'
import { registerUser, loginUser, setProfileAndGoDashboard } from './services/auth'
Vue.use(Vuex)

export const NAV_ICON_CLICKED_ACTION = 'NAV_ICON_CLICKED_ACTION'
export const DRAWER_CLOSED_ACTION = 'DRAWER_CLOSED_ACTION'
export const GAME_INFO_RETRIEVE_ACTION = 'GAME_INFO_RETRIEVE_ACTION'
export const GAME_INFO_RESET_ACTION = 'GAME_INFO_RESET_ACTION'
export const USER_REGISTRATION_SUBMIT_ACTION = 'USER_REGISTRATION_SUBMIT_ACTION'
export const USER_LOGIN_SUBMIT_ACTION = 'USER_LOGIN_SUBMIT_ACTION'

const SET_NAV_DRAWER_MUTATION = 'SET_NAV_DRAWER_MUTATION'
const RESET_INFO_MUTATION = 'RESET_INFO_MUTATION'
const SET_INFO_MUTATION = 'SET_INFO_MUTATION'
export const SET_USER_MUTATION = 'SET_USER_MUTATION'

function initialState() {
  return {
    navDrawerOpen: false,
    gameInfo: null,
    user: null,
  }
}

export default function () {
  return new Vuex.Store({
    state: initialState,
    actions: {
      [DRAWER_CLOSED_ACTION]({ commit }) {
        commit(SET_NAV_DRAWER_MUTATION, false)
      },
      [NAV_ICON_CLICKED_ACTION]({ commit }) {
        commit(SET_NAV_DRAWER_MUTATION, true)
      },
      async [GAME_INFO_RETRIEVE_ACTION]({ commit }, url) {
        Loading.show({ message: 'Stand by. Loading game data...'})
        const gameInfoResponse = await mockGameInfoHttpRequest(url)
        Loading.hide()
        commit(SET_INFO_MUTATION, gameInfoResponse.data)
        notify({
          message: `Data loaded for ${url}`,
          color: 'gray-8',
          type: 'info',
        })
      },
      [GAME_INFO_RESET_ACTION]({ commit }) {
        commit(RESET_INFO_MUTATION, null)
      },
      async [USER_REGISTRATION_SUBMIT_ACTION]({ commit }, formModels) {
        Loading.show({ message: 'Registering user...'})
        const registered = await registerUser(formModels)
        if (registered) {
          await setProfileAndGoDashboard(commit)
        }
        Loading.hide()
      },
      async [USER_LOGIN_SUBMIT_ACTION]({ commit }, formModels) {
        Loading.show({ message: 'Logging in user...'})
        const loggedIn = await loginUser(formModels)
        if (loggedIn) {
          await setProfileAndGoDashboard(commit)
        }
        Loading.hide()
      },
    },
    mutations: {
      [SET_NAV_DRAWER_MUTATION]: setValue('navDrawerOpen'),
      [RESET_INFO_MUTATION]: setValue('gameInfo'),
      [SET_INFO_MUTATION]: setValue('gameInfo'),
      [SET_USER_MUTATION]: setValue('user'),
    },
    getters: {},
  })
}
