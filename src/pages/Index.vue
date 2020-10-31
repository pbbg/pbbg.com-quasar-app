<script>
export default {
  name: 'Index',
  components: {
    AlgoliaPlaceholder: () => import('../components/AlgoliaPlaceholder.vue'),
    InstantSearch: () => import('../components/InstantSearch.vue'),
    NewsFeed: () => import('../components/NewsFeed.vue'),
  },
  data: () => ({
    hasAlgoliaKeys: process.env.ALGOLIA_KEY && process.env.ALGOLIA_APP_ID,
  }),
}
</script>

<template>
  <q-page
    class="row justify-center items-baseline"
    :class="{'column': $q.screen.lt.md}"
  >
    <div
      class="col column q-pa-md"
      :class="{'full-width-column': $q.screen.lt.md, 'wide-column': $q.screen.gt.sm}"
    >
      <h1 class="smaller-h1 q-py-md q-my-none">
        The PBBG Directory
      </h1>
      <instant-search v-if="hasAlgoliaKeys" />
      <algolia-placeholder v-else />
    </div>
    <div
      class="col column q-pa-md"
      :class="{'full-width-column': $q.screen.lt.md, 'slim-column': $q.screen.gt.sm}"
    >
      <h1 class="smaller-h1 q-py-md q-my-none">
        News Feed
      </h1>
      <news-feed />
    </div>
  </q-page>
</template>
