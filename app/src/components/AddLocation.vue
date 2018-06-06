<template id="add-location-template">
  <section class="add-location-data">
    <h3>Share your favorite spot to study and code</h3>
    <form @submit.prevent="handleSubmit">
      <label>
        <input type="text" name="name" placeholder="Name" required
          v-model="location.name">
      </label>

      <label>
        <input type="textarea" name="description" rows="6" cols="200" placeholder="What makes this a good spot to study and code?" required
          v-model="location.description">
      </label>

      <label>
        <input type="text" name="neighborhood" placeholder="Neighborhood" required
          v-model="location.neighborhood">
      </label>
      <!-- add radio buttons -->
      <!-- <label>
        <input type="text" name="power" placeholder="Are outlets available?" required
          v-model="location.power">
      </label> -->
      <label>
        <input type="number" name="rating" placeholder="" required
          v-model="location.rating">
      </label>

      <label>
        <button type="submit">Add</button>
      </label>
    </form>    
  </section>
</template>

<script>

const initLocation = () => {
  return {
    name: '',
    description: '',
    neighborhood: '',
    // power: '',
    rating:''
  };
};

export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.location)
        .then(() => {
          this.location = initLocation();
        });
    }
  }
};
</script>

<style>

</style>
