<template id="add-location-template">
  <section class="add-location-data">
    <hr>
    <h3>Share your favorite spot to study and code</h3>

    <form @submit.prevent="handleSubmit">

      <label> Location Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="location.name">
      </label>

      <label> Description:
        <input type="textarea" name="description" rows="6" cols="200" placeholder="What makes this a good spot to study and code?" required
          v-model="location.description">
      </label>

      <label> Location:
        <input type="text" name="neighborhood" placeholder="Neighborhood" required
          v-model="location.neighborhood">
      </label>

      <label>Power Outlets Available?</label>
        <input type="checkbox" name="power" placeholder="power" v-model="location.power">
        <label for="checkbox">Yes</label>

      <label> Rate on a scale of 1(meh) to 5(great):
        <input type="number" name="rating" placeholder="" id="rate" required
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
    rating:'',
    power: false
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
      location: initLocation()
    };
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

.add-location-data {
  width: 800px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
}

input {
  padding: 20px;
  min-width: 400px;
  margin-bottom: 10px;
}

#rate {
  min-width: 100px;
}

</style>
