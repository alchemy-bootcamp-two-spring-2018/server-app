<template>
  <div class="guitarist">
    <h1>{{ guitarist.name }}</h1>
    <p>Are they alive?
      <span v-if="guitarist.living">YES!</span>
      <span v-else>Sadly, they are not :-(</span>
    </p>
    <p>
      Age: {{ guitarist.age }}
    </p>
    <p>
      <img :src="guitarist.img_url">
    </p>
  </div>
</template>

<script>
export default {
  props: ['guitarist']
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
  height: auto;
  width: 100px;
  border-radius: 13px;
}
</style>
