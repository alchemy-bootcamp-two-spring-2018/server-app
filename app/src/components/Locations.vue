<template>
  <div class="all-locations">
    <h2>Alchemists About Town</h2>
    <h4>Good spots in and near Portland to hang out and code</h4>
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
import AddLocation from './AddLocation.vue';
import { getLocations, addLocation } from '../services/api';


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
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
