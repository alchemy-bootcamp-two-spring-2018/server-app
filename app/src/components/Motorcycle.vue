<template>
  <div class="content">
    <h2>Make: {{ motorcycle.make }}</h2>
    <p>Model: {{ motorcycle.model }}</p>
    <p>Year: {{ motorcycle.year }}</p>
    <p>Color: {{ motorcycle.color }}</p>
    <p v-if="motorcycle.sold">Status: SOLD!</p>
    <p v-else>Status: FOR SALE!</p>
  </div>
</template>

<script>

export default {

  props: ['motorcycle']
  
};
</script>

<style scoped>

</style>
