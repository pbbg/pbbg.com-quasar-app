<script>
import { openURL } from 'quasar'
import { mapState } from 'vuex'
import { DRAWER_CLOSED_ACTION } from '../store'

export default {
  components: {
    LoginControl: () => import('./LoginControl.vue'),
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      DRAWER_CLOSED_ACTION,
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
    @hide="$store.dispatch(DRAWER_CLOSED_ACTION)"
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
        v-for="link of links"
        :key="link.id"
        clickable
        v-ripple
        @click="clickNavItem(link)"
      >
        <q-item-section>{{ link.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>
