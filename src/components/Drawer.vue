<script>
import { openURL } from 'quasar'
import { mapState } from 'vuex'
import { DRAWER_CLOSE_ACTION } from '../store'
import { navLinks } from '../router'

export default {
  components: {
    ProfileControl: () => import('./ProfileControl.vue'),
    LoginControl: () => import('./LoginControl.vue'),
  },
  data: () => ({
    navLinks,
    DRAWER_CLOSE_ACTION,
  }),
  methods: {
    clickNavItem(link) {
      if (link.targetBlank) {
        openURL(link.href)
      }
      if (link.to) {
        this.$router.push({ path: link.to })
      }
    },
  },
  computed: {
    ...mapState(['navDrawerOpen', 'user']),
  },
}
</script>

<template>
  <q-drawer
    :value="navDrawerOpen"
    @hide="$store.dispatch(DRAWER_CLOSE_ACTION)"
    overlay
    behavior="mobile"
    elevated
    content-class="bg-grey-1 lt-md"
  >
    <q-list class="column">
      <login-control
        v-if="!user"
        :is-in-drawer="true"
        class="q-ma-md"
      />
      <profile-control
        v-else
        class="q-ma-md"
      />
      <q-separator />
      <q-item
        v-for="link of navLinks"
        :key="link.id"
        clickable
        v-ripple
        @click="clickNavItem(link)"
      >
        <q-item-section>
          <q-item-label>
            {{ link.label }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>
