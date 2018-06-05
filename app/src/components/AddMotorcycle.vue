<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>
        Year:
        <input type="text" name="year" placeholder="year" required>
      </label>

      <label>
        Make:
        <input type="text" name="year" placeholder="year" required>
      </label>

      <label>
        Model:
        <input type="text" name="year" placeholder="year" required>
      </label>

      <label>
        Color:
        <select required>
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

<style>

</style>
