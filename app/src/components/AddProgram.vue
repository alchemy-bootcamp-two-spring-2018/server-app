<template>
  <section class="add-program">
    <h1>New Program</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        <strong>Title: </strong>
        <input type="text" name="title" placeholder="title" required
          v-model="program.title">
      </label>

      <label>
        <strong>Host: </strong>
        <input type="text" name="host" placeholder="host" required
          v-model="program.host">
      </label>

      <label>
        <strong>Audience Size: </strong>
        <input type="number" name="audienceSize" step="10000" required
          v-model="program.audienceSize">
      </label>

      <label>
        <strong>First Aired: </strong>
        <input type="text" name="yearStarted" placeholder="year" required
          v-model="program.yearStarted">
      </label>

      <label>
        <strong>Airs Daily? </strong>
        <input type="checkbox" name="daily"
          v-model="program.daily"> {{ program.daily }}
      </label>

      <label>
        <strong>Genre: </strong>
        <select v-model.number="program.genreId" required>
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
        <strong>Description: </strong>
        <textarea name="body" rows="8" cols="40" required 
          v-model="program.description"></textarea>
      </label>
      
      <label>
        <button type="submit">Add</button>
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
    yearStarted: '',
    genre: '',
    genreId: 0,
    description: ''
  };
};
export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      program: emptyProgram(),
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
      this.onAdd(this.program)
        // this fires when save is complete and data added to program array
        .then(() => {
          this.program = emptyProgram();
        });
    }
  }
};
</script>

<style>
.add-program {
  width: 300px;
  text-align: left;
  margin: auto;
}
label {
  font-weight: strong;
  display: block;
}
</style>