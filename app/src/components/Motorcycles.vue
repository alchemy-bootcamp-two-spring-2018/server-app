<template>
  <div class="motorcycles">
    <ul>
      <Motorcycle
      v-for="motorcycle in motorcycles"
      :key="motorcycle.id"
      :motorcycle="motorcycle"
      />
    </ul>
    
    <AddMotorcycle :on-add="handleAdd"/>

  </div>
</template>

<script>
import Motorcycle from './Motorcycle';
import AddMotorcycle from './AddMotorcycle';
import { getMotorcycles, addMotorcycle } from '../services/api';

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
  },

  methods: {
    handleAdd(motorcycle) {
      return addMotorcycle(motorcycle)
        .then(saved => {
          this.motorcycles.push(saved);
        });
    }
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
