<script>
import { schema } from '../services/formSchemas.js'
import { descriptor } from '../services/fieldDescriptors.js'

export default {
  props: {
    formSchema: {
      type: String,
      required: true,
    },
    hideReset: {
      type: Boolean,
      default: false,
    },
    hideCancel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formModels: {},
    }
  },
  components: {
    FormFieldRenderer: () => import('./FormFieldRenderer.vue'),
  },
  methods: {
    onInput(value, field) {
      this.$set(this.formModels, field, value)
    },
    onReset() {
      this.$set(this, 'formModels', {})
    },
  },
  computed: {
    fields() {
      let fields = {}
      let fieldNames = Object.keys(schema(this.formSchema))
      fieldNames.map(name => {
        fields[name] = descriptor(name)
      })
      return fields
    },
  },
}
</script>

<template>
  <q-form
    @submit="$emit('submit', formModels)"
    @reset="onReset"
  >
    <form-field-renderer
      v-for="field in fields"
      :key="field.model"
      :field="field"
      :on-input="onInput"
      :form-models="formModels"
      class="q-mb-sm"
    />

    <div class="row q-gutter-md">
      <q-btn
        v-if="!hideCancel"
        label="Cancel"
        outline
        unelevated
      />
      <q-btn
        v-if="!hideReset"
        label="Reset"
        outline
        unelevated
        type="reset"
      />
      <q-btn
        color="info"
        label="Save"
        unelevated
        type="submit"
      />
    </div>
  </q-form>
</template>
