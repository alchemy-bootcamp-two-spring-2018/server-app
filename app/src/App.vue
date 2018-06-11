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
html {
  background: rgb(220, 141, 141);
}
h1, h2, h3, p, label {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;
}
</style>
