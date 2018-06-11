<template>
  <div class="guitarist">
    <span class="close"
      @click.prevent="handleX"
    >
      X
    </span>
    <h1>{{ guitarist.name }}</h1>
    <p>Are they alive?
      <span v-if="guitarist.living">YES!</span>
      <span v-else>Sadly, they are not :-(</span>
    </p>
    <p>
      Age: {{ guitarist.age }}
    </p>
    <div class="img">
      <img :src="guitarist.img_url">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guitarist: Object,
    onClose: {
      type: Function
    }
  },
  methods: {
    handleX() {
      this.onClose(this.guitarist)
    }
  }
}
</script>

<style scoped>
.guitarist {
  display: inline-block;
  width: 150px;
  height: fit-content;
  border: 1px solid black;
  padding: 13px;
  background: seashell;
  background-image: url('../assets/card.png');
  margin: 6px;
  box-shadow: 1px 1px 3px black;
}
img {
  margin: 0;
  width: 150px;
  height: auto;
}

.close {
  background-color: rgba(0, 0, 0, .69);
  display: absolute;
  float: right;
  border-top: 2px solid gray;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid gray;
  padding: 0 3px;
  font-weight: bold;
}
.close:active {
  display: absolute;
  float: right;
  border-top: 2px solid black;
  border-right: 2px solid gray;
  border-bottom: 2px solid gray;
  border-left: 2px solid black;
  padding: 0 3px;
  font-weight: bold;
}
.close:hover {
  background-color: red;
  cursor: pointer;
}

</style>
