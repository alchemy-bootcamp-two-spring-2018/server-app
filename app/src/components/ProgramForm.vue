<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <label>
        <strong>Title: </strong>
        <input type="text" name="title" placeholder="title" required
          v-model="editableProgram.title">
      </label>

      <label>
        <strong>Host: </strong>
        <input type="text" name="host" placeholder="host" required
          v-model="editableProgram.host">
      </label>

      <label>
        <strong>Audience Size: </strong>
        <input type="number" name="audienceSize" step="10000" required
          v-model="editableProgram.audienceSize">
      </label>

      <label>
        <strong>First Aired: </strong>
        <input type="number" name="yearStarted" placeholder="year" required
          v-model="editableProgram.yearStarted">
      </label>

      <label>
        <strong>Airs Daily? </strong>
        <input type="checkbox" name="daily"
          v-model="editableProgram.daily"> {{ editableProgram.daily }}
      </label>

      <label>
        <strong>Genre: </strong>
        <select v-model.number="editableProgram.genreId" required>
          <option disabled value="">Please select a genre</option>
          <option
            v-for="oneGenre in genres"
            :key="oneGenre.id"
            :value="oneGenre.id">
            {{oneGenre.genre}}
          </option>
        </select>
      </label>

      <label>
        <strong>Description: </strong><br>
        <textarea name="body" rows="8" cols="40" required 
          v-model="editableProgram.description"></textarea>
      </label>
      
      <label>
        <button type="submit">{{ label }}</button>
        <!-- show if an onCancelEdit function was passed down (from Program) -->
        <button
          v-if="onCancelEdit" 
          v-on:click="onCancelEdit"
        >Cancel</button>
      </label>
    </form>
  </section>
</template>

<script>
import { getGenres } from '../services/api';

const emptyProgram = () => {
  return {
    title: '',
    host: '',
    audienceSize: 10000,
    daily: true,
    yearStarted: null,
    genre: '',
    genreId: 0,
    description: ''
  };
};
export default {
  props: {
    program: Object,
    label: String,
    onFormSubmit: {
      type: Function,
      required: true
    },
    onCancelEdit: {
      type: Function // not required because it isn't passed down for adds, only edits.
    }
  },
  data() {
    return {
      editableProgram: this.program ? Object.assign({}, this.program) : emptyProgram(),
      genres: []
    };
  },
  created() {
    getGenres().then(genres => {
      this.genres = genres;
    });
  },
  methods: {
    handleSubmit() {
      this.onFormSubmit(this.editableProgram)
        // after form is submitted, reset form
        .then(() => {
          this.editableProgram = emptyProgram();
        });
    }
  }
};
</script>

<style>

label {
  padding: 3px;
  display: block;
}
textarea {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>