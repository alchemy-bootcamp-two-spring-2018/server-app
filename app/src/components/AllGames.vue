<template>
  <section>
    <h3>All Time Games List</h3>
    <ul class="list">
      <Game
        v-for="game in allGames"
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

export default {
  data() {
    return {
      allGames: [
        { 
          'name': 'CastleVania',
          'system': 'Playstation',
          'year': '1998',
          'top 10': true
        },
        {
          'name': 'Super Metroid',
          'system': 'Super Nintendo',
          'year': '1994',
          'top 10': true
        },
        { 
          'name': 'Mario',
          'system': 'Nintendo',
          'year': '1984',
          'top 10': false
        },
        { 
          'name': 'Legend of Zelda',
          'system': 'Super Nintendo',
          'year': '1996',
          'top 10': true
        },
      ]
    };
  },
  components: {
    Game,
    AddGame,
  },
  methods: {
    handleAdd(game) {
      return this.allGames.push(game);

    }
  }
};
</script>

<style>

</style>
