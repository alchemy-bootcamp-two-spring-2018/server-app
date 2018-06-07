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
import AddWalrus from './AddWalrus.vue';
import { getWalruses, addWalrus } from '../services/api';

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
    AddWalrus
  },
  methods: {
    handleAdd(walrus) {
      return addWalrus(walrus)
      .then(saved => {
        this.walruses.push(saved);
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
