<template>
  <section>
    <h1>Add a New Game</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
        v-model="game.name">
      </label>

      <label>
        System Released On:
        <input type="text" name="system" placeholder="System" required
        v-model="game.system">
      </label>

      <label>
        Year Released:
        <input type="text" name="year" placeholder="Year" required
        v-model="game.year">
      </label>

      <label>
        Completed:
        <input type="checkbox" name="completed" placeholder="completed"
        v-model="game.completed">
      </label>

      <label>
        <button type="submit">Add Game</button>
      </label>
    </form>
  </section>
</template>

<script>
const initGame = () => {
  return {
    name: '',
    system: '',
    year: '',
    completed: false
  };
};

export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      game: initGame()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.game)
        .then(() => {
          this.game = initGame();
        });
    }
  }
};
</script>

<style>

</style>
