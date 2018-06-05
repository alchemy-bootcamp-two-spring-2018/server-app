<template>
  <div class="board-games-list">
    <h2>list</h2>
    <BoardGame
      v-for="boardGame in boardGames"
      :key="boardGame.name"
      :boardGame="boardGame"
    />
  </div>
</template>

<script>
import BoardGame from './BoardGame';
import { getBoardGames } from '../services/api';

export default {
  data() {
    return {
      boardGames: null
    };
  },
  created() {
    getBoardGames()
      .then(boardGames => {
        this.boardGames = boardGames;
      });
  },
  components: {
    BoardGame
  }
};
</script>

<style>

</style>
