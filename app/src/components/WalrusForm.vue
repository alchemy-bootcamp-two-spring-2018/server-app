<template id="walrus-template">
  <section class="add-walrus">
    <h2>Add A New Walrus</h2>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="edit.name">
      </label>

      <label>
        Weight:
        <input type="number" name="weight" placeholder="" required
          v-model="edit.weight">
      </label>

      <label>
        Type:
        <input type="text" name="type" placeholder="" required
          v-model="edit.type">
      </label>

      <label class="buttons">
        <input type="radio" name="fictional"  id = "isFictional" value="true" required
          v-model="edit.fictional">
          <label class="buttons" for="isFictional">Fictional</label>
          <input type="radio" name="fictional"  id = "isReal" value="false" label="Real" required
          v-model="edit.fictional">
          <label class="buttons" for="isReal">Real</label>
      </label>

      <label>
        Description:
        <textarea name="body" rows="8" cols="45" required 
          v-model="edit.description"></textarea>
      </label>
      
      <label>
        <button type="submit">{{ label }}</button>
      </label>
    </form>
    {{ edit }}
  </section>
</template>

<script>
import { getTypes } from '..services/api';

const initWalrus = () => {
  return {
    name: '',
    weight: '',
    type: '',
    url: '',
    photo_url: '',
    fictional: 'false',
    description: ''
  };
};
export default {
  props: {
    walrus: Object,
    label: String,
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.walrus ? Object.assign({}, this.walrus) : initWalrus(),
      types: []
    };
  },
  created() {
    getTypes().then(types => {
      this.types = types;
    });
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        // this fires when save is complete and data added to the Walruses array
        .then(() => {
          this.edit = initWalrus();
        });
    }
  }
};
</script>

<style>
h2 {
  font-family: 'Chewy', cursive; 
  text-align: center;
  font-size: 1.9em;
}
.add-walrus {
  border: 1px solid black;
  background-color: rgba(255, 255, 255, .5);
  border-radius: 12px;
  padding: 20px;
  width: 300px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
}
input {
  font-size: 20px;
}
label.buttons {
  display: inline;
  padding-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
