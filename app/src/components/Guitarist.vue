<template>
<div id="main-guitarist">
  <span class="button-holder">
    <span class="button"
      @click.prevent="editing = !editing"
    >
      ⌨
    </span>
    <span>{{ guitarist.id }}</span>
    <span class="button"
      @click.prevent="handleX"
    >
      ✖
    </span>
  </span>

  <!-- EDITING -->

  <div v-show="editing">
    <form @submit.stop.prevent="handleUpdate">
      <h1>
        <input
          v-model="tempGuitar.name"
        >  
      </h1>
      Image URL:
      <input
        v-model="tempGuitar.img_url"
      >
      <div class="img">
        <img :src="tempGuitar.img_url">
      </div>
      <h3>Guitar of choice:</h3>
      <select v-model="tempGuitar.guitar_id">
        <option disabled :selected="guitarist.guitar_id" value="">Select A Guitar</option>
        <guitars
          v-for="guitar in guitars"
          :key="guitar.id"
          :guitar="guitar"
        />
      </select>
      <p>Living status:
        <select v-model="tempGuitar.living">
          <option value="true">Living</option>
          <option value="false">Dead</option>
        </select>
      </p>
      <p>
        Age:
        <input
          v-model="tempGuitar.age"
        >
      </p>
      <input type="submit">
      <button @click="editing = false">Cancel</button>
    </form>
  </div>

  <!-- DISPLAYING -->

  <div
    v-show="!editing"
    class="guitarist"
  >

    <h1>{{ guitarist.name }}</h1>
    <div class="img">
      <img :src="guitarist.img_url">
    </div>
    <h3><b>Guitar of choice: </b><br> {{ guitarist.guitarBrand }}</h3>
    <p><b>Living status: </b><br>
      <span v-if="guitarist.living">THEY'RE ALIVE!!!</span>
      <span v-else>Sadly, they dedd<br>☹</span>
    </p>
    <p>
      <b>Age: </b> {{ guitarist.age }}
    </p>
  </div>
</div>
</template>

<script>
import Guitars from './Guitars';

export default {
  data() {
    return {
      editing: false,
      tempGuitar: this.guitarist
    }
  },
  props: {
    guitarist: Object,
    guitars: Array,
    onUpdate: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    }
  },
  components: {
    Guitars
  },
  methods: {
    handleX() {
      this.onClose(this.guitarist)
    },
    handleUpdate() {
      this.onUpdate(this.tempGuitar)
        .then(isDone => {
          if(isDone) {
            this.editing = false;
          }
        });
    },
    startEdit() {
      this.editing = true;
      this.tempGuitar = this.guitarist;
    }
  }
}
</script>

<style scoped>
#main-guitarist {
  display: inline-block;
  width: 222px;
  height: 100%;
  border: 1px solid black;
  padding: 13px;
  background: seashell;
  background-image: url('../assets/card.png');
  margin: 6px;
  box-shadow: 1px 1px 3px black;
}
img {
  margin: 0;
  width: 200px;
  height: auto;
  border-top: 2px solid black;
  border-right: 2px solid gray;
  border-bottom: 2px solid gray;
  border-left: 2px solid black;
}
.button-holder {
  display: flex;
  justify-content: space-between;
}
.button {
  background-color: rgba(0, 0, 0, .69);
  display: absolute;
  color: white;
  float: right;
  border-top: 2px solid gray;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid gray;
  padding: 0 3px;
}
.button:active {
  display: absolute;
  float: right;
  border-top: 2px solid black;
  border-right: 2px solid gray;
  border-bottom: 2px solid gray;
  border-left: 2px solid black;
  padding: 0 3px;
  font-weight: bold;
}
.button:hover {
  background-color: red;
  cursor: pointer;
}
h3 {
  font-weight: 100;
}
</style>
