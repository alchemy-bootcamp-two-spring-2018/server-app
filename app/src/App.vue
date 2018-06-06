<template>
  <div id="app">
    <header>
      <h1>Melee</h1>
      <img src="./assets/SmashBall.png" width="250px">
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




