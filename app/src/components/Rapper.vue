<template>
  <div>
      <h2>{{ rapper.name }}</h2>
      <p>From: {{ rapper.from }}</p>
      <p>Notable albums: {{ rapper.albums }}</p>
      <p>Also known as: {{ rapper.aka }}</p>
      <p>Afilliated with: {{ rapper.affiliates }}</p>
  </div>
</template>

<script>
export default {
  props: ['rapper'],
}
</script>



<style>

</style>
