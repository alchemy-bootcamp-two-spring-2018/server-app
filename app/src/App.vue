<template>
  <div id="app">
    <header></header>
    <main>
      <Podcasts/>
    </main>
  </div>
</template>

<script>
import Podcasts from './components/Podcasts.vue';

export default {
  name: 'app',
  components: {
    Podcasts
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
