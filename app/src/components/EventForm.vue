<template>
  <section class="event-form">
    <form @submit.prevent="handleSubmit">
      <table>
        <tr>
          <td>Name:</td>
          <td><input type="text" required v-model="edit.name"></td>
        </tr>
        <tr>
          <td>Date:</td>
          <td><input type="date" v-model="edit.date"></td>
        </tr>
        <tr>
          <td>Time:</td>
          <td><input type="time" v-model="edit.time"></td>
        </tr>
        <tr>
          <td>Game:</td>
          <td>
            <select v-model.number="edit.gameID" required>
              <option disabled value="">Please select a game.</option>
              <option v-for="boardGame in boardGames"
              :key="boardGame.id"
              :value="boardGame.id">
              {{ boardGame.name }}
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Guests Allowed?</td>
          <td> Yes <input type="radio" value="true" v-model="edit.guestsAllowed"> No <input type="radio" value="false" v-model="edit.guestsAllowed"></td>
        </tr>
        <tr>
          <td>Message:</td>
          <td><textarea v-model="edit.message"></textarea></td>
        </tr>
      </table>
      
      <button type="submit">{{ label }}</button>
      <button 
        v-if="onCancel"
        @click="onCancel"
        >Cancel
      </button>
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
  align-items: flex-start;
}

table {
  text-align: left;
}

td {
  padding: 15px;
}

input, select {
  font-size: 1.5em;
}

input[type="number"] {
  width: 30px;
}
</style>
