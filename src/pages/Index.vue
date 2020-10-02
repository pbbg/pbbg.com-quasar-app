<template>
  <q-page class="q-pa-xl">
    <!-- <dynamic-form form-schema="user" /> -->
    <instant-search />
  </q-page>
</template>

<script>
import InstantSearch from 'components/InstantSearch.vue'
// import DynamicForm from 'components/DynamicForm.vue'

export default {
  name: 'PageIndex',
  components: { InstantSearch/*, DynamicForm*/ },
}
</script>
