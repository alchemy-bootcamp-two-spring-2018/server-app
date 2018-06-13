<template>
  <section>
    <h3>All Time Games List</h3>
    <ul class="list">
      <Game
        v-for="game in games"
        :key="game.name"
        :game="game"
      />
    </ul>
    <AddGame :on-add="handleAdd"/>
  </section>
</template>

<script>
import Game from './Game';
import AddGame from './AddGame';
import { getGames, addGame } from '../services/api';

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
    }
  }
};
</script>

<style>

</style>
