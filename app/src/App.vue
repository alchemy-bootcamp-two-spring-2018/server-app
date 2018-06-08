<template>
  <div id="app">
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

html {
  background-image: url('./assets/bg_motorcycle.png');
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Anton', sans-serif;
}
</style>
