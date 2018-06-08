<template>
  <section class="update-board-game">
    <h1>Edit {{ boardGame.name }}</h1>
    <form @submit.prevent="handleUpdate">
      <label>Name:
        <input type="text" required v-model="edit.name">
      </label>
      <label>Year Published:
        <input type="text" name="published" required v-model="edit.published">
      </label>
      <label>Category:
        <select v-model.number="edit.categoryID" required>
          <option disabled value="">Please select a category.</option>
          <option v-for="category in categories"
          :key="category.id"
          :value="category.id">
          {{ category.category }}
          </option>
        </select>
      </label>
      <label># of Players:
        <input type="number" name="minPlayers" required v-model="edit.minPlayers">
        to
        <input type="number" name="maxPlayers" required v-model="edit.maxPlayers">
        players
      </label>
      <label>Avg. Playing time:
        <input type="number" name="avgPlayingTime" required v-model="edit.avgPlayingTime"> minutes
      </label>
      <label>Description:
        <textarea name="description" required v-model="edit.description"></textarea>
      </label>
      <label>Owned:
        <input type="checkbox" name="owned" v-model="edit.owned">
      </label>
      <label>
        <button type="submit">Update</button>
      </label>
    </form>
    
  </section>
</template>

<script>  
export default {
  data() {
    return {
      edit: Object.assign({}, this.boardGame)
    };
  },
  props: {
    boardGame: Object,
    categories: Array,
    onUpdate: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleUpdate() {
      this.onUpdate(this.edit);
    }
  }
};
</script>

<style>

form {
  display: flex;
  flex-direction: column;
}

input[type="number"] {
  width: 60px;
}

</style>
