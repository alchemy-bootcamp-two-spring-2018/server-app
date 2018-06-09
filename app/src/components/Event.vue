<template>
  <div class="event">
    <div v-if="!editing">
      <h1>{{ event.name }}</h1>
      <h2>Date: {{ event.date }}</h2>
      <h2>Time: {{ event.time }}</h2>
      <h4>Game: {{ boardGame }}</h4>
      <p>Guests Allowed? <span v-if="event.guestsAllowed">Yes</span><span v-else>No</span></p>
      <p>{{ event.message }}</p>
      <button v-if="!editing" @click="editing = true">Edit Event</button>
      <button @click="handleClick">Delete Event</button>
    </div>
    <EventForm
      v-else
      label="Update"
      :event="event"
      :boardGames="boardGames"
      :onEdit="handleUpdate"
      :onCancel="() => editing = false"
    />
  </div>
</template>

<script>
import EventForm from './EventForm';
export default {
  data() {
    return {
      editing: false
    };
  },
  components: {
    EventForm
  },
  computed: {
    boardGame() {
      if(!this.boardGames) return null;
      const boardGame = this.boardGames.find(g => g.id === this.event.gameID);
      return boardGame ? boardGame.name : 'Unknown';
    }
  },
  props: [
    'event',
    'boardGames',
    'categories',
    'onUpdate',
    'onDelete'
  ],
  methods: {
    handleClick() {
      if(confirm(`Are you sure you want to delete ${ this.event.name }?`)) {
        this.onDelete(this.event.id);
      }
    },
    handleUpdate(toUpdate) {
      return this.onUpdate(toUpdate)
        .then(() => {
          this.editing = false;
        });
    }
  }
};
</script>

<style>
.event {
  margin: 10px auto;
  padding: 15px;
}
</style>
