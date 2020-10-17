<script>
export default {
  name: 'SearchResult',
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <q-card
    class="q-mb-md"
    flat
    bordered
  >
    <q-card-section class="row flex">
      <q-avatar
        size="3rem"
        color="accent"
        class="rating-badge text-secondary"
      >
        {{ result.rating }}
      </q-avatar>
      <q-img
        class="col-2 rounded-borders ad-square-button"
        :src="result.ad_square_button"
      />
      <q-card-section class="col">
        <div class="text-h5 q-mt-sm q-mb-xs">
          {{ result.name }}
        </div>
        <div class="text-secondary">
          {{ result.short_description }}
        </div>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="text-caption text-secondary">
        Latest review: {{ result.latest_review_rating }}/5 by <a :href="result.latest_review_user_path">{{ result.latest_review_name }}</a> on {{ result.latest_review_created_at }}
      </div>
      <p class="text-caption text-secondary q-ma-none">
        {{ result.latest_review_body }}
      </p>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
  .ad-square-button
    height: 10rem
    width: 10rem
</style>
