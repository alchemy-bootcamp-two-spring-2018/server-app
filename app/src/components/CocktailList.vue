<template>
  <div class="cocktail">

    <section class="cocktail-section">
      <Cocktail
        v-for="cocktail in cocktails"
        :key="cocktail.name"
        :cocktail="cocktail"
        />
    </section>

    <section class="form-section">
      <AddCocktail :onAdd="handleAdd"/>
    </section>

  </div>
</template>

<script>
import Cocktail from './Cocktail';
import AddCocktail from './AddCocktail';
import { getCocktails, addCocktail } from '../services/api';

export default {

  data() {
    return {
      cocktails: null
    };
  },

  created() {
    getCocktails()
      .then(cocktails => {
        this.cocktails = cocktails;
      });
  },

  methods: {
    handleAdd(cocktail) {
      return addCocktail(cocktail)
        .then(saved => {
          this.cocktails.push(saved);
        });
    }
  },

  components: {
    Cocktail,
    AddCocktail
  }
};
</script>

<style>

.cocktail {
  display: flex;
  justify-content: space-around;
}

.cocktail-section {
  margin-left: 50px;
}

.form-section {
  margin-left: 50px;
  margin-right: 50px;
}
</style>
