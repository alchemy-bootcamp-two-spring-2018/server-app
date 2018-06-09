<template>
  <section class="event-form">
    <form @submit.prevent="handleSubmit">
      <label>Name:
        <input type="text" required v-model="edit.name">
      </label>
      <label>Date:
        <input type="date" v-model="edit.date">
      </label>
      <label>Time:
        <input type="time" v-model="edit.time">
      </label>
      <label>Game:
        <select v-model.number="edit.gameID" required>
          <option disabled value="">Please select a game.</option>
          <option v-for="boardGame in boardGames"
          :key="boardGame.id"
          :value="boardGame.id">
          {{ boardGame.name }}
          </option>
        </select>
      </label>
      <label>Guests Allowed?
        <input type="checkbox" v-model="edit.guestsAllowed">
      </label>
      <label>Message:
        <textarea v-model="edit.message"></textarea>
      </label>
        <button type="submit">{{ label }}</button>
        <button 
          v-if="onCancel"
          @click="onCancel"
          >Cancel</button>
    </form>
  </section>
</template>

<script>
const initEvent = () => {
  return {
    name: '',
    date: '',
    time: '',
    gameID: '',
    guests_allowed: false,
    message: ''
  };
};

export default {
  data() {
    return {
      edit: this.event ? Object.assign({}, this.event) : initEvent()
    };
  },
  props: {
    event: Object,
    boardGames: Array,
    label: String,
    onEdit: {
      type: Function,
      required: true
    },
    onCancel: Function
  },
  methods: {
    handleSubmit() {
      return this.onEdit(this.edit)
        .then(() => {
          this.edit = initEvent();
        });
    }
  }
};
</script>

<style>
.event-form {
  background: white;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  font-size: 2em;
}

input[type="number"] {
  width: 30px;
}
</style>
