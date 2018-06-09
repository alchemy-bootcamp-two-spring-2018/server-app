<template>
  <div id="app">
    <header>
      <h1>GP</h1>
      <h6>🏠</h6>
      <h6>🗓</h6>
      <h6>💰</h6>
      <h6>🔮</h6>
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
  font-family: 'Dosis', sans-serif;
  margin: 10px;
  font-size: 2em;
}

h1 {
    font-family: 'Dosis', sans-serif;
    font-weight: 400;
    color: #122A59;
    letter-spacing: 5px;
}

header>h6 {
  font-size: 1.5em;
}
</style>
