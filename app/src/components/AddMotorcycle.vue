<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>
        Year:
        <input type="text" name="year" placeholder="Year" required>
      </label>

      <label>
        Make:
        <input type="text" name="make" placeholder="Make" required>
      </label>

      <label>
        Model:
        <input type="text" name="model" placeholder="Model" required>
      </label>

      <label>
        Color:
        <select name="color" required>
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
        <input type="checkbox" name="sold" required>
      </label>
    </form>

  </div>
</template>

<script>

const initMotorcycle = () => {
  return {
    id: Number,
    year: Number,
    make: '',
    model: '',
    color: '',
    sold: Boolean
  };
};

export default {

  props: ['motorcycle']

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
