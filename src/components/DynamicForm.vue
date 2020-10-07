<script>
import { schema } from '../services/formSchemas.js'
import { descriptor } from '../services/fieldDescriptors.js'
export default {
  props: {
    formSchema: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: 'Success!',
    },
    successMessageModelName: {
      type: String,
      default: null,
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
    onSubmit() {
      this.$router.push('/')
      this.$q.notify({
        message: this.notificationMessage,
        position: 'bottom',
        color: 'positive',
        type: 'positive',
        actions: [
          { label: 'Dismiss', color: 'white', handler: () => { } },
        ],
      })
      // TODO: do something with generic form submission, possibly via store action
    },
  },
  computed: {
    notificationMessage() {
      return this.successMessage + (this.formModels[this.successMessageModelName] ? ': ' + this.formModels[this.successMessageModelName] : '')
    },
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
    @submit="onSubmit"
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
