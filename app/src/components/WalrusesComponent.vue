<template>
  <section>
    <h2>List of Notable Walruses</h2>
    <p v-if="!walruses">Hauling Out Walruses....</p>
    <ul v-else class="list">
      <WalrusesComponent
        v-for="walrus in walruses"
        :key="walrus.name"
        :walrus="walrus"
        />
    </ul>
    <AddWalrus :on-add="handleAdd" />
  </section>
</template>

<script>
import WalrusesComponent from './WalrusesComponent';
import AddWalrus from './AddWalrus.vue';
import { getWalruses, AddWalrus, addWalrus } from '../services/api';

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
    WalrusesComponent,
    AddWalrus
  },
  methods: {
    handleAdd(walruses) {
      return addWalrus(walruses)
      .then(saved => {
        this.walruses.push(saved);
      });
    }
  }

};
</script>

<style>
ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

</style>
