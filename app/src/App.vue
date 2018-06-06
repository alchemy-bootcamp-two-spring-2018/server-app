<template>
 <div id="app">
   <header>
    <img src="./assets/logoWhite.png">
   </header>
   <LocationsList/>
 </div>
</template>

<script>
import LocationsList from './components/LocationsList.vue';
export default {
  components: {
    LocationsList
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
    border: solid black .3px;
    background-image: url('https://www.nps.gov/thingstodo/images/ISKY_MesaArch_1.jpg?width=950&quality=90&mode=crop');
    background-size: cover;
    background-position-y:80%;
  }
  header img {
    height: 100px;
    width: 500px;
  }
  body {
   margin: 0px;
  }
</style>
