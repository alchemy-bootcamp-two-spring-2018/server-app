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
import Locations from './components/Locations.vue';


export default {
  name: 'app',
  components: {
    Locations
    
  }
  
};
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
