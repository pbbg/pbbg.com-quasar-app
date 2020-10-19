<template>
  <div>
    <div class="q-mb-lg">
      <q-skeleton type="QInput">
        <div class="text-center vertical-middle full-height">
          Algolia search omitted; see README for more info
        </div>
      </q-skeleton>
    </div>
    <q-card
      class="q-mb-lg"
      flat
      bordered
      v-for="item of [0,1,2,3,4,5,6]"
      :key="item"
    >
      <q-card-section class="row flex">
        <q-skeleton
          type="QAvatar"
          class="rating-badge"
        />
        <q-skeleton
          height="10rem"
          width="10rem"
        />
        <q-card-section class="col">
          <q-skeleton type="text" />
          <q-skeleton type="text" />
        </q-card-section>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-skeleton type="text" />
        <q-skeleton type="text" />
      </q-card-section>
    </q-card>
  </div>
</template>
