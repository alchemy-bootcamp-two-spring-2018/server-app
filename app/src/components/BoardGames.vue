<template>
  <div class="board-games-list">
    <h2>list</h2>
    <BoardGame
      v-for="n in 4"
      :key="n"
    />
  </div>
</template>

<script>
import BoardGame from './BoardGame';
export default {
  components: {
    BoardGame
  }
};
</script>

<style>

</style>
