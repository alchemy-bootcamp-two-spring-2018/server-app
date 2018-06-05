<template>
  <div>
    <h1>Favorite Motorcycles</h1>
    <ul>
      <Motorcycle
      v-for="motorcycle in motorcycles"
      :key="motorcycle.id"
      :motorcycle="motorcycle"
      />
    </ul>
  </div>
</template>

<script>
import Motorcycle from './Motorcycle';
import { getMotorcycles } from '../services/api';

export default {
  data() {
    return {
      motorcycles: null
    };
  },

  created() {
    getMotorcycles()
      .then(motorcycles => {
        this.motorcycles = motorcycles;
      });
  },

  components: {
    Motorcycle
  }

};
</script>

<style scoped>

</style>
