<template>
  <option
    :value="guitar.id"
  >
    {{ guitar.brand }}
  </option>
</template>

<script>
export default {
  props: ['guitar']
}
</script>

<style>

</style>
