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
  /* height: 700px; */
  margin: 0 auto;
  padding-bottom: 50px;
  text-align: center
}

#subscription-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

ul {
  display: flex;
  justify-content: center;
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

.add-subscription {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  background: #eee;
  width: 40%;
  border-radius: 3px;
}

.input-row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.input-small {
  display: flex;
  justify-content: flex-start;
}

.input-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

button {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  border-radius: 5px;
}

input {
  margin-left: 5px;
}
</style>
