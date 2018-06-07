<template>
  <section>
    <h2>Add your character</h2>
    <form @submit.prevent="handleSubmit">
      <label>Name: 
        <input type="text" name="name" required
        v-model="character.name">
      </label>

      <label>Universe: 
        <input type="text" name="universe" required
        v-model="character.universe">
      </label>

      <label>Difficulty from 1 to 10: 
        <input oninput="this.value=this.value.replace(/[^0-9]/g,'');" max="10" min="1"  type="number" name="difficulty" required
        v-model.number="character.difficulty">
      </label>

      <label>Can walljump: 
        <input class="radio" type="radio" name="walljump" :value="true" required
        v-model="character.walljump">Yes
        <input class="radio" type="radio" name="walljump" :value="false" required
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
    universe: '',
    difficulty: '',
    walljump: ''
  };
};

export default {
  props: {
    onEdit: {
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
      this.onEdit(this.character)
        .then(() => {
          this.character = initCharacter();
        });
    }
  }
};
</script>

<style scoped>
section {
  width: 400px;
  margin: auto;

}

label {
  display: block;
  margin: 10px;
}



</style>
