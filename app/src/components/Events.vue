<template>
  <div class="events-list" >
    <Event
      v-for="event in events"
      :key="event.id"
      :event="event"
      :boardGames="boardGames"
      :onDelete="handleDelete"
      :onUpdate="handleUpdate"
    />
    <EventForm 
      :onEdit="handleAdd"
      label="Create"
      :boardGames="boardGames"
    />
  </div>
</template>

<script>
import Event from './Event';
import EventForm from './EventForm';
import { 
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
  getCategories,
  getBoardGames
} from '../services/api';

export default {
  data() {
    return {
      events: null,
      boardGames: null,
      categories: null
    };
  },
  created() {
    getEvents().then(events => {
      this.events = events;
    });
    getBoardGames().then(boardGames => {
      this.boardGames = boardGames;
    });
    getCategories().then(categories => {
      this.categories = categories;
    });
  },
  components: {
    Event,
    EventForm
  },
  methods: {
    handleAdd(boardGame) {
      return addEvent(boardGame)
        .then(saved => {
          this.events.push(saved);
        });
    },
    handleDelete(id) {
      return deleteEvent(id)
        .then(this.events = this.events.filter(event=> event.id !== id));
    },
    handleUpdate(toUpdate) {
      return updateEvent(toUpdate)
        .then(updated => {
          this.events = this.events.map(event => {
            return event.id === updated.id ? updated : event;
          });
        });
    }
  }
};
</script>

<style>

</style>
