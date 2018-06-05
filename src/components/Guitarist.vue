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
  width: fit-content;
  border: 1px solid black;
  border-radius: 13px;
  padding: 33px;
}
img {
  height: 200px;
  width: auto;
  border-radius: 13px;
}
</style>
