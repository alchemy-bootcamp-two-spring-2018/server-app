<template id="fruit-template">
  <section class="add-fruit">
    <h1>Add Fruit</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="edit.name">
      </label>

      <label>
        Classification:
        <select v-model.number="edit.classificationId" required>
          <option disabled value="">Please select a classificationt</option>
          <option
            v-for="classification in classifications"
              :key="classification.id"
              :value="classification.id">
              {{classification.classification}}
          </option>
        </select>  
      </label>

      <label>
        Color:
        <input type="text" name="color" placeholder="Color" required
          v-model="edit.color">
      </label>

      <label>
        Skin Edible:
        <input type="text" name="skinedible" placeholder="Skin Edible" required
          v-model="edit.skinedible">
      </label>

      <label>
        Calories:
        <input type="number" name="calories" placeholder="Calories" required
          v-model="edit.calories">
      </label>
      
      <label>
        <button type="submit">{{ label }}</button>
      </label>
    </form>
    {{ edit }}
  </section>
</template>

<script>
import { getClassifications } from '../services/api';

const initFruit = () => {
  return {
    name: '',
    classification: '',
    color: '',
    skinedible: '',
    calories: ''
  };
};
export default {
  props: {
    fruit:Object,
    label: String,
    onEdit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.fruit ? Object.assign({}, this.fruit) : initFruit(),
      classifications: []
    };
  },
  created() {
    getClassifications().then(classifications => {
      this.classifications = classifications;
    });
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        // this fires when save is complete and data added to fruits array
        .then(() => {
          this.edit = initFruit();
        });
    }
  }
};
</script>

<style>
.add-fruit {
  width: 300px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
}
</style>
