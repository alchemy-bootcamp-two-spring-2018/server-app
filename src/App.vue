<template>
  <div id="app">
    <header />
    <main>
      <guitarists />
    </main>
  </div>
</template>

<script>
import Guitarists from './components/Guitarists'

export default {
  name: 'app',
  components: {
    Guitarists
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
