<script>
export default {
  name: 'MainLayout',
  components: {
    Navigation: () => import('../components/Navigation.vue'),
    Drawer: () => import('../components/Drawer.vue'),
    FooterBar: () => import('../components/FooterBar.vue'),
  },
}
</script>

<template>
  <q-layout view="lhh LpR lff">

    <navigation />
    <drawer />

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer-bar />

  </q-layout>
</template>
