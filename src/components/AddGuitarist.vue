<template>
<div id="add-main">
  <label>Name: <input v-model="guitarist.name"></label>
  <label>Are they alive?:
    <select v-model="guitarist.living">
      <option value="true">Yes!</option>
      <option value="false">No :-(</option>
    </select>
  </label>
  <label>Age: <input v-model="guitarist.age"></label>
  <label>Link to an image of them: <input v-model="guitarist.img_url"></label>
  <button @click.prevent="handleSubmit">Submit</button>
</div>
</template>
<script>
// Function to initilize the addGuitarist form
const initGuitarist = () => {
  return {
    name: '',
    living: '',
    age: '',
    img_url: 'https://pic.made-in-china.com/4f0j00YMdaNhGWYHuI/Sell-High-Quality-Multi-Head-Electric-Guitar-BLGG-06-.jpg'
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
      guitarist: initGuitarist()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.guitarist)
        .then(() => {
          this.guitarist = initGuitarist();
        });
    }
  }
};
</script>

<style>
</style>