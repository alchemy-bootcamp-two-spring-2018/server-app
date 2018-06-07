<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>
        Type:
        <select name="type" required v-model="motorcycle.mototype_id">
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
        <input type="text" name="make" placeholder="Make" required v-model="motorcycle.make">
      </label>

      <label>
        Model:
        <input type="text" name="model" placeholder="Model" required v-model="motorcycle.model">
      </label>

      <label>
        Year:
        <input type="number" name="year" placeholder="Year" required v-model="motorcycle.year">
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
  border: 2px solid black;
}
label {
  margin: 10px;
}
</style>
