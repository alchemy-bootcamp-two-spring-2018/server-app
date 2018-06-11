<template>
  <div >

    <div class="event"
      @click="handleSelect"
      v-if="!editing"
    >
      <h1>{{ event.name }}</h1>
      <p>{{ event.date }} @ {{ event.time }}</p>
      <p @click="gameExpanded = !gameExpanded" class="board-game-name">Game: {{ boardGameName }}</p>
      <BoardGame
        v-if="gameExpanded"
        :boardGame="boardGame"
       />
      <p>Max # of Players: {{ players }}</p>
      <p>Guests Allowed? 
        <span v-if="event.guestsAllowed">Yes</span>
        <span v-else>No</span>
      </p>
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
import BoardGame from './BoardGame';
export default {
  data() {
    return {
      editing: false,
      gameExpanded: false
    };
  },
  components: {
    EventForm,
    BoardGame
  },
  computed: {
    boardGameName() {
      if(!this.boardGames) return null;
      const boardGame = this.boardGames.find(g => g.id === this.event.gameID);
      return boardGame ? boardGame.name : 'Unknown';
    },
    players() {
      if(!this.boardGames) return null;
      const boardGame = this.boardGames.find(g => g.id === this.event.gameID);
      return boardGame ? boardGame.players : 'Unknown';
    },
    boardGame() {
      if(!this.boardGames) return null;
      const boardGame = this.boardGames.find(g => g.id === this.event.gameID);
      return boardGame;
    },
  },
  props: [
    'event',
    'boardGames',
    'categories',
    'onUpdate',
    'onDelete',
    'onSelect'
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
    },
    handleSelect() {
      this.onSelect(this.event.id);
    }
  }
};
</script>

<style>
.event {
  margin: 50px;
  padding: 30px;
  background: white;
  transition: all .3s ease;
  border: 1px solid black;
}

.board-game-name {
  cursor: pointer;
}
</style>
