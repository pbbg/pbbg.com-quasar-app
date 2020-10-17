import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import { mockGameInfoHttpRequest, errorMessageFromApiResponse, asyncRequestWithLoader } from './services/utils'
import { notify, messages } from './services/messages'
import auth from './services/auth'
Vue.use(Vuex)

export const NAV_ICON_PRESS_ACTION = 'NAV_ICON_PRESS_ACTION'
export const DRAWER_CLOSE_ACTION = 'DRAWER_CLOSE_ACTION'
export const GAME_INFO_RETRIEVE_ACTION = 'GAME_INFO_RETRIEVE_ACTION'
export const GAME_INFO_RESET_ACTION = 'GAME_INFO_RESET_ACTION'
export const NEW_GAME_SUBMIT_ACTION = 'NEW_GAME_SUBMIT_ACTION'
export const USER_REGISTRATION_SUBMIT_ACTION = 'USER_REGISTRATION_SUBMIT_ACTION'
export const USER_LOGIN_SUBMIT_ACTION = 'USER_LOGIN_SUBMIT_ACTION'
export const USER_LOGOUT_PRESS_ACTION = 'USER_LOGOUT_PRESS_ACTION'
export const USER_PROFILE_UPDATED_ACTION = 'USER_PROFILE_UPDATED_ACTION'

const SET_NAV_DRAWER_MUTATION = 'SET_NAV_DRAWER_MUTATION'
const RESET_INFO_MUTATION = 'RESET_INFO_MUTATION'
const SET_INFO_MUTATION = 'SET_INFO_MUTATION'
const SET_USER_MUTATION = 'SET_USER_MUTATION'

const initialState = () => ({
  navDrawerOpen: false,
  gameInfo: null,
  user: null,
})

const setValue = key => (state, val) => {
  state[key] = val
}

export default new Vuex.Store({
  state: initialState,
  actions: {
    [DRAWER_CLOSE_ACTION]({ commit }) {
      commit(SET_NAV_DRAWER_MUTATION, false)
    },
    [NAV_ICON_PRESS_ACTION]({ commit }) {
      commit(SET_NAV_DRAWER_MUTATION, true)
    },
    [USER_PROFILE_UPDATED_ACTION]({ commit }) {
      commit(SET_USER_MUTATION, auth.profile)
    async [NEW_GAME_SUBMIT_ACTION](context, formModels) {
      await router.push({ path: '/' })
      notify(messages.gameSubmitted(formModels.gameName))
    },
    [GAME_INFO_RESET_ACTION]({ commit }) {
      commit(RESET_INFO_MUTATION, null)
    },
    async [GAME_INFO_RETRIEVE_ACTION]({ commit }, url) {
      await asyncRequestWithLoader({
        loadingMessage: 'Stand by. Loading game data...',
        tryCb: async () => {
          const gameInfoResponse = await mockGameInfoHttpRequest(url)
          commit(SET_INFO_MUTATION, gameInfoResponse.data)
          notify(messages.dataLoadedForGame(url))
        },
      })
    },
    async [USER_REGISTRATION_SUBMIT_ACTION]({ dispatch }, formModels) {
      await asyncRequestWithLoader({
        loadingMessage: 'Registering user...',
        tryCb: async () => {
          await auth.registerUser(formModels)
          await auth.setProfile()
          dispatch(USER_PROFILE_UPDATED_ACTION)
          router.push('/dashboard')
        },
      })
    },
    async [USER_LOGIN_SUBMIT_ACTION]({ dispatch }, formModels) {
      await asyncRequestWithLoader({
        loadingMessage: 'Logging in user...',
        tryCb: async () => {
          await auth.login(formModels)
          await auth.setProfile()
          dispatch(USER_PROFILE_UPDATED_ACTION)
          router.push('/dashboard')
        },
      })
    },
    async [USER_LOGOUT_PRESS_ACTION]({ dispatch }) {
      await asyncRequestWithLoader({
        loadingMessage: 'Logging out...',
        tryCb: async () => {
          auth.logout()
          dispatch(USER_PROFILE_UPDATED_ACTION)
          await router.push('/')
        },
      })
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
