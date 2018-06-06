<template>
  <article>
    <h2>{{ game.name }}</h2>
    <p>System: {{ game.system }}</p>
    <p>Release Year: {{ game.year }}</p>
    <p>Completed: {{ game.completed }}</p>
  </article>
</template>

<script>
export default {
  props: ['game'],
};
</script>

<style>

</style>
