<template>
<div id="form-main">
<div id="form-container">
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
    <select v-model="guitarist.guitar_id">
      <option value="1">Fender</option>
      <option value="2">Gibson</option>
      <option value="3">Taylor</option>
      <option value="4">Martin</option>
      <option value="5">PRS</option>
      <option value="6">Yamaha</option>
      <option value="7">Takamine</option>
    </select>
  </label>
  <label>Link to an image of them:
    <input
      required
      id="url"
      placeholder="www.toneclone.biz/frest_of_fury.gif"
      v-model="guitarist.img_url"
    >
    <input type="submit">
  </label>
  </form>
</div>
</div>
</template>
<script>

// Function to initilize the addGuitarist form
const initGuitarist = () => {
  return {
    name: '',
    id: '',
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
#form-main {
  background: rgba(0, 0, 0, .69);
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;

}
#form-container {
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