<template id="location-template">
  <div>
    <h3>{{ location.name }}</h3>
      <p>Description: {{ location.description }}</p>
      <p>Quadrant: {{ location.quadrant }}</p>
      <p>Are power outlets available?</p>
      <p v-if="location.power">Yes</p>
      <p v-else>no</p>
      <p>Alchemist Rated: {{ location.rating }}</p>   
      <button @click="handleClick">Remove This Location</button>
      <button @click="editing = !editing">{{ editing ? 'Cancel' : 'Edit Listing' }}</button>
  </div> 
  <!-- refer to Marty recent code for cancel edit button above  -->
</template>

<script>
import AddLocation from './AddLocation';

export default {
  data() {
    return {
      editing: false
    };
  },

  components: {
    AddLocation
  },

  props: [
    'location',
    'onRemove',
    'onUpdate',
    'onEdit'
  ],

  methods: {
    handleClick() {
      if(confirm('Not such a good place to code afterall?')) {
        this.onRemove(this.location.id);
      }
    }
  }
};

</script>

<style scoped>

</style>
