<template>
  <div>
    <h2>Make: {{ motorcycle.make }}</h2>
    <p>Model: {{ motorcycle.model }}</p>
    <p>Year: {{ motorcycle.year }}</p>
    <p>Color: {{ motorcycle.color }}</p>
  </div>
</template>

<script>

export default {

  props: ['motorcycle']
  
};
</script>

<style scoped>

</style>
