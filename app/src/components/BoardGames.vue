<template>
  <div class="board-games-list" >
    <BoardGame
      v-for="boardGame in boardGames"
      :key="boardGame.name"
      :boardGame="boardGame"
      :onDelete="handleDelete"
    />
    <AddBoardGame :onAdd="handleAdd"/>
  </div>
</template>

<script>
import BoardGame from './BoardGame';
import AddBoardGame from './AddBoardGame';
import { getBoardGames, addBoardGame, deleteBoardGame } from '../services/api';

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
      return addBoardGame(boardGame)
        .then(saved => {
          this.boardGames.push(saved);
        });
    },
    handleDelete(boardGame) {
      return deleteBoardGame(boardGame)
        .then(getBoardGames()
          .then(boardGames => {
            this.boardGames = boardGames;
          }));
    }
  }
};
</script>

<style>
.board-games-list {
  display: flex;
  flex-wrap: wrap;

}
</style>
