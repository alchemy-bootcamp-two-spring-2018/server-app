<template>
  <section>
    <h2>Add your character</h2>
    <form @submit.prevent="handleSubmit">
      <label>Name: 
        <input type="text" name="name" placeholder="name" required
        v-model="character.name">
      </label>

      <label>Universe: 
        <input type="text" name="universe" placeholder="univerese" required
        v-model="character.universe">
      </label>

      <label>Difficulty from 1 to 10: 
        <input type="number" name="difficulty" placeholder="1-10" required
        v-model="character.difficulty">
      </label>

      <label>Can walljump: 
        <input type="radio" name="walljump" value=true required
        v-model="character.walljump">Yes<br>
        <input type="radio" name="walljump" value=false required
        v-model="character.walljump">No
      </label>

      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>
const initCharacter = () => {
  return {
    name: '',
    univerese: '',
    difficulty: '',
    walljump: ''
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
      character: initCharacter()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.character)
        .then(() => {
          this.character = initCharacter();
        });
    }
  }
};
</script>

