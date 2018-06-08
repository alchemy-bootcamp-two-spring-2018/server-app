<template>
  <div class="board-games-list" >
    <BoardGame
      v-for="boardGame in boardGames"
      :key="boardGame.name"
      :boardGame="boardGame"
      :onDelete="handleDelete"
      :onUpdate="handleUpdate"
      :categories="categories"
    />
    <AddBoardGame :onAdd="handleAdd" :categories="categories"/>
  </div>
</template>

<script>
import BoardGame from './BoardGame';
import AddBoardGame from './AddBoardGame';
import { 
  getBoardGames,
  addBoardGame,
  deleteBoardGame,
  updateBoardGame,
  getCategories
} from '../services/api';

export default {
  data() {
    return {
      boardGames: null,
      categories: []
    };
  },
  created() {
    getBoardGames()
      .then(boardGames => {
        this.boardGames = boardGames;
      });
    getCategories().then(categories => {
      this.categories = categories;
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
          console.log(saved);
          this.boardGames.push(saved);
        });
    },
    handleDelete(id) {
      return deleteBoardGame(id)
        .then(this.boardGames = this.boardGames.filter(item => item.id !== id));
    },
    handleUpdate(boardGame) {
      updateBoardGame(boardGame);
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
