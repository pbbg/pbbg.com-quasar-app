<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <q-btn-group
    class="login-control row"
    :class="{'q-px-sm': $q.screen.gt.sm}"
    outline
  >
    <q-btn
      stretch
      :outline="drawer ? true : false"
      :flat="drawer ? false : true"
      :color="drawer ? 'primary' : 'white'"
      label="LOGIN"
      type="a"
      to="/login"
      class="col-6"
    />
    <q-btn
      stretch
      :outline="drawer ? true : false"
      :flat="drawer ? false : true"
      :color="drawer ? 'primary' : 'white'"
      label="REGISTER"
      type="a"
      to="/register"
      class="col-6"
    />
  </q-btn-group>
</template>
