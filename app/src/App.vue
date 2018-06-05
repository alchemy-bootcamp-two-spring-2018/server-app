<template>
  <div id="app">
    <Subscriptions/>
  </div>
</template>

<script>
import Subscriptions from './components/Subscriptions.vue';

export default {
  name: 'app',
  components: {
    Subscriptions
  }
};
</script>

<style>
body{
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  height: 700px;
  margin: 0 auto;
  padding-bottom: 50px;
  text-align: center
}

ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

article {
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  background: #eee;
  width: 225px;
  height: 250px;
  border-radius: 5px;
}
</style>
