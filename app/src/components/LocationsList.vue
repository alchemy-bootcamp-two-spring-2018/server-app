<template>
  <div>
    <div class="locationsList">
      <Location
        v-for="location in locations"
        :key="location.name"
        :location="location"
        :on-delete="handleDelete"
      />
    </div>
    <div class="add-location">
      <AddLocation :on-add="handleAdd"/>
    </div>
  </div>
</template>

<script>
import Location from './Location.vue';
import AddLocation from './AddLocation.vue';
import { getClimbingLocations, addLocation, deleteLocation } from '../services/api.js';
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
    Location,
    AddLocation
  },
  methods: {
    handleAdd(location) {
      return addLocation(location)
        .then(saved => {
          this.locations.push(saved);
        });
    },
    handleDelete(location) {
      return deleteLocation(location)
        .then(this.locations = this.locations.filter(item => item.id !== location.id));

    }
  }
};
</script>

<style scoped>
  h2 {
    border: solid .5px;
  }
  .locationsList {
    float: left;
    height: 660px;
    overflow: auto;
    width: 45%;
    margin: auto;
    margin-top: -1px;
    border: solid 1px;
    background-color: rgba(201, 201, 201, 0.438);
  }
  .add-location {
    float: right;
    height: 660px;
    overflow: auto;
    width: 45%;
    margin: auto;
    margin-top: -1px;
    border: solid 1px;
    background-color: rgba(201, 201, 201, 0.438);
  }
 
</style>
