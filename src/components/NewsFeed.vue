<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['feed']),
  },
}
</script>

<template>
  <q-list
    bordered
    separator
    class="rounded-borders relative-position"
  >
    <q-item
      v-for="(item, index) in feed"
      :key="index"
      class="q-pa-md"
    >
      <q-item-section avatar>
        <q-avatar>
          <img :src="item.image_url">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label lines="1">
          <a
            :href="item.feed_source"
            target="_blank"
          >
            {{ item.feed_name }}
          </a>
        </q-item-label>
        <q-item-label class="q-pt-sm">
          <a
            :href="item.url"
            target="_blank"
          >
            {{ item.title }}
          </a>
        </q-item-label>
      </q-item-section>

      <q-item-section
        top
        class="corner-content absolute-right q-pt-md q-mr-sm text-body2 text-grey"
      >
        {{ item.timestamp }}
      </q-item-section>
    </q-item>
    <q-inner-loading
      :showing="!feed.length > 0"
    >
      <q-spinner-radio
        size="2rem"
        color="primary"
        aria-label="News Feed Loading Icon"
      />
    </q-inner-loading>
  </q-list>
</template>

<style lang="sass" scoped>
.feed-minimum-size
  min-height: 30rem
  width: 25rem
.corner-content
  line-height: 1rem
</style>
