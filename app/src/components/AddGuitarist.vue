<template>
<div id="add-main">
<div id="add-container">
  <label>Name:
    <input
      v-model="guitarist.name"
      placeholder="Shreddy Kruger"    
    >
  </label>
  <label>Are they alive?:
    <select v-model="guitarist.living">
      <option value="true" selected="selected">Yes!</option>
      <option value="false">No :-(</option>
    </select>
  </label>
  <label>
    Age: 
    <input
      placeholder="69"
      v-model.number="guitarist.age"
    >
  </label><br>
  <label>Link to an image of them:
    <input
      id="url"
      placeholder="www.toneclone.biz/frest_of_fury.gif"
      v-model="guitarist.img_url"
    >
    <button
      @click.prevent="handleSubmit"
    >
      Submit
    </button>
  </label>
</div>
</div>
</template>
<script>
// Function to initilize the addGuitarist form
const initGuitarist = () => {
  return {
    name: '',
    living: '',
    age: '',
    img_url: ''
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
#add-main {
  background: rgba(0, 0, 0, .69);
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;

}
#add-container {
  width: 777px;
  margin: auto;
  color: seashell;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 6px;
}

label {
  margin: 13px;
}

button {
  margin-left: 33px;
}

#url {
  width: 400px;
}
</style>