<template>
  <section>
    <h3>{{character.name}}</h3>
    <p>From {{character.universe}}</p>
    <p>Difficulty: {{character.difficulty}}</p>

  </section>
</template>

<script>
export default {
  props: ['character']
};
</script>
