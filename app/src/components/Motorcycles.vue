<template>
  <div class="motorcycles">
    <ul class="tiles">
      <Motorcycle
      v-for="motorcycle in motorcycles"
      :key="motorcycle.id"
      :motorcycle="motorcycle"
      :on-remove="handleRemove"
      />
    </ul>
    
    <MotorcycleForm
    :on-add="handleAdd"
    />

  </div>
</template>

<script>
import Motorcycle from './Motorcycle';
import MotorcycleForm from './MotorcycleForm';
import { getMotorcycles, addMotorcycle, removeMotorcycle } from '../services/api';

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
    MotorcycleForm
  },

  methods: {
    handleAdd(motorcycle) {
      return addMotorcycle(motorcycle)
        .then(data => {
          this.motorcycles.push(data);
        });
    },
    handleRemove(motorcycle) {
      return removeMotorcycle(motorcycle)
        .then(() => {
          getMotorcycles()
            .then(motorcycles => {
              this.motorcycles = motorcycles;
            });
        });
    }
  }
};
</script>

<style scoped>
.motorcycles {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin: 10px;
}
.tiles {
  width: 300px;
  min-width: 300px;
}

</style>
