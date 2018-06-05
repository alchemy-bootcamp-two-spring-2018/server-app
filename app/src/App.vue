<template>
  <div id="app">
    <header>
    </header>
    <main>
      <Programs/>
    </main>
  </div>
</template>

<script>
import Programs from './components/Programs';

export default {
  name: 'app',
  components: {
    Programs
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
