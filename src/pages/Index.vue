<template>
  <q-page class="row justify-center items-start">
    <div class="column col-12 col-sm-10 col-md-8 q-pa-md">
      <h1 class="smaller-h1 q-py-md q-my-none">
        The PBBG Directory
      </h1>
      <instant-search />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    InstantSearch: () => import('../components/InstantSearch.vue'),
  },
}
</script>

<style lang="sass" scoped>
.smaller-h1
  font-size: 2.25rem
  line-height: 2.25rem
</style>
