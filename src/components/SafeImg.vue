<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    timeout: {
      type: Number,
      default: 6000,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isValidUrl: true,
    timer: null,
  }),
  methods: {
    testImageUrl() {
      const imageElement = new window.Image()
      imageElement.src = this.src
      this.timer = setTimeout(() => {
        if (!imageElement.complete || !imageElement.naturalWidth) {
          this.isValidUrl = false
        }
      }, this.timeout)
    },
    initialize() {
      window.clearTimeout(this.timer)
      this.isValidUrl = true
      this.timer = null
      this.testImageUrl()
    },
  },
  watch: {
    src: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.initialize()
        }
      },
    },
  },
  beforeDestroy: function() {
    window.clearTimeout(this.timer)
  },
}
</script>

<template>
  <div>
    <q-img
      :src="src"
      :alt="title"
      @error="isValidUrl = false"
      native-context-menu
      class="full-width full-height"
    >
      <template #loading>
        <q-spinner
          color="secondary"
          size="1em"
        />
      </template>
      <div
        v-if="!isValidUrl"
        class="absolute-full flex flex-center bg-grey-4 text-grey-8"
      >
        <div class="text-center">
          Cannot load <br><a
            :href="src"
            target="_blank"
            rel="noopener noreferrer"
          >image url</a>
        </div>
      </div>
    </q-img>
  </div>
</template>
