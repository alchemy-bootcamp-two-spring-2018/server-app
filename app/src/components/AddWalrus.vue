<template id="walrus-template">
  <section class="add-walrus">
    <h1>Add A New Walrus</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="walrus.name">
      </label>

      <label>
        Weight:
        <input type="number" name="weight" placeholder="" required
          v-model="walrus.weight">
      </label>

      <label>
        Type:
        <input type="text" name="type" placeholder="" required
          v-model="walrus.type">
      </label>

      <label>
        Fictional or real:<br/>
        <input type="radio" name="fictional"  id = "isFictional" value="false" required
          v-model="walrus.fictional">
          <label for="isFictional">Fictional</label>
          <input type="radio" name="fictional"  id = "isReal" value="true" required
          v-model="walrus.fictional">
          <label for="isReal">Real</label>
      </label>

      <label>
        Description:
        <textarea name="body" rows="8" cols="40" required 
          v-model="walrus.description"></textarea>
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
      walrus: initWalrus()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.walrus)
        // this fires when save is complete and data added to the Walruses array
        .then(() => {
          this.walrus = initWalrus();
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
