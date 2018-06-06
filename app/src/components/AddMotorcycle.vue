<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>
        ID:
        <input type="number" name="id" placeholder="ID" required v-model="motorcycle.id">
      </label>
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
        Sold:
        <input type="checkbox" name="sold" v-model="motorcycle.sold">
      </label>

      <label>
        <button type="submit">Add motorcycle</button>
      </label>

    </form>

  </div>
</template>

<script>

const initMotorcycle = () => {
  return {
    id: '',
    year: '',
    make: '',
    model: '',
    color: 'Red',
    sold: false
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
      this.onAdd(this.motorcycle); //added semi-colon while commented out 3 lines below
        // .then(() => {
        //   this.motorcycle = initMotorcycle();
        // });
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
