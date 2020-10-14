<script>
import { USER_LOGIN_SCHEMA } from '../services/formSchemas'
import { USER_LOGIN_SUBMIT_ACTION } from '../store'

export default {
  name: 'Login',
  components: {
    DynamicForm: () => import('../components/DynamicForm.vue'),
  },
  data() {
    return {
      USER_LOGIN_SCHEMA,
    }
  },
  methods: {
    handleLoginSubmit(formModels) {
      this.$store.dispatch(USER_LOGIN_SUBMIT_ACTION, formModels)
    },
  },
}
</script>

<template>
  <q-dialog
    :value="true"
    @hide="$router.back()"
    :maximized="$q.screen.lt.sm"
  >
    <q-card class="user-forms-modal">
      <div class="">
        <q-card-section>
          <div class="text-h6">
            Login
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <dynamic-form
            :form-schema="USER_LOGIN_SCHEMA"
            @submit="handleLoginSubmit"
            @cancel="$router.back()"
            class="col-10 q-pa-md"
          >
            <a href="">Forgot Password?</a>
            <q-btn
              label="Cancel"
              @click="$router.back()"
              outline
              unelevated
            />
            <q-btn
              label="Reset"
              outline
              unelevated
              type="reset"
            />
            <q-btn
              color="info"
              label="LOGIN"
              unelevated
              type="submit"
            />
          </dynamic-form>
        </q-card-section>
      </div>
    </q-card>
  </q-dialog>
</template>

<style lang="sass" scoped>
.user-forms-modal
  width: 40rem
</style>
