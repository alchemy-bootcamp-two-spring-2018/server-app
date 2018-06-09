<template>
  <div id="app">
    <header>
      <h1>GAME</h1>
      <h1>PLANNER</h1>
    </header>
    <main>
      <Events />
    </main>
  </div>
</template>

<script>
import Events from './components/Events';

export default {
  components: {
    Events
  }
};
</script>

<style>
body {
  margin: 100px;
  font-family: 'Arial', sans-serif;
  background:
    linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
}
#app {
  display: grid;
  grid-template: 350px auto / 50px 1fr 50px;
  grid-template-areas:
    ". title ."
    ". content .";
}

header {
  grid-area: title;
  text-align: right;
}

header>h1 {
  font-family: 'Abril Fatface', cursive;
  margin: 0px;
  font-size: 5em;
}

main {
  grid-area: content;
}


</style>
