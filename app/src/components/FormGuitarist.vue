<template>
<div class="form-main">
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
    <label>Name:
      <input
        required
        v-model="guitarist.name"
        placeholder="Shreddy Kruger"    
      >
    </label>
    <label>Are they alive?:
      <select required v-model="guitarist.living">
        <option value="true" selected="selected">Yes!</option>
        <option value="false">No :-(</option>
      </select>
    </label>
    <label>
      Age: 
      <input
        required
        placeholder="69"
        v-model.number="guitarist.age"
      >
    </label>
    <label>Guitar of choice:
      <select
        v-model="guitarist.guitar_id"
      >
        <guitars
          v-for="guitar in guitars"
          :key="guitar.brand"
          :guitar="guitar"
        />
      </select>
    </label>
    <label>Link to an image of them:
      <input
        required
        id="url"
        placeholder="www.tonebone.biz/frets_of_fury.gif"
        v-model="guitarist.img_url"
      >
      <input type="submit">
    </label>
    </form>
  </div>
</div>
</template>
<script>
import Guitars from './Guitars';
// Function to initilize the addGuitarist form
const initGuitarist = () => {
  return {
    name: '',
    guitar_id: '',
    living: '',
    age: '',
    img_url: ''
  }
}
export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    },
    guitars: Array
  },
  components: {
    Guitars
  },
  data() {
    return {
      guitarist: initGuitarist(),
      editing: false
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

<style scoped>
.form-main {
  background: rgba(0, 0, 0, .69);
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

.form-container {
  width: 777px;
  margin: auto;
  color: seashell;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 6px;
}

label {
  margin: 13px;
}

input {
  margin: 13px 33px 0 0;
}

</style>