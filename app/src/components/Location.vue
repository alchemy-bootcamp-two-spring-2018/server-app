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
      <li :class="{ selected }">
      <article 
      v-if="!editing"
      @click="handleSelect">
        <strong>{{ location.name }}</strong>
        <span in {{ quadrant }} ></span>
        <button v-if="!editing" @click="editing = true"></button>
        <button @click="handleClick">DELETE</button>
    </article>

    <LocationForm 
      v-else 
      label="Update"
      :location="location" 
      :quadrants="quadrants"
      :on-edit="handleUpdate"
      :on-cancel="() => editing = false"
    />
    
  </li>
</div>   
  
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
    'quadrants',
    'selected',
    'onRemove',
    'onUpdate',
    'onSelect'
  ],

  computed: {
    quadrant() {
      if(!this.quadrants) return null;
      const quadrant = this.quadrants.find(q => q.id === this.location.quadrant.id);
      return quadrant;
    }
  },

  methods: {
    handleClick() {
      if(confirm('Not such a good place to code afterall?')) {
        this.onRemove(this.location.id);
      }
    },
    handleUpdate(toUpdate) {
      return this.onUpdate(toUpdate)
        .then(() => {
          this.editing = false;
        });
    },
    handleSelect() {
      this.onSelect(this.location.id);
    }
  }
};

</script>

<style scoped>

</style>
