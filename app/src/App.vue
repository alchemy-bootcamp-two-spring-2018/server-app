<template>
 <div id="app">
   <header>
   <h1>Climbing Locations</h1>
   </header>
   <Locations/>
 </div>
</template>

<script>
import Locations from './components/LocationsList.vue';
export default {

  components: {
    Locations
  }
};
</script>

<style>
  #app {
    text-align: center;
    margin: 0px;
  }
  html {
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/1/19/Overhanging_rock_climbing.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    
  }
  header {
    border: solid .3px;
    background-image: 
  }
  body {
   margin: 0px;
  }
</style>
