<template>
  <section>
    <div id = "add-walrus">
    <AddWalrus :on-add="handleAdd" />
    </div>
    <p v-if="!walruses">Hauling Out Walruses....</p>
    <div v-else class="list">
      <IndividualWalrus
        v-for="walrus in walruses"
        :key="walrus.name"
        :walrus="walrus"
        />
    </div>
    
  </section>
</template>

<script>
import IndividualWalrus from './IndividualWalrus';
import WalrusForm from './WalrusForm';
import { getWalruses, addWalrus, getTypes } from '../services/api';

export default {
  data() {
    return {
      walruses: null
    };
  },
  created() {
    getWalruses()
      .then(walruses => {
        this.walruses = walruses;
      });
  },
  components: {
    IndividualWalrus,
    AddWalrus,
    WalrusForm
  },
  methods: {
    handleAdd(walrus) {
      return addWalrus(walrus)
      .then(saved => {
        this.walruses.push(saved);
      });
    },
    handleRemove(id) {
      return removeWalrus(id)
        .then(() => {
          const index = this.walrus.findIndex(walrus => walrus.id === id);
          if(index === -1) return;
          this.walrus.splice(index, 1);
        });
    },
    handleUpdate(toUpdate) {
      return updateWalrus(toUpdate) 
        .then(updated => {
          this.walruses = this.walruses.map(walrus => {
            return walrus.id === updated.id ? updated : walrus;
          });
        });

      }
    }
  };


</script>

<style>
.list {
  float: right;
  margin-left: 20px;
  width: 40%;
}
#add-walrus {
  float: left;
  width: 30%;
  margin-left: 50px;
}

</style>
