<template>
  <section>
    <h2>{{ editing ? 'Edit character' : 'New Challegenger' }}</h2>
    <form @submit.prevent="handleSubmit">
      <label>Name: 
        <input type="text" name="name" required
        v-model="edit.name">
      </label>

      <label>Stage name: 
        <select v-model="edit.stageId" required>
          <option
          v-for="stage in stages"
          :key="stage.id"
          :value="stage.id">
          {{stage.name}}
          </option>
        </select>
      </label>
      <label>Universe: 
        <input type="text" name="universe" required
        v-model="edit.universe">
      </label>

      <label>Difficulty from 1 to 10: 
        <input oninput="this.value=this.value.replace(/[^0-9]/g,'');" max="10" min="1"  type="number" name="difficulty" required
        v-model.number="edit.difficulty">
      </label>

      <label>Can walljump: 
        <input class="radio" type="radio" name="walljump" :value="true" required
        v-model="edit.walljump">Yes
        <input class="radio" type="radio" name="walljump" :value="false" required
        v-model="edit.walljump">No
      </label>

      <button class="button" type="submit"></button>
      <p>{{ label }}</p>
  
    </form>
    <!-- {{ edit }} -->
  </section>
</template>

<script>
import { getStages } from '../services/api';

const initCharacter = () => {
  return {
    name: '',
    universe: '',
    difficulty: '',
    walljump: '',
    stageid: ''
  };
};

export default {
  props: {
    character: Object,
    label: String,
    editing: Boolean,
    onEdit: {
      type: Function,
      required: true
    },
  },

  data() {
    return {
      edit: this.character ? Object.assign({}, this.character) : initCharacter(),
      stages: []
    };
  },

  created() {
    getStages().then(stages => {
      this.stages = stages;
    });
  },

  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        .then(() => {
          this.edit = initCharacter();
        });
    }
  }
};
</script>

<style scoped>
section {
  width: 400px;
  margin: auto;
  color: rgb(202, 182, 0);

}

label {
  display: block;
  margin: 10px;
}

.button {
  color: white;
  border: rgb(7, 7, 78);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: rgb(7, 7, 78);
  background-image: url('./SmashBall.png');
  background-repeat: no-repeat;
}

.button:hover {
  border: rgb(7, 7, 78);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-image: url('./SmashBall.png');
  background-repeat: no-repeat;
  box-shadow: 3px 3px 6px rgba(255, 255, 255, 0.5), -3px -3px 6px rgba(255, 255, 255, 0.5),
  -3px 3px 6px rgba(255, 255, 255, 0.5), 3px -3px 6px rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

p {
  margin: 0 0 5px 0;
}


</style>
