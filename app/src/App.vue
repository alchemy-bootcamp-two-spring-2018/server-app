<template>
  <div id="app">
    <header>
      <img src="">
    </header>
    <main>
      <Locations/>
    </main>
  </div>
</template>

<script>
import locations from './components/Locations.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
