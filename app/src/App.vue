<template>
  <div id="app">
    <h1>My First Server, Hurrrrr..!</h1>
    <AllGames/>
  </div>
</template>

<script>
import AllGames from './components/AllGames';
   
export default {

  components: {
    AllGames
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
