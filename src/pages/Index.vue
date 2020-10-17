<script>
export default {
  name: 'Index',
  components: {
    AlgoliaPlaceholder: () => import('../components/AlgoliaPlaceholder.vue'),
    InstantSearch: () => import('../components/InstantSearch.vue'),
  },
  data: () => ({
    hasAlgoliaKeys: process.env.ALGOLIA_KEY && process.env.ALGOLIA_APP_ID,
  }),
}
</script>

<template>
  <q-page class="row justify-center items-start">
    <div class="column col-12 col-sm-10 col-md-8 q-pa-md">
      <h1 class="smaller-h1 q-py-md q-my-none">
        The PBBG Directory
      </h1>
      <instant-search v-if="hasAlgoliaKeys" />
      <algolia-placeholder v-else />
    </div>
  </q-page>
</template>
