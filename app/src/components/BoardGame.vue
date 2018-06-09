<template>
  <ul class="board-game">
    <li>Category: {{ category }}</li>
    <li>Maximum Number of PLayers: {{ boardGame.players }}</li>
    <li>Average Playing Time: {{ boardGame.avgPlayingTime }} minutes</li>
    <li>Description: {{ boardGame.description }}</li>
  </ul>
</template>

<script>
import { getCategories } from '../services/api';
export default {
  data() {
    return {
      categories: null
    };
  },
  computed: {
    category() {
      if(!this.categories) return null;
      const category = this.categories.find(c => c.id === this.boardGame.categoryID);
      return category;
    }
  },
  created() {
    getCategories().then(categories => {
      this.categories = categories;
    });
  },
  props: ['boardGame']
};
</script>

<style>
ul {
  background: lightgrey;
}
</style>
