<template>
  <div class="locationsList">

    <Location
      v-for="location in locations"
      :key="location.name"
      :location="location"
    />
  </div>
</template>

<script>
import Location from './Location.vue';
import { getClimbingLocations } from '../services/api.js';
export default {
  data() {
    return {
      locations: null
    };
  },
  created() {
    getClimbingLocations()
      .then(locations => {
        this.locations = locations;
      });
  },
  components: {
    Location
  },

};
</script>

<style scoped>
  h2 {
    border: solid .5px;
  }
  .locationsList {
    float: left;
    height: 680px;
    overflow: auto;
    width: 45%;
    margin: auto;
    margin-top: -1px;
    border: solid 1px;
    background-color: rgba(201, 201, 201, 0.438);
  }
</style>
