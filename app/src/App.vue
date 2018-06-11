<template>
  <div id="app">
    <Guitarists/>
  </div>
</template>

<script>
import Guitarists from './components/Guitarists.vue'

export default {
  name: 'app',
  components: {
    Guitarists
  }
}
</script>

<style>
#app {
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
