<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>
        Year:
        <input type="text" name="year" placeholder="Year" required v-model="motorcycle.year">
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
        <input type="checkbox" name="sold" required v-model="motorcycle.sold">
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
