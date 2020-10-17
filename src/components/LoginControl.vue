<script>
export default {
  props: {
    isInDrawer: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <q-btn-group
    class="row"
    :class="{'q-px-sm': $q.screen.gt.sm}"
    outline
  >
    <q-btn
      stretch
      :outline="isInDrawer"
      :flat="!isInDrawer"
      :color="isInDrawer ? 'primary' : 'white'"
      label="LOGIN"
      type="a"
      to="/login"
      class="col-6"
    />
    <q-btn
      stretch
      :outline="isInDrawer"
      :flat="!isInDrawer"
      :color="isInDrawer ? 'primary' : 'white'"
      label="REGISTER"
      type="a"
      to="/register"
      class="col-6"
    />
  </q-btn-group>
</template>
