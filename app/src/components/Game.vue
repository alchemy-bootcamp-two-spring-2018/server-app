<template>
  <article>
    <h2>{{ game.name }}</h2>
    <p>System: {{ game.system }}</p>
    <p>Release Year: {{ game.year }}</p>
    <p>Completed: {{ game.completed }}</p>
    <button @click="handleDelete">Delete Game</button>
  </article>
</template>

<script>
export default {
  props: {
    game: Object,
    onDelete: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleDelete() {
      this.onDelete(this.game);
    }
  }
};
</script>

<style>

</style>
