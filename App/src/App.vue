<template>
  <div id="app">
    <header>
    </header>

    <main>
      <Amps/>      
    </main>
  </div>
</template>

<script>
import Amps from './components/Amps.vue';

export default {
  name: 'app',
  components: {
    Amps
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
  margin-top: 60px;
}
header img {
  width: 100px;
}
</style>
