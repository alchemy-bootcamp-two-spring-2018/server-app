<template>
  <article>
    <h3>{{ program.title }}</h3>
    <p>Host: {{ program.host }}</p>
    <p>First aired: {{ program.yearStarted }}</p>
    <p>Airs daily? {{ program.daily }}
    <p>Audience Size: {{ program.audienceSize }}</p>
    <p>Description:  {{program.description}}</p>
  </article>
</template>

<script>
export default {
  props: ['program'],
  computed: {
    // population() {
    //   return this.neighborhood.population.toLocaleString();
    // },
    // size() {
    //   return this.neighborhood.population > 20000 ? 'big' : 'small';
    // }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>