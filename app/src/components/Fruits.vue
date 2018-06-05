<template>
<section>
  <h2>Fruits</h2>
  <p v-if="!fruits">Loading fruits...</p>
  <ul v-else class="list">
    <Neighborhood
      v-for="fruit in fruits"
      :key="fruit.name"
      :neighborhood="fruit"
    />
  </ul>
  <AddFruit :on-add="handleAdd"/>
</section>
</template>

<script>
import Fruit from './Fruit';
import AddFruit from './AddFruit.vue';
import { getFruits, AddFruit } from '../services/api';
export default {
  data() {
    return { 
      fruits: null
    };
  },
  created() {
    getFruits()
      .then(fruits => {
        this.fruits = fruits;
      });
  },
  components: { 
    Fruit,
    AddFruit 
  },
  methods: {
    handleAdd(fruits) {
      return addFruit(fruit)
        .then(saved => {
          this.fruits.push(saved);
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
