<template id="walrus-template">
  <section class="add-walrus">
    <h1>Add A New Walrus</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="walruses.name">
      </label>

      <label>
        Weight:
        <input type="number" name="weight" placeholder="" required
          v-model="walruses.weight">
      </label>

      <label>
        Type:
        <input type="text" name="type" placeholder="" required
          v-model="walruses.type">
      </label>

      <label>
        Founded:
        <input type="text" name="fictional" placeholder="true" required
          v-model="walruses.fictional">
      </label>

      <label>
        Description:
        <textarea name="body" rows="8" cols="40" required 
          v-model="walruses.description"></textarea>
      </label>
      
      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>
const initWalrus = () => {
  return {
    name: '',
    weight: '',
    type: '',
    fictional: 'false',
    description: ''
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
      walruses: initWalrus()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.walruses)
        // this fires when save is complete and data added to nieghborhoods array
        .then(() => {
          this.walruses = initWalrus();
        });
    }
  }
};
</script>

<style>
.add-walrus {
  width: 300px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
}
</style>
