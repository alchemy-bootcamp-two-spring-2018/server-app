<template>
  <div class="board-games-list">
    <BoardGame
      v-for="boardGame in boardGames"
      :key="boardGame.name"
      :boardGame="boardGame"
    />
    <AddBoardGame :onAdd="handleAdd"/>
  </div>
</template>

<script>
import BoardGame from './BoardGame';
import AddBoardGame from './AddBoardGame';
import { getBoardGames } from '../services/api';
import { addBoardGame } from '../services/api';

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
    BoardGame,
    AddBoardGame
  },
  methods: {
    handleAdd(boardGame) {
      addBoardGame(boardGame)
        .then(saved => {
          this.boardGames.push(saved);
        });
    }
  }
};
</script>

<style>

</style>
