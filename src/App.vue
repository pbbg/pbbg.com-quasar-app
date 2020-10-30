<script>
import { INITIAL_APP_LOAD_ACTION } from './store'
export default {
  created() {
    this.$store.dispatch(INITIAL_APP_LOAD_ACTION)
  },
}
</script>

<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
