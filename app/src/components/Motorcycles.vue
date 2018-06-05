<template>
  <div class="motorcycles">
    <ul>
      <Motorcycle
      v-for="motorcycle in motorcycles"
      :key="motorcycle.id"
      :motorcycle="motorcycle"
      />
    </ul>
    
    <AddMotorcycle/>

  </div>
</template>

<script>
import Motorcycle from './Motorcycle';
import AddMotorcycle from './AddMotorcycle';
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
    Motorcycle,
    AddMotorcycle
  }

};
</script>

<style scoped>
.motorcycles {
  display: flex;
  flex-flow: row nowrap;
  margin: 10px;
}

</style>
