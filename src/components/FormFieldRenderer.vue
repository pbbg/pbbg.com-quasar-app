<script>
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
    formModels: {
      type: Object,
      required: true,
    },
    onInput: {
      type: Function,
      required: true,
    },
  },
  methods: {
    assignFieldData(field) {
      if (!field.fieldOptions) {
        return {}
      }
      const fieldOptions = field.fieldOptions
      let data = {}
      if (fieldOptions.attrs && Object.keys(fieldOptions.attrs).length) {
        data.attrs = {}
        Object.keys(fieldOptions.attrs).map(key => {
          if (key.startsWith('_')) {
            data.attrs[key.substr(1)] = fieldOptions.attrs[key]
          } else {
            data.attrs[key] = fieldOptions.attrs[key]
          }
        })
      }
      if (fieldOptions.class && fieldOptions.class.length) {
        data.class = fieldOptions.class
      }
      if (fieldOptions.on && Object.keys(fieldOptions.on).length) {
        data.on = {}
        Object.keys(fieldOptions.on).map(event => {
          if (event === 'input') {
            data.on.input = (v) => this.onInput(v, field.model)
          } else {
            data.on[event] = fieldOptions.on[event]
          }
        })
      }
      if (fieldOptions.props && Object.keys(fieldOptions.props).length) {
        data.props = fieldOptions.props
      }
      if (field.model) {
        data.props.value = this.formModels[field.model]
      }
      if (fieldOptions.ref) {
        data.ref = fieldOptions.ref
      }
      if (fieldOptions.slot) {
        data.slot = fieldOptions.slot
      }
      data.style = fieldOptions.style && Object.keys(fieldOptions.style).length ? fieldOptions.style : null
      return data
    },
    appendLabel(h, field) {
      return h('div', {
        class: ['text-caption'],
      }, [
        field.label,
      ])
    },
    appendComponent(h, field) {
      if (field.children && Array.isArray(field.children)) {
        return h(field.component, this.assignFieldData(field), field.children.map(child => this.appendComponent(h, child)))
      }
      return h(field.component, this.assignFieldData(field), field.children)
    },
  },
  render(h) {
    const field = this.field
    const child = [this.appendLabel(h, field)]
    child.push(this.appendComponent(h, field))
    const data = {
      class: ['column', 'q-gutter-xs'],
    }
    return h('div', data, child)
  },
}
</script>
