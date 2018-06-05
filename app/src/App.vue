<template>
  <div id="app">
    <header>
    <!-- <img src="./assets/logo.png"> -->
    </header>

    <main>
      <Fruits/>
    </main>  
  </div>
</template>

<script>
import Fruits from './components/Fruits.vue'

export default {
  name: 'app',
  components: {
    Fruits
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
  margin-top: 20px;
}

/* header img {
  width: 100px;
} */
</style>
