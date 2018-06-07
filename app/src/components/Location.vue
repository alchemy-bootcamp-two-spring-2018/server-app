<template id="location-template">
  <div>
    <h3>{{ location.name }}</h3>
      <p>Description: {{ location.description }}</p>
      <p>Neighborhood: {{ location.neighborhood }}</p>
      <p>Power Outlets Available: {{ location.power }}</p>
      <p>Alchemist Rated: {{ location.rating }}</p>
      <!-- TO DO:button -->
      
  </div>  
</template>

<script>
export default {
  props: ['location'],

};

</script>

<style scoped>

#location-template {
  font-family: Helvetica, sans-serif;
  color:rgb(7, 177, 245);
}
</style>
