<template>
  <div class="board-game">
    <h1>{{ boardGame.name }} ({{ boardGame.published }})</h1>
    <h2>Category: {{ boardGame.category }}</h2>
    <h4>{{ boardGame.minPlayers }} to {{ boardGame.maxPlayers }} players / {{ boardGame.avgPlayingTime }} minutes average playing time</h4>
    <p>{{ boardGame.description }}</p>
    <p>Owned: <span v-if="boardGame.owned">Yes</span><span v-else>No</span></p>
    <button @click="handleClick">Remove</button>
  </div>
</template>

<script>
export default {
  props: {
    boardGame: Object,
    onDelete: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.onDelete(this.boardGame);
    }
  }
};
</script>

<style>
.board-game {
  background: lightblue;
  width: 280px;
  height: 600px;
  margin: 10px auto;
  padding: 15px;
}
</style>
