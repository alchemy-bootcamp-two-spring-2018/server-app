<template id="location-template">
  <div>
    <h3>{{ location.name }}</h3>
      <p>Description: {{ location.description }}</p>
      <p>Neighborhood: {{ location.neighborhood }}</p>
      <p>Are power outlets available?</p>
      <p v-if="location.power">Yes</p>
      <p v-else>no</p>
      <p>Alchemist Rated: {{ location.rating }}</p>
     
      <button @click="handleCLick">Remove This Location</button>
  </div>  
</template>

<script>
// TO DO: Marty line 32-39
export default {
  props: [
    'location',
    'onRemove'
    //'onUpdate'
  ],

  methods: {
    handleClick() {
      if(confirm('Not such a good place to code eh? Or maybe you just want to keep it quiet...')) {
        this.onRemove(this.location.id);
      }
    }
  }
};

</script>

<style scoped>

</style>
