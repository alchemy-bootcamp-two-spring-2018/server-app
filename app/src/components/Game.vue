<template>
  <article>
    <h4>{{ game.name }}</h4>
    <p>System: {{ game.system }}</p>
    <p>Release Year: {{ game.year }}</p>
  </article>
</template>

<script>
export default {
  props: ['game'],
};
</script>

<style>

</style>
