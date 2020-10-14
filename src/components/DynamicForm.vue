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
    submitText: {
      type: String,
      default: 'Save',
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
      this.$emit('reset')
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
    ref="dynamicForm"
    @submit="$emit('submit', formModels)"
    @reset="onReset"
    class="dynamic-form"
  >
    <form-field-renderer
      v-for="field in fields"
      :key="field.model"
      :field="field"
      :on-input="onInput"
      :form-models="formModels"
      class="q-mb-sm field-row"
    />

    <div class="row q-gutter-md actions">
      <slot>
        <q-btn
          v-if="!hideCancel"
          label="Cancel"
          @click="$emit('cancel')"
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
          :label="submitText"
          unelevated
          type="submit"
        />
      </slot>
    </div>
  </q-form>
</template>
