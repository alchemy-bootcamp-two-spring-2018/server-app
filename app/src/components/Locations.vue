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
  </div>
</template>

<script>
import Location from './Location';
import { getLocations } from '../services/api';

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
    Location
  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
