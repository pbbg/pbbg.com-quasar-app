<script>
import { mapState } from 'vuex'
import { navLinks } from '../router'
import { NAV_ICON_PRESS_ACTION } from '../store'

export default {
  components: {
    ProfileControl: () => import('./ProfileControl.vue'),
    LoginControl: () => import('./LoginControl.vue'),
  },
  data: () => ({
    navLinks,
    NAV_ICON_PRESS_ACTION,
  }),
  computed: {
    ...mapState(['user']),
  },
}
</script>

<template>
  <q-header
    reveal
    elevated
  >
    <q-toolbar class="q-px-none">
      <q-btn
        class="lt-md q-ml-sm z-max"
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$store.dispatch(NAV_ICON_PRESS_ACTION)"
      />

      <q-toolbar-title
        shrink
        class="q-px-sm"
      >
        <q-btn
          stretch
          flat
          label="pbbg.com"
          type="a"
          to="/"
        />
      </q-toolbar-title>
      <q-separator
        class="gt-sm"
        dark
        vertical
        inset
      />
      <div class="gt-sm q-pl-sm">
        <q-btn
          v-for="link of navLinks"
          :key="link.id"
          stretch
          flat
          :label="link.label"
          type="a"
          :href="link.link"
          :target="link.targetBlank ? '_blank' : '_self'"
          :to="link.to ? link.to : null"
        />
      </div>
      <q-space />
      <login-control
        v-if="!user"
        class="gt-sm"
      />
      <profile-control
        v-else
        class="gt-sm"
      />
    </q-toolbar>
  </q-header>
</template>
