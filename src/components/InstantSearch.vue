<template>
  <ais-index
    :app-id="ALGOLIA_APP_ID"
    :api-key="ALGOLIA_KEY"
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
          <template v-slot:append>
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

    <ais-results>
      <template slot-scope="{ result }">
        <search-result
          :result="result"
          class="q-mt-lg"
        />
      </template>
    </ais-results>

    <ais-powered-by />
  </ais-index>
</template>

<script>
import Vue from 'vue'
import { SearchBox, PoweredBy, Results, Index } from 'vue-instantsearch'

export default {
  name: 'InstantSearch',
  components: {
    SearchResult: () => import('./SearchResult.vue'),
    AisIndex: Vue.component('ais-index', Index),
    AisSearchBox: Vue.component('ais-search-box', SearchBox),
    AisResults: Vue.component('ais-results', Results),
    AisPoweredBy: Vue.component('ais-powered-by', PoweredBy),
  },
  data () {
    return {
      ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
      ALGOLIA_KEY: process.env.ALGOLIA_KEY,
      searchQuery: '',
    }
  },
  methods: {
    refineSearch (refine, value) {
      this.searchQuery = value
      refine(value)
    },
  },
}
</script>
