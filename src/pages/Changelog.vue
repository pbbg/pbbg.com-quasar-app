<script>
import markdown from 'assets/changelog.md'
export default {
  name: 'Changelog',
  data() {
    return {
      markdown,
    }
  },
}
</script>

<template>
  <q-page
    class="row justify-center items-baseline q-px-md q-pb-md"
  >
    <q-markdown>
      {{ markdown }}
    </q-markdown>
  </q-page>
</template>
