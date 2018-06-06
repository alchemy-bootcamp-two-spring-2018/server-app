<template>
  <li>
      <h2>{{ rapper.name }}</h2>
      <p>From: {{ rapper.from }}</p>
      <p>Studio Albums: {{ rapper.numAlbums }}</p>
      <p>Notable albums: {{ rapper.albums }}</p>
      <p>Also known as: {{ rapper.aka }}</p>
      <p>Afilliated with(for better or worse): {{ rapper.affiliates }}</p>
      <p v-if="rapper.dead === false">{{ rapper.name }} is not dead</p>
      <p v-else>{{ rapper.name }} is dead.</p>
  </li>
</template>

<script>
export default {
  props: ['rapper'],
};
</script>



<style>

</style>
