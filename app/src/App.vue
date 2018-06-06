<template>
  <div id="app">
    <header>
      <h1>DOPE</h1>
      <h1>BOARD</h1>
      <h1>GAMES</h1>
    </header>
    <main>
      <BoardGames />
    </main>
  </div>
</template>

<script>
import BoardGames from './components/BoardGames';

export default {
  components: {
    BoardGames
  }
};
</script>

<style>
body {
  margin: 0px;
  font-family: 'Arial', sans-serif;
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
