import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from './services/auth'
import store, { USER_LOGOUT_PRESS_ACTION } from './store'

Vue.use(VueRouter)

const requiresAuth = (to, from, next) => {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/games/create', component: () => import('pages/Create.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/logout',
        beforeEnter: async (to, from, next) => {
          await store.dispatch(USER_LOGOUT_PRESS_ACTION)
          next('/')
        },
      },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/changelog', component: () => import('pages/Changelog.vue') },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
    ],
    beforeEnter: requiresAuth,
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
]

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
})

export default router

export const navLinks = [
  {
    id: 0,
    label: 'Random Game',
    link: 'https://pbbg.com/random',
    targetBlank: false,
    to: '/games/random',
  },
  {
    id: 1,
    label: 'Submit a Game',
    link: 'https://pbbg.com/games/create',
    targetBlank: false,
    to: '/games/create',
  },
  {
    id: 2,
    label: 'About',
    link: 'https://www.patreon.com/foohonpie',
    targetBlank: true,
  },
  {
    id: 3,
    label: 'Forum',
    link: 'https://discourse.pbbg.com/',
    targetBlank: true,
  },
  {
    id: 4,
    label: 'Chat',
    link: 'https://discord.gg/KvwaEqC',
    targetBlank: true,
  },
  {
    id: 5,
    label: 'MakeWebGames',
    link: 'https://makewebgames.io/',
    targetBlank: true,
  },
]
