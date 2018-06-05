<template id="fruit-template">
  <section class="add-fruit">
    <h1>New Neighborhood</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="neighborhood.name">
      </label>

      <label>
        Classification:
        <input type="text" name="classificatiopn" placeholder="Classification" required
          v-model="fruit.classification">
      </label>

      <label>
        Color:
        <input type="text" name="color" placeholder="Color" required
          v-model="fruit.color">
      </label>

      <label>
        Skin Edible:
        <input type="text" name="skinEdible" placeholder="Skin Edible" required
          v-model="fruit.skinEdible">
      </label>

      <label>
        Calories:
        <input type="text" name="calories" placeholder="Calories" required
          v-model="fruit.calories">
      </label>
      
      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>
const initFruit = () => {
  return {
    name: '',
    classification: '',
    color: '',
    skinEdible: '',
    calories: ''
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
      fruit: initFruit()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.fruit)
        // this fires when save is complete and data added to fruits array
        .then(() => {
          this.fruit = initFruit();
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
