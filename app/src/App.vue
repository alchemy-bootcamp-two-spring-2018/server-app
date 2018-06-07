<template>
  <div id="app">
    <img src="./assets/logo.png">
    <main>
      <shops/>
    </main>
  </div>
</template>

<script>
import Shops from './components/Shops.vue'

export default {
  name: 'app',
  components: {
    Shops
  }
}
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
</style>
