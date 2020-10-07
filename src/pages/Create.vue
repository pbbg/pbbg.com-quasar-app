<template>
  <q-page class="row justify-center items-start">
    <div class="column col-11 col-sm-6 q-py-md">
      <q-toolbar class="col-1 bg-secondary text-white q-pa-sm q-pl-md top-left-round top-right-round">
        <q-toolbar-title>Submit a Game</q-toolbar-title>
      </q-toolbar>
      <dynamic-form
        :form-schema="GAME_SCHEMA"
        success-message="Success! You submitted a new game"
        success-message-model-name="gameName"
        hide-cancel
        class="col-10 q-pa-md border-all no-top-left-border no-top-right-border"
      />
    </div>
  </q-page>
</template>

<script>
import DynamicForm from '../components/DynamicForm.vue'
import { GAME_SCHEMA } from '../services/formSchemas'

export default {
  name: 'PageIndex',
  components: { DynamicForm },
  data() {
    return {
      GAME_SCHEMA,
    }
  },
}
</script>

<style lang="sass" scoped>
@import '../css/quasar.variables'

.top-left-round
  border-top-left-radius: .25rem
.top-right-round
  border-top-right-radius: .25rem

.border-all
  border: 1px solid $separator-color
  border-radius: .25rem

.no-top-left-border
  border-top-left-radius: 0
.no-top-right-border
  border-top-right-radius: 0
</style>
