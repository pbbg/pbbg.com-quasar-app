<template>
  <q-card class="q-mb-md" flat bordered>

    <q-card-section class="row flex">
      <q-avatar size="3rem" color="primary" class="rating-badge">{{ result.rating }}</q-avatar>
      <q-img
        class="col-2 rounded-borders ad-square-button"
        :src="result.ad_square_button"
      />
      <q-card-section class="col">
        <div class="text-h5 q-mt-sm q-mb-xs">{{result.name}}</div>
        <div class="text-grey">
          {{ result.short_description }}
        </div>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="text-caption text-grey">
        Latest review: {{ result.latest_review_rating }}/5 by <a :href="result.latest_review_user_path">{{ result.latest_review_name }}</a> on {{ result.latest_review_created_at }}
      </div>
      <p class="text-caption text-grey-6 q-ma-none">
        {{ result.latest_review_body }}
      </p>
    </q-card-section>

  </q-card>
</template>

<script>
export default {
  name: 'SearchResult',
  props: {
    result: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .ad-square-button {
    height: 10rem;
    width: 10rem;
  }
  .rating-badge {
    position: absolute;
    top: -1rem;
    left: -1rem;
    color: #ffffff;
    z-index: 4;
  }
</style>
