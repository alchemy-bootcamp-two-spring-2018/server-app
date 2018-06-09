<template>
  <div id="app">
    <header>
      <h1>GP</h1>
      <h6>🏠</h6>
      <h6>🗓</h6>
      <h6>💰</h6>
      <h6>🔮</h6>
      <h6>🎲</h6>
      <h6>🔍</h6>
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
  margin: 0px;
}

#app {
  display: grid;
  grid-template: 805px / 100px 1fr;
  font-family: 'Roboto', sans-serif;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

header>h1 {
  font-family: 'Crimson Text', sans-serif;
  margin: 10px;
  font-size: 2em;
}

h1 {
    font-family: 'Crimson Text', sans-serif;
    color: #122A59;
}

h6 {
  margin: 0px;
}

header>h6 {
  font-size: 1.5em;
  opacity: .8;
  transition: all .4s ease;
}

h6:hover {
  opacity: 1;
}
</style>
