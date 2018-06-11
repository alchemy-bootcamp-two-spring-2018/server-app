
<template id="add-location-template">
  <section class="add-location-data">
    <hr>
    <h3>Share your favorite spot to study and code</h3>

    <form @submit.prevent="handleSubmit">

      <label> Location Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="edit.name">
      </label>

      <label> Description:
        <input type="textarea" name="description" rows="6" cols="200" placeholder="What makes this a good spot to study and code?" required
          v-model="edit.description">
      </label>

      <label>
        Quadrant:
        <select v-model.number="edit.quadrantId" required>
          <option disabled value="">Please select a quadrant</option>
          <option
            v-for="quadrant in quadrants"
            :key="quadrant.id"
            :value="quadrant.id">
            {{quadrant.name}} 
          </option>
        </select>
      </label>

      <label>Power Outlets Available?</label>
        <input type="checkbox" name="power" placeholder="power" v-model="edit.power">
        <label for="checkbox">Yes</label>

      <label> Rate on a scale of 1(meh) to 5(great):
        <input type="number" name="rating" placeholder="" id="rate" required
          v-model="edit.rating">
      </label>

      <label>
        <button type="submit">Add</button>
      </label>

    </form> 
  </section>
</template>

<script>

///add computed value of quadrant so it displays on list entry
import { getQuadrants } from '../services/api';

const initLocation = () => {
  return {
    name: '',
    description: '',
    quadrant: '',
    rating:'',
    power: false
  };  
};

export default {
  props: {
    location: Object,
    label: String,
    onEdit: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      edit: this.location ? Object.assign({}, this.location) : initLocation(),
      quadrants: []
    };
  },

  created() {
    getQuadrants().then(quadrants => {
      this.quadrants = quadrants;
    });
  },

  methods: {
    handleSubmit() {
      console.log(this.edit);
      this.onEdit(this.edit)
        .then(() => {
          this.edit = initLocation();
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
