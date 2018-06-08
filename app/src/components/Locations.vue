<template>
  <div class="all-locations">
    <h2>Alchemists About Town</h2>
    <h4>Good spots in and near Portland to hang out and code</h4>
    <hr>
    <p v-if="!locations">Loading Reccommended Study Spots...</p>
    <ul v-else class="list">
      <Location
        v-for="location in locations"
        :key="location.id"
        :location="location"
        :on-remove="handleRemove"
      />
        <!-- on:update goes line above here -->
    </ul>

    <AddLocation
      label="Add"
      :on-add="handleAdd"
     /> 
  </div>
</template>

<script>
import Location from './Location';
import AddLocation from './AddLocation.vue';
import { 
  getLocations, 
  addLocation,
  //updateLocation,
  removeLocation } from '../services/api';


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
    AddLocation
  },

  methods: {
    handleAdd(location) {
      return addLocation(location)
        .then(saved => {
          this.locations.push(saved);
        });
    },
    handleRemove(id) {
      return removeLocation(id)
        .then(() => {
          const index = this.locations.findIndex(location => location.id === id);
          if(index === -1) return;
          this.locations.splice(index, 1);
        });
    },
    //TO DO: line 62 Marty handleUpdate(toUpdate) {
    //return updateLocation(toUpdate) .......
    
  }
};


</script>

<style>

.all-locations {
  font-family: Arial, Helvetica, sans-serif;
}

h2 {
  color: #fff;
  background-color: #39499B;
  padding: 10px;
  text-align: center;
}

h3{
  padding-top: 60px;
}

h4 {
  color: #00AA8F;
  text-align: center;
}

li {
  color: rgb(51, 51, 51);
}


</style>
