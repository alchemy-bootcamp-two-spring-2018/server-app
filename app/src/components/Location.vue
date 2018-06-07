<template id="location-template">
  <div>
    <h3>{{ location.name }}</h3>
      <p>Description: {{ location.description }}</p>
      <p>Neighborhood: {{ location.neighborhood }}</p>
      <p>Are power outlets available?</p>
      <p v-if="location.power">Yes</p>
      <p v-else>no</p>
      <p>Alchemist Rated: {{ location.rating }}</p>
      <!-- TO DO: button -->
      <button>X</button>
  </div>  
</template>

<script>
export default {
  props: ['location'],

};

</script>

<style scoped>

</style>
