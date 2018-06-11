<template>
  <div class="main-div">

    <h1>Cocktail Alley</h1>

    <CocktailList />

  </div>
</template>

<script>
import CocktailList from './components/CocktailList';

export default {

  components: {
    CocktailList
  }

};
</script>

<style>

html {
  background: url('./assets/background.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

h1 {
  display: flex;
  justify-content: center;
  font-size: 4em;
  font-family: 'Cinzel Decorative', cursive;
  color: mediumseagreen;
}

</style>
