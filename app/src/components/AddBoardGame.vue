<template>
  <section class="add-board-game">
    <h1>New Board Game</h1>
    <form @submit.prevent="handleSubmit">
      <label>Name:
        <input type="text" name="name" required v-model="boardGame.name">
      </label>
      <label>Year Published:
        <input type="text" name="published" required v-model="boardGame.published">
      </label>
      <label>Category:
        <input type="number" name="published" required v-model.number="boardGame.categoryID">
      </label>
      <label># of Players:
        <input type="number" name="minPlayers" required v-model="boardGame.minPlayers">
        to
        <input type="number" name="minPlayers" required v-model="boardGame.maxPlayers">
        players
      </label>
      <label>Avg. Playing time:
        <input type="number" name="avgPlayingTime" required v-model="boardGame.avgPlayingTime"> minutes
      </label>
      <label>Description:
        <textarea name="description" required v-model="boardGame.description"></textarea>
      </label>
      <label>Owned:
        <input type="checkbox" name="owned" v-model="boardGame.owned">
      </label>
      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>
const initBoardGame = () => {
  return {
    name: '',
    published: '',
    categoryID: '',
    minPlayers: '',
    maxPlayers: '',
    avgPlayingTime: '',
    description: '',
    owned: false
  };
};

export default {
  data() {
    return {
      boardGame: initBoardGame()
    };
  },
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.boardGame)
        .then(() => {
          this.boardGame = initBoardGame();
        });
    }
  }
};
</script>

<style>
.add-board-game {
  width: 300px;
  height: 600px;
  background: purple;
}

form {
  display: flex;
  flex-direction: column;
}

input[type="number"] {
  width: 30px;
}
</style>
