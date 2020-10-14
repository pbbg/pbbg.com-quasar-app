<script>
import { mapState } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapState(['user']),
  },
}
</script>

<template>
  <q-page class="row justify-center items-start">
    <div class="column col-12 col-sm-10 col-md-8 q-pa-md">
      <h1 class="smaller-h1 q-py-md q-my-none">
        Dashboard
      </h1>
      <p>{{ user }}</p>
    </div>
  </q-page>
</template>
