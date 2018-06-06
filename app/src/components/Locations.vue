<template>
  <div class="all-locations">
    <h2>Alchemists About Town</h2>
    <p v-if="!locations">Loading Reccommended Study Spots...</p>
    <ul v-else class="list">
      <Location
        v-for="location in locations"
        :key="location.name"
        :location="location"
      />
    </ul>
    <AddLocation :on-add="handleAdd"/> 
  </div>
</template>

<script>
import Location from './Location';
import AddLocations from './AddLocation.vue';
import { getLocations, addLocations } from '../services/api';


export default {
  data() {
    return {
      locations: null
    };
  },
  created() {
    getLocations()
      .then(locations => {
        this.locations = locations;
      });
  },
  components: {
    Location,
    AddLocations
  },
  methods: {
    handleAdd(location) {
      return addLocations(location)
        .then(saved => {
          this.locations.push(saved);
        });
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
