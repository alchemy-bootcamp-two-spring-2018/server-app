<template>
  <div id="app">
    <h1>Motorcyle Inventory</h1>
    <main>
      <Motorcycles/>
    </main>

  </div>
</template>

<script>
import Motorcycles from './components/Motorcycles';

export default {

  components: {
    Motorcycles
  }
 
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Anton|Montserrat+Subrayada|Russo+One');
/* font-family: 'Russo One', sans-serif;
font-family: 'Anton', sans-serif;
font-family: 'Montserrat Subrayada', sans-serif; */

html {
  background: rgb(182, 199, 178);
  font-family: 'Anton', sans-serif;
}
h1 {
  text-align: center;
}

</style>
