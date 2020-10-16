<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user']),
  },
}
</script>

<template>
  <q-btn-dropdown
    flat
    :class="{'q-mx-sm': $q.screen.gt.sm}"
    :label="user.name"
    class="no-border-radius"
  >
    <q-list>
      <q-item
        clickable
        v-close-popup
        :to="{ path: '/dashboard' }"
      >
        <q-item-section>
          <q-item-label>Dashboard</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        clickable
        v-close-popup
        :to="{ path: '/logout' }"
      >
        <q-item-section>
          <q-item-label>Logout</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>
