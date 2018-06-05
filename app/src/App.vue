<template>
  <div id="app">
    <main>
      <WalrusesComponent/>
    </main>
  </div>
</template>

<script>
import WalrusesComponent from './components/WalrusesComponent.vue';


export default {
  name: 'app',
  components: {
    WalrusesComponent
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
