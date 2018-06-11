<template>
  <li>
    <section v-if="!editing">
      <h2>{{ cocktail.name.toUpperCase() }}</h2>
      <img :src="cocktail.image">
      <p><b>ALCOHOL:</b> {{ alcohol }}</p>
      <p><b>MAIN INGREDIENTS: </b> {{ cocktail.ingredients }}</p>
      <p><b>SERVED:</b> {{ cocktail.served }}</p>
      <p><b>STANDARD GARNISH:</b> {{ cocktail.garnish }}</p>
      <p><b>TRIED: </b> <span v-if="cocktail.tried">Yes</span> <span v-else>No</span></p>    
    </section>

    <CocktailForm
    v-else
    label="Update"
    header=""
    :cocktail="cocktail"
    :alcohols="alcohols"
    :onEdit="handleUpdate"
    />

    <button @click="editing = !editing">{{ editing ? 'Cancel' : 'Edit' }}</button>
    <button @click="handleRemove" type="submit">Delete</button> 

  </li>
</template>

<script>
import CocktailForm from './CocktailForm';

export default {

  data() {
    return {
      editing: false
    };
  },  

  computed: {
    alcohol() {
      if(!this.alcohols) return null;
      const alcohol = this.alcohols.find(a => a.id === this.cocktail.alcoholID);
      return alcohol ? alcohol.alcohol : 'Unknown';
    }
  },

  methods: {

    handleRemove() {
      if(confirm(`Are you sure you want to remove ${this.cocktail.name}?`)) {
        return this.onDelete(this.cocktail);
      }
    },

    // handleRemove() {
    //   return this.onDelete(this.cocktail);
    // },

    handleUpdate(toUpdate) {
      return this.onUpdate(toUpdate)
        .then(() => {
          this.editing = false;
        });
    }
  },

  props: [
    'onDelete',
    'onUpdate',
    'cocktail',
    'alcohols',
  ],

  components: {
    CocktailForm
  }
};

</script>

<style scoped>

h2 {
  margin-top: 0px;
  margin-bottom: 10px;
  color: firebrick;
  font-weight: bold;
}

li {
  background: rgb(0, 0, 0, .85);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 30px;
  color: white;
  font-size: 20px;
  font-family: 'Architects Daughter', cursive;
}

p {
  margin: 0px;
}

img {
  width: 225px;
}

button {
  margin-top: 15px;
  margin-right: 10px;
  font-size: 15px;
  border-radius: 5px;
}

b {
  color: peru;
}
</style>


