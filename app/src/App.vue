<template>
  <div id="app">
    <Rappers/>
  </div>
</template>

<script>
import Rappers from './components/Rappers.vue';

export default {
  
  components: {
    Rappers
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
