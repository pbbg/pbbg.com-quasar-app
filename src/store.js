import Vue from 'vue'
import Vuex from 'vuex'
import { setValue } from './services/stateMutators'
Vue.use(Vuex)

export const NAV_ICON_CLICKED_ACTION = 'NAV_ICON_CLICKED_ACTION'
export const DRAWER_CLOSED_ACTION = 'DRAWER_CLOSED_ACTION'

function initialState() {
  return {
    navDrawerOpen: false,
  }
}

export default function () {
  const store = new Vuex.Store({
    state: initialState,
    actions: {
      [DRAWER_CLOSED_ACTION]({ commit }) {
        commit('setNavDrawer', false)
      },
      [NAV_ICON_CLICKED_ACTION]({ commit }) {
        commit('setNavDrawer', true)
      },
    },
    mutations: {
      setNavDrawer: setValue('navDrawerOpen'),
    },
    getters: {},
  })

  return store
}
