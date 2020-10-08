<script>
import { NAV_ICON_CLICKED_ACTION } from '../store'
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      NAV_ICON_CLICKED_ACTION,
    }
  },
}
</script>

<template>
  <q-header
    reveal
    elevated
  >
    <q-toolbar class="q-px-none">
      <q-btn
        class="lt-md q-ml-sm z-max"
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$store.dispatch(NAV_ICON_CLICKED_ACTION)"
      />

      <q-toolbar-title
        shrink
        class="q-px-sm"
      >
        <q-btn
          stretch
          flat
          label="pbbg.com"
          type="a"
          to="/"
        />
      </q-toolbar-title>
      <q-separator
        class="gt-sm"
        dark
        vertical
        inset
      />
      <div class="gt-sm q-pl-sm">
        <q-btn
          v-for="link of links"
          :key="link.id"
          stretch
          flat
          :label="link.label"
          type="a"
          :href="link.link"
          :target="link.targetBlank ? '_blank' : '_self'"
          :to="link.to ? link.to : null"
        />
      </div>
      <q-space />
    </q-toolbar>
  </q-header>
</template>
