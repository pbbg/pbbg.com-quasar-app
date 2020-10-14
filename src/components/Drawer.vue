<script>
import { openURL } from 'quasar'
import { mapState } from 'vuex'
import { DRAWER_CLOSE_ACTION } from '../store'
import { navLinks } from '../router'

export default {
  components: {
    LoginControl: () => import('./LoginControl.vue'),
  },
  data() {
    return {
      navLinks,
      DRAWER_CLOSE_ACTION,
    }
  },
  methods: {
    clickNavItem(link) {
      if (link.targetBlank) {
        openURL(link.href)
      }
      if (link.to) {
        this.$router.push(link.to)
      }
    },
  },
  computed: {
    ...mapState(['navDrawerOpen']),
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
        :drawer="true"
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
