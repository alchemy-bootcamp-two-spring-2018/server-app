<template>
  <div class="board-game">
    <div v-if="!editing">
      <h1>{{ boardGame.name }} ({{ boardGame.published }})</h1>
      <h2>Category: {{ category }}</h2>
      <h4>{{ boardGame.minPlayers }} to {{ boardGame.maxPlayers }} players / {{ boardGame.avgPlayingTime }} minutes average playing time</h4>
      <p>{{ boardGame.description }}</p>
      <p>Owned: <span v-if="boardGame.owned">Yes</span><span v-else>No</span></p>
      <button @click="handleClick">Remove</button>
    </div>
    <UpdateBoardGame
      v-else
      :boardGame="boardGame"
      :onUpdate="onUpdate"
      :categories="categories"
      @onUpdate="editing = false"
    />
    <button @click="editing = !editing">{{ editing ? 'Cancel' : 'Edit' }}</button>
  </div>
</template>

<script>
import UpdateBoardGame from './UpdateBoardGame';

export default {
  data() {
    return {
      editing: false
    };
  },
  computed: {
    category() {
      if(!this.categories) return null;
      const category = this.categories.find(c => c.id === this.boardGame.categoryID);
      return category ? category.category : 'Unknown';
    }
  },
  props: [
    'boardGame',
    'categories',
    'onUpdate',
    'onDelete'
  ],
  methods: {
    handleClick() {
      if(confirm(`Are you sure you want to delete ${ this.boardGame.name }?`)) {
        this.onDelete(this.boardGame.id);
      }
    }
  },
  components: {
    UpdateBoardGame
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
