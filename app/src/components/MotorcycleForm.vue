<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>
        Type:
        <select name="type" required v-model="edit.mototype_id">
          <option value="1">Sport</option>
          <option value="2">Touring</option>
          <option value="3">Dual-Sport</option>
          <option value="4">Dirt-Bike</option>
          <option value="5">ATV</option>
          <option value="6">Custom</option>
        </select>
      </label>

      <label>
        Make:
        <input type="text" name="make" placeholder="Make" required v-model="edit.make">
      </label>

      <label>
        Model:
        <input type="text" name="model" placeholder="Model" required v-model="edit.model">
      </label>

      <label>
        Year:
        <input type="number" name="year" placeholder="Year" required v-model="edit.year">
      </label>

      <label>
        Color:
        <select name="color" required v-model="edit.color">
          <option>Red</option>
          <option>Blue</option>
          <option>White</option>
          <option>Black</option>
          <option>Yellow</option>
          <option>Green</option>
          <option>Purple</option>
          <option>Orange</option>
          <option>Custom</option>
        </select>
      </label>

      <label>
        For Sale:
        <input type="checkbox" name="available" v-model="edit.available">
      </label>

      <label>
        <button type="submit">{{ label }}</button>
      </label>

    </form>

  </div>
</template>

<script>
import { getTypes } from '../services/api';

const initMotorcycle = () => {
  return {
    mototype_id: '',
    year: '',
    make: '',
    model: '',
    color: 'Red',
    available: false,
  };
};

export default {
  data() {
    return {
      edit: this.motorcycle ? Object.assign({}, this.motorcycle) : initMotorcycle(),
      types: []
    };
  },
  props: {
    motorcycle: Object,
    label: String,
    onEdit: {
      type: Function,
      required: true
    }
  },

  created() {
    getTypes().then(types => {
      this.types = types;
    });
  },

  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        .then(() => {
          this.edit = initMotorcycle();
        });
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-flow: column nowrap;
  margin-top: 30px;
  margin-left: 50px;
  border: 2px solid black;
}
label {
  margin: 10px;
}
</style>
