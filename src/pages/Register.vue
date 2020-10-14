<script>
import { USER_REGISTER_SCHEMA } from '../services/formSchemas'
import { USER_REGISTRATION_SUBMIT_ACTION } from '../store'
import { notify, isMatchingPasswords } from '../services/utils'

export default {
  name: 'Register',
  components: {
    DynamicForm: () => import('../components/DynamicForm.vue'),
  },
  data() {
    return {
      USER_REGISTER_SCHEMA,
    }
  },
  methods: {
    handleRegisterSubmit(formModels) {
      if (isMatchingPasswords(formModels.password, formModels.confirmPassword)) {
        this.$store.dispatch(USER_REGISTRATION_SUBMIT_ACTION, formModels)
      } else {
        notify({
          type: 'negative',
          color: 'negative',
          message: 'Passwords must match!',
        })
      }
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
            Register
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <dynamic-form
            :form-schema="USER_REGISTER_SCHEMA"
            @submit="handleRegisterSubmit"
            @cancel="$router.back()"
            class="col-10 q-pa-md"
          >
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
              label="REGISTER"
              unelevated
              type="submit"
            />
          </dynamic-form>
        </q-card-section>
      </div>
    </q-card>
  </q-dialog>
</template>
