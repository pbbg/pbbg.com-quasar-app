<script>
import { mapState } from 'vuex'
import { GAME_SCHEMA, GAME_INFO_SCHEMA } from '../services/formSchemas'
import { GAME_INFO_RETRIEVE_ACTION, GAME_INFO_RESET_ACTION, NEW_GAME_SUBMIT_ACTION } from '../store'

export default {
  name: 'Create',
  components: {
    DynamicForm: () => import('../components/DynamicForm.vue'),
  },
  data: () => ({
    GAME_SCHEMA,
    GAME_INFO_SCHEMA,
    infoUrl: null,
  }),
  methods: {
    handleGameInfo(formModels) {
      this.infoUrl = formModels.url
      this.$store.dispatch(GAME_INFO_RETRIEVE_ACTION, formModels.url)
    },
    handleGameSubmit(formModels) {
      this.$store.dispatch(NEW_GAME_SUBMIT_ACTION, { ...formModels, url: this.infoUrl })
    },
    resetInfoForm() {
      this.$refs.infoForm.$refs.dynamicForm.reset()
      this.$store.dispatch(GAME_INFO_RESET_ACTION)
      this.infoUrl = null
    },
  },
  computed: {
    ...mapState(['gameInfo']),
  },
}
</script>

<template>
  <q-page class="row justify-center items-start">
    <div class="column col-11 col-xl-2 col-lg-4 col-md-4 col-sm-6 col-xs-10 q-py-md">
      <q-toolbar class="col-1 bg-secondary text-white q-pa-sm q-pl-md top-left-round top-right-round">
        <q-toolbar-title>Submit a Game</q-toolbar-title>
      </q-toolbar>
      <dynamic-form
        ref="infoForm"
        :form-schema="GAME_INFO_SCHEMA"
        submit-text="GET INFO"
        @submit="handleGameInfo"
        hide-cancel
        hide-reset
        class="col-10 q-pa-md border-all no-top-left-border no-top-right-border single-input-style"
        :class="{'meld-bottom': gameInfo }"
      />
      <dynamic-form
        v-show="gameInfo"
        :form-schema="GAME_SCHEMA"
        @submit="handleGameSubmit"
        @reset="resetInfoForm"
        hide-cancel
        class="col-10 q-pa-md border-all no-top-left-border no-top-right-border"
        :class="{'meld-top': gameInfo }"
      />
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
  @import '../css/app.sass'

  .meld-bottom
    border-bottom: 0 solid transparent
    border-bottom-left-radius: 0
    border-bottom-right-radius: 0
    padding-bottom: 0
  .meld-top
    border-top: 0 solid transparent
    border-top-left-radius: 0
    border-top-right-radius: 0
    padding-top: 0

  .single-input-style /deep/
      display: flex
      align-items: center
      justify-content: space-between
      .field-row
        flex: 1
      .actions
        max-width: 8rem
        flex: 1
        align-self: baseline
        height: 3.5rem
        padding-left: .5rem
</style>
