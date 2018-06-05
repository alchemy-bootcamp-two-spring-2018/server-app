<template>
  <div id="app">
    <header>
      <h1>Cool Board Games</h1>
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
}
</style>
