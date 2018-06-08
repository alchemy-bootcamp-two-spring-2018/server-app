<template>
  <section>
    <h2>Games List:</h2>
    <p v-if="!games">Loading Games...</p>
    <ul v-else class="list">
      <Game
        v-for="game in games"
        :on-delete="handleDelete"
        :on-update="handleUpdate"
        :key="game.name"
        :game="game"
      />
    </ul>
    <h2>Add A Game to the Database</h2>
    <GameForm
      :on-edit="handleAdd"
      label = "Add Game"
    />
  </section>
</template>

<script>
import Game from './Game';
import GameForm from './GameForm';
import { getGames, addGame, deleteGame, updateGame } from '../services/api';

export default {
  data() {
    return {
      games: null
    };
  },
  components: {
    Game,
    GameForm,
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
    handleDelete(id) {
      return deleteGame(id)
        .then(() => {
          const index = this.games.findIndex(game => game.id === id);
          if(index === -1) return;
          this.games.splice(index, 1);
        });
    },
    handleUpdate(toUpdate) {
      return updateGame(toUpdate)
        .then(updated => {
          this.games = this.games.map(game => {
            return game.id === updated.id ? updated : game;
          });
        });
    }
  }
};
</script>

<style>

</style>
