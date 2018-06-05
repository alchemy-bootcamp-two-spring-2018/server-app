<template>
  <section class="add-board-game">
    <h1>New Board Game</h1>
    <form @submit.prevent="handleSubmit">
      <label>Name:
        <input type="text" name="name" required v-model="boardGame.name">
      </label>
      <label>
        <button type="submit"></button>
      </label>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      boardGame: {
        name: ''
      }
    }
  },
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleSubmit() {
      this.onAdd()
    }
  }
};
</script>

<style>

</style>
