<template>
  <div>
    <div class="events-list" >
      <div>
        <section class="new-event">
          <transition name="slide-up">
            <h1 v-if="!creating && !viewing">GAMEPLAN</h1>
            
          </transition>
          <hr>
          <h2 @click="creating = !creating, viewing = false">Create a New Event</h2>
          <h2 @click="viewing = !viewing, creating = false">View Events</h2>
          <transition name="slide-fade">
            <EventForm 
              v-if="creating"
              :onEdit="handleCreate"
              label="Create"
              :boardGames="boardGames"
            />
          </transition>
        </section>
        <section class="view-event">
          <Event
            v-if="viewing"
            v-for="event in events"
            :key="event.id"
            :event="event"
            :boardGames="boardGames"
            :onDelete="handleDelete"
            :onUpdate="handleUpdate"
          />
        </section>
      </div>
      <div class="comments-section">
        <Comments
        v-if="selectedEvent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Event from './Event';
import EventForm from './EventForm';
import Comments from './Comments';
import { 
  getEvents,
  createEvent,
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
      viewing: false,
      selectedEvent: true
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
    EventForm,
    Comments
  },
  methods: {
    handleCreate(boardGame) {
      return createEvent(boardGame)
        .then(saved => {
          this.events.unshift(saved);
          this.creating = false;
          this.viewing = true;
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

view-event {
  text-align: center;
}

h1 {
  margin-top: 250px;
  font-size: 5em;
  letter-spacing: 10px;
  font-weight: 400;
}

h2 {
  font-family: 'Crimson Text', serif;
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
