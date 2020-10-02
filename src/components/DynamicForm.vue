<script>
import { schema } from '../services/formSchemas.js'
import { descriptor } from '../services/fieldDescriptors.js'
export default {
  props: {
    formSchema: {
      type: String,
      required: true,
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
    onSubmit() {
      // this.formModels is the current form values
      // TODO: do something with generic form submission, possibly via store action
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
  <q-page padding>
    <q-form
      class="q-gutter-md"
      @submit="onSubmit"
    >
      <form-field-renderer
        v-for="field in fields"
        :key="field.model"
        :field="field"
        :on-input="onInput"
        :form-models="formModels"
      />

      <div class="row q-gutter-md">
        <q-btn
          label="Cancel"
          outline
          no-caps
        />
        <q-btn
          label="Reset"
          outline
          no-caps
          type="reset"
        />
        <q-btn
          color="primary"
          label="Save"
          no-caps
          type="submit"
        />
      </div>
    </q-form>
  </q-page>
</template>
