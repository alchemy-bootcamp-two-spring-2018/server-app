<template>
  <div id="app">
    <h1>Games TODO Server</h1>
    <Games/>
  </div>
</template>

<script>
import Games from './components/Games';
   
export default {

  components: {
    Games
  }
};
</script>

<style>
body {
  background: rgb(3, 0, 26);
  color: white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
