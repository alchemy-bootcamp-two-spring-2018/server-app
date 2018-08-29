<template>
  <section>
    <ul class="list">
    <AddGame :on-add="handleAdd"/>
    <h2>Games List:</h2>
      <Game
        :onDelete="handleDelete"
        v-for="game in games"
        :key="game.name"
        :game="game"
      />
    </ul>
  </section>
</template>

<script>
import Game from './Game';
import AddGame from './AddGame';
import { getGames, addGame, deleteGame } from '../services/api';

export default {
  data() {
    return {
      games: null
    };
  },
  components: {
    Game,
    AddGame,
  },
  created() {
    getGames()
      .then(games => {
        this.games = games;
      });
  },
  methods: {
    handleAdd(game) {
      return addGame(game)
        .then(saved => {
          this.games.push(saved);
        });
    },
    handleDelete(game) {
      deleteGame(game);
      getGames()
        .then(games => {
          this.games = games;
        });'';
    }
  }
};
</script>

<style>

</style>
