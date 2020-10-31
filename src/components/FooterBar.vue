<script>
import { version } from '../../package.json'

export default {
  data() {
    return {
      version,
    }
  },
}
</script>
<template>
  <q-footer
    bordered
    dense
    class="row bg-grey-1 q-pa-md text-grey-6"
    :class="{'column': $q.screen.lt.sm}"
  >
    <div class="col self-center text-body2 text-center">
      by
      <a
        href="https://foohonpie.com/"
        target="_blank"
      >Foohon Pie LLC</a>
      with help from <a
        href="https://discord.gg/KvwaEqC"
        target="_blank"
      >friends</a>, <a
        href="https://www.patreon.com/foohonpie"
        target="_blank"
      >supporters</a>, and <a
        href="https://github.com/pbbg"
        target="_blank"
      >contributors</a>.
    </div>
    <q-btn
      no-caps
      outline
      color="secondary"
      :label="'v' + version"
      aria-label="Changelog Button"
      :to="{ path: '/changelog' }"
      class="col col-auto"
    >
      <q-tooltip
        anchor="center left"
        self="center middle"
        transition-show="scale"
        transition-hide="scale"
        :offset="[42,0]"
      >
        Changelog
      </q-tooltip>
    </q-btn>
  </q-footer>
</template>
