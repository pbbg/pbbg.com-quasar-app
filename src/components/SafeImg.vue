<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    timeout: {
      type: Number,
      default: 4000,
    },
  },
  data: () => ({
    imageElement: null,
    isValidUrl: false,
    validationTimer: null,
  }),
  methods: {
    setAsValidUrl() {
      this.isValidUrl = true
      this.imageElement = new window.Image()
      this.imageElement.src = this.src
    },
    invalidateAfterTimeoutIfBadUrl() {
      this.validationTimer = setTimeout(() => {
        if (!this.imageElement.complete || !this.imageElement.naturalWidth) {
          this.isValidUrl = false
        }
      }, this.timeout)
    },
  },
  watch: {
    src: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.setAsValidUrl()
          this.invalidateAfterTimeoutIfBadUrl()
        }
      },
    },
  },
  beforeDestroy: function() {
    window.clearTimeout(this.validationTimer)
  },
}
</script>

<template>
  <div>
    <q-img
      :src="src"
      @error="isValidUrl = false"
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
        class="absolute-full flex flex-center bg-negative text-white"
      >
        Cannot load image
      </div>
    </q-img>
  </div>
</template>
