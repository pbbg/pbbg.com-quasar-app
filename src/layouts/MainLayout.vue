<script>
import { navLinks } from '../router'

export default {
  name: 'MainLayout',
  components: {
    Navigation: () => import('../components/Navigation.vue'),
    Drawer: () => import('../components/Drawer.vue'),
    FooterBar: () => import('../components/FooterBar.vue'),
  },
  data() {
    return {
      navLinks,
    }
  },
}
</script>

<template>
  <q-layout view="lhh LpR lff">
    <navigation :links="navLinks" />
    <drawer :links="navLinks" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer-bar />
  </q-layout>
</template>
