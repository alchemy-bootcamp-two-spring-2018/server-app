<template>
  <div class="addLocation">
      <h1>Add Location</h1>
      <form @submit.prevent="handleSubmit">
         <label>
          Name:
          <input type="text" name="name" min="3" placeholder="Name" required
            v-model="location.name">
        </label>
         <label>
          Type of Climbing:
          <select v-model="location.climbingstyleID">
            <option value="">Select a type</option>
            <option 
              name="type"
              v-for="Style in climbingStyles"
              :key="Style.id"
              :value="Style.id"> 
              {{Style.type}}
              </option>
          </select>
        </label>
        <label>
          Location:
          <input type="text" name="name" placeholder="Location" required
            v-model="location.location">
        </label>
        <label>
          Elevation:
          <input type="number" name="elevation" placeholder="Elevation" required
            v-model="location.elevation">ft
        </label>
        <label>
          Year round climbing?:
          <input type="checkbox" name="year-round" placeholder="false"
            v-model="location.yearroundclimbing"> {{location.yearroundclimbing}} 
        </label>
        <label>
          Description:
          <input type="text" name="description" maxlenght="200" placeholder="Description" required
            v-model="location.description">
        </label>
        <label>
          <button type="submit">Add to List</button>
        </label>
      </form>
      {{location}}
  </div>
</template>

<script>
const initLocation = () => {
  return {
    name: '',
    climbingstyleID: '',
    location: '',
    elevation: '',
    yearroundclimbing: true,
    description: ''
  };
};
export default {
  props: {
    climbingStyles: {
      type: Array, 
      required: true
    },
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

<style >

  .addLocation {
    background-color: rgba(176, 196, 222, 0.671);
    border-radius: 5px;
    border: solid 1px black;
    width: 90%;
    margin: auto;
    margin-top: 150px;

  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 20px;
  }
</style>
