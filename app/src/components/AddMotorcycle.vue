<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>
        Year:
        <input type="number" name="year" placeholder="Year" required v-model="motorcycle.year">
      </label>

      <label>
        Make:
        <input type="text" name="make" placeholder="Make" required v-model="motorcycle.make">
      </label>

      <label>
        Model:
        <input type="text" name="model" placeholder="Model" required v-model="motorcycle.model">
      </label>

      <label>
        Color:
        <select name="color" required v-model="motorcycle.color">
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
        <input type="checkbox" name="available" v-model="motorcycle.available">
      </label>

      <label>
        <button type="submit">Add Motorcycle</button>
      </label>

    </form>

  </div>
</template>

<script>
const initMotorcycle = () => {
  return {
    year: '',
    make: '',
    model: '',
    color: 'Red',
    available: false,
    delete: false
  };
};

export default {
  data() {
    return {
      motorcycle: initMotorcycle()
    };
  },
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.motorcycle)
        .then(() => {
          this.motorcycle = initMotorcycle();
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
}
label {
  margin: 10px;
}
</style>
