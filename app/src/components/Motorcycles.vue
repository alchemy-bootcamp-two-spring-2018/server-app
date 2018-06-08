<template>
  <div class="motorcycles">
    <ul class="tiles">
      <Motorcycle
      v-for="motorcycle in motorcycles"
      :key="motorcycle.id"
      :motorcycle="motorcycle"
      :on-remove="handleRemove"
      :on-update="handleUpdate"
      />
    </ul>
    
    <MotorcycleForm
    label="Add Motorcycle"
    :on-edit="handleAdd"
    />

  </div>
</template>

<script>
import Motorcycle from './Motorcycle';
import MotorcycleForm from './MotorcycleForm';
import { getMotorcycles, addMotorcycle, removeMotorcycle, updateMotorcycle } from '../services/api';

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
    },
    handleUpdate(toUpdate) {
      return updateMotorcycle(toUpdate)
        .then(updated => {
          this.motorcycles = this.motorcycles.map(motorcycle => {
            return motorcycle.id === updated.id ? updated : motorcycle;
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
  justify-content: center;
  margin: 10px;
}
.tiles {
  width: 300px;
  min-width: 300px;
}

</style>
