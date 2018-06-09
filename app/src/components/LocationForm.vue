<template>
  <div class="addLocation">
      <h1></h1>
      <form @submit.prevent="handleSubmit">
         <label>
          Name:
          <input type="text" name="name" min="3" placeholder="Name" required
            v-model="edit.name">
        </label>
         <label>
          Type of Climbing:
          <select v-model="edit.climbingstyleID">
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
            v-model="edit.location">
        </label>
        <label>
          Elevation:
          <input type="number" name="elevation" placeholder="Elevation" required
            v-model="edit.elevation">ft
        </label>
        <label>
          Year round climbing?:
          <input type="checkbox" name="year-round" placeholder="false"
            v-model="edit.yearroundclimbing"> {{edit.yearroundclimbing}} 
        </label>
        Description:
        <label>
          <textarea rows="5" cols="40" required
            v-model="edit.description"></textarea>
        </label>
        <label>
          <button type="submit">{{ label }}</button>
          <button
            v-if="onCancel"
            @click="onCancel">
            Cancel
          </button>
        </label>
      </form>
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
    editing: false,
    location: Object,
    label: String,
    climbingStyles: {
      type: Array, 
      required: true
    },
    onEdit: {
      type: Function,
      required: true
    },
    onCancel: Function
  },
  data() {
    return {
      edit: this.location ? Object.assign({}, this.location) : initLocation()
    };
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        .then(() => {
          this.edit = initLocation();
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
    margin-top: 5px;
    margin-bottom: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 20px;
  }
</style>
