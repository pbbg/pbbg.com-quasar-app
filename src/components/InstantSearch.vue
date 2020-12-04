<script>
import Vue from 'vue'
import { AisSearchBox, AisPoweredBy, AisHits, AisInstantSearch } from 'vue-instantsearch'
import algoliasearch from 'algoliasearch/lite'

export default {
  name: 'InstantSearch',
  components: {
    SearchResult: () => import('./SearchResult.vue'),
    AisInstantSearch: Vue.component('AisInstantSearch', AisInstantSearch),
    AisSearchBox: Vue.component('AisSearchBox', AisSearchBox),
    AisHits: Vue.component('AisHits', AisHits),
    AisPoweredBy: Vue.component('AisPoweredBy', AisPoweredBy),
  },
  data: () => ({
    searchQuery: '',
    searchClient: algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_KEY,
    ),
  }),
  methods: {
    refineSearch (refine, value) {
      this.searchQuery = value
      refine(value)
    },
  },
}
</script>

<template>
  <ais-instant-search
    :search-client="searchClient"
    index-name="games"
  >
    <ais-search-box placeholder="Search games, tags, descriptions...">
      <div slot-scope="{ refine }">
        <q-input
          v-model="searchQuery"
          @input="refineSearch(refine, $event.currentTarget.value)"
          placeholder="Search games, tags, descriptions..."
          type="search"
          outlined
          input-class="text-left"
        >
          <template #append>
            <q-icon
              v-if="searchQuery === ''"
              name="search"
            />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="searchQuery = ''"
            />
          </template>
        </q-input>
      </div>
    </ais-search-box>

    <ais-hits class="empty-style-list">
      <div
        slot="item"
        slot-scope="{ item }"
      >
        <search-result
          :result="item"
          class="q-mt-lg"
        />
      </div>
    </ais-hits>

    <ais-powered-by />
  </ais-instant-search>
</template>

<style lang="sass">
.empty-style-list
  .ais-Hits-list
    list-style: none
    margin: 0
    padding: 0
</style>
