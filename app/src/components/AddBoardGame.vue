<template>
  <section class="add-board-game">
    <h1>New Board Game</h1>
    <form @submit.prevent="handleSubmit">
      <label>Name:
        <input type="text" name="name" required v-model="boardGame.name">
      </label>
      <label>Year Published:
        <input type="text" name="published" v-model="boardGame.published">
      </label>
      <label>Category:
        <select v-model.number="boardGame.categoryID" required>
          <option disabled value="">Please select a category.</option>
          <option v-for="category in categories"
          :key="category.id"
          :value="category.id">
          {{ category.category }}
          </option>
        </select>
      </label>
      <label># of Players:
        <input type="number" required v-model="boardGame.minPlayers">
        to
        <input type="number" required v-model="boardGame.maxPlayers">
        players
      </label>
      <label>Avg. Playing time:
        <input type="number" required v-model="boardGame.avgPlayingTime"> minutes
      </label>
      <label>Description:
        <textarea required v-model="boardGame.description"></textarea>
      </label>
      <label>Owned:
        <input type="checkbox" v-model="boardGame.owned">
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
    },
    categories: Array
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
