<template>
<section>
  <h2>Fruits</h2>
  <p v-if="!fruits">Loading fruits...</p>
  <ul v-else class="list">
    <Fruit
      v-for="fruit in fruits"
      :key="fruit.name"
      :fruit="fruit"
      :on-remove="handleRemove"
      :on-update="handleUpdate"
    />
  </ul>
  <h3>Add a new fruit</h3>
  <FruitForm
    label="Add" 
    :on-edit="handleAdd"/>
</section>
</template>

<script>
import Fruit from './Fruit';
import FruitForm from './FruitForm.vue';
import { 
  getFruits, 
  addFruit, 
  updateFruit,
  removeFruit,
  getClassifications } from '../services/api';

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
    getClassifications()
      .then(classifications => {
        this.classifications = classifications;
      });  
  },
  components: { 
    Fruit,
    FruitForm 
  },
  methods: {
    handleAdd(fruit) {
      return addFruit(fruit)
        .then(saved => {
          this.fruits.push(saved);
        });
    },
    handleRemove(id) {
      return removeFruit(id)
        .then(() => {
          const index = this.fruits.findIndex(fruit => fruit.id === id);
          if(index === -1) return;
          this.fruits.splice(index, 1);
        });
    },
    handleUpdate(toUpdate) {
      return updateFruit(toUpdate)
        .then(updated => {
          this.fruits = this.fruits.map(fruit => {
            return fruit.id === updated.id ? updated : fruit;
          });
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
