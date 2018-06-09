<template>
<div>
  <div class="events-list" >
    <section class="new-event">
      <transition name="slide-up">
        <h1 v-if="!creating && !viewing">GAMEPLAN</h1>
        
      </transition>
      <hr>
      <h2 @click="creating = !creating">Create a New Event</h2>
      <h2 @click="viewing = ! viewing">View Events</h2>
      <transition name="slide-fade">
        <EventForm 
          v-if="creating"
          :onEdit="handleAdd"
          label="Create"
          :boardGames="boardGames"
        />
      </transition>
    </section>
    <section class="view-event">
      <Event
        v-for="event in events"
        :key="event.id"
        :event="event"
        :boardGames="boardGames"
        :onDelete="handleDelete"
        :onUpdate="handleUpdate"
      />
    </section>
  </div>
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
  getBoardGames
} from '../services/api';

export default {
  data() {
    return {
      events: null,
      boardGames: null,
      creating: false,
      viewing: false
    };
  },
  created() {
    getEvents().then(events => {
      this.events = events;
    });
    getBoardGames().then(boardGames => {
      this.boardGames = boardGames;
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

<style scoped>
.events-list {
  display: grid;
  grid-template: 805px / 1fr 1fr;
  grid-template-areas: "events comments"
}

.new-event {
  text-align: center;
}

h1 {
  margin-top: 250px;
  font-weight: 600;
  font-size: 5em;
}

h2 {
  font-family: 'Dosis', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  color: #224D73;
  transition: all 0.3s ease;
}

h2:hover {
  color: #41733F;
  transform: scale(1.1);
}

.slide-fade-enter-active, .slide-fade-leave-active  {
  transition: all .5s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

.slide-up-enter-active, .slide-up-leave-active  {
  transition: all .8s ease;
}

.slide-up-enter, .slide-up-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

</style>
