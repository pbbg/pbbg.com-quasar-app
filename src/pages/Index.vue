<template>
  <q-page class="q-mt-xl q-ml-xl">
    <ais-index
      :app-id="ALGOLIA_APP_ID"
      :api-key="ALGOLIA_KEY"
      index-name="games"
    >
      <ais-search-box placeholder="Search games, tags, descriptions..."></ais-search-box>
      <ais-results>
        <template slot-scope="{ result }">
          <h2>
            <a :href="result.path">
              <h2>
                <ais-highlight :result="result" attribute-name="name"></ais-highlight>
              </h2>
            </a>
          </h2>
          <p>
            <ais-highlight :result="result" attribute-name="short_description"></ais-highlight>
          </p>
        </template>
      </ais-results>
      <ais-powered-by></ais-powered-by>
    </ais-index>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
      ALGOLIA_KEY: process.env.ALGOLIA_KEY
    }
  }
}
</script>
