<template>
  <div>

    <ul>
      <Cocktail
        v-for="cocktail in cocktails"
        :key="cocktail.name"
        :cocktail="cocktail"
        :alcohols="alcohols"
        :onDelete="handleDelete"
        :onUpdate="handleUpdate"
        />
    </ul>

    <section id="form">
      <CocktailForm
      label="Add"
      header="Create a new cocktail"
      :onEdit="handleAdd"
      />
    </section>
   
  </div>
</template>

<script>
import Cocktail from './Cocktail';
import CocktailForm from './CocktailForm';
import { 
  getCocktails, 
  addCocktail, 
  deleteCocktail,
  getAlcohols,
  updateCocktail } from '../services/api';

export default {

  data() {
    return {
      cocktails: null,
      alcohols: null
    };
  },

  created() {
    getCocktails()
      .then(cocktails => {
        this.cocktails = cocktails;
      });

    getAlcohols()
      .then(alcohols => {
        this.alcohols = alcohols;
      });
  },

  methods: {
    handleAdd(cocktail) {
      return addCocktail(cocktail)
        .then(saved => {
          this.cocktails.push(saved);
        });
    },

    handleDelete(cocktail) {
      return deleteCocktail(cocktail)
        .then(() => {
          getCocktails()
            .then(cocktails => {
              this.cocktails = cocktails;
            });
        });
    },

    handleUpdate(toUpdate) {
      return updateCocktail(toUpdate)
        .then(updated => {
          this.cocktails = this.cocktails.map(cocktail => {
            return cocktail.id === updated.id ? updated : cocktail;
          });
        });
    }
  },

  components: {
    Cocktail,
    CocktailForm
  }
};
</script>

<style scoped>

div {
  display: flex;
  justify-content: space-evenly;
}

#form {
  position: sticky;
  top: 30px;
  background: rgba(0, 0, 0, .85);
  border-radius: 5px;
  padding: 15px;
  height: 40%;
}

ul {
  list-style-type: none;
  -webkit-margin-before: 0;
}

</style>
