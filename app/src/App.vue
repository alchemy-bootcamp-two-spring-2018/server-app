<template>
  <div id="app">
    <header>
      <img src="./assets/melee_logo.png" width="300px">
    </header>

    <section>
      <melee-characters/>
    </section>
  </div>
</template>

<script>
import MeleeCharacters from './components/MeleeCharacters.vue';

export default {
  name: 'app',

  components: {
    MeleeCharacters
  }
};
</script>

<style scoped>
#app {
  background: -webkit-linear-gradient(rgb(0, 0, 0), rgb(7, 7, 78));
  color: rgb(202, 202, 202);
  padding: 20px;
}

header {
  text-align: center;
}

img {
  margin-bottom: 75px;
  margin-top: 25px;
}
section {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

</style>



