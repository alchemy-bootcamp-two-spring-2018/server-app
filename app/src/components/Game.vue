<template>
  <div>
    <article v-if="!editing">
      <h2>{{ game.name }}</h2>
      <p>System: {{ game.systemName }}</p>
      <p>Release Year: {{ game.year }}</p>
      <p>Completed: {{ game.completed }}</p>
      <p>
      <button @click="handleClick">Delete Game Entry</button>
      </p>
    </article>
    <GameForm
      v-else
      label="Update"
      :game="game"
      :on-edit="onUpdate"
      />
    <button @click="editing = !editing">{{ editing ? 'Cancel' : 'Edit Entry' }}</button>
  </div>
</template>

<script>
import GameForm from './GameForm';

export default {
  data() {
    return {
      editing: false
    };
  },
  components: {
    GameForm
  },
  props: [
    'game',
    'onDelete',
    'onUpdate'
  ],
  methods: {
    handleClick() {
      if(confirm(`Are you sure you want to remove ${this.game.name}?`)) {
        this.onDelete(this.game.id);
      }
    }
  }
};
</script>

<style>

</style>
