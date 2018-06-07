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
  background-image: url('./assets/background.jpg');
  background-attachment: fixed;
}

h1 {
  display: flex;
  justify-content: center;
  font-size: 4em;
  color: whitesmoke;
  font-family: 'Cinzel Decorative', cursive;
}

.main-div {
  display: flex;
  flex-direction: column;
}

</style>
