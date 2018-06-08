<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
        v-model="edit.name">
      </label>

      <label>
        Release System:
        <select v-model.number="edit.systemId" required>
          <option disabled value="">Please Select a System</option>
          <option
            v-for="system in systems"
            :key="system.id"
            :value="system.id">
            {{system.name}}
          </option>
        </select>
      </label>

      <label>
        Year Released:
        <input type="number" name="year" placeholder="Year" required
        v-model.number="edit.year">
      </label>

      <label>
        Completed:
        <input type="checkbox" name="completed" placeholder="completed"
        v-model="edit.completed">
      </label>

      <label>
        <button type="submit">{{ label }}</button>
      </label>
    </form>
    {{ edit }}
  </section>
</template>

<script>
import { getSystems } from '../services/api';

const initGame = () => {
  return {
    name: '',
    system: '',
    year: '',
    completed: false
  };
};

export default {
  props: {
    game: Object,
    label: String,
    onEdit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.game ? Object.assign({}, this.game) : initGame(),
      systems: []
    };
  },
  created() {
    getSystems().then(systems => {
      this.systems = systems;
    });
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
      //fires when we save and complete the added data to neighborhoods array
        .then(() => {
          this.edit = initGame();
        });
    }
  }
};
</script>

<style>

</style>
