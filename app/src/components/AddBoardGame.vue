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
      <label>Number of Players:
        <input type="number" name="minPlayers" required v-model="boardGame.minPlayers">
        to
        <input type="number" name="minPlayers" required v-model="boardGame.maxPlayers">
        players
      </label>
      <label>Average Playing time:
        <input type="number" name="avgPlayingTime" required v-model="boardGame.avgPlayingTime"> minutes
      </label>
      <label>Description:
        <textarea name="description" required v-model="boardGame.description"></textarea> minutes
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
export default {
  data() {
    return {
      boardGame: {
        name: 'test',
        published: 'test',
        minPlayers: 1,
        maxPlayers: 5,
        avgPlayingTime: '60',
        description: 'What a great game.',
        owned: false
      }
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
      this.onAdd(this.boardGame);
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

input[type="number"] {
  width: 30px;
}
</style>
