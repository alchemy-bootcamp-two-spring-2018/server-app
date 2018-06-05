<template id="fruit-template">
  <article>
    <h3>{{ fruit.name }}</h3>
    <p>Classification: {{ fruit.classification }}</p>
    <p>Color: {{ fruit.color }}</p>
    <p>Skin Edible: {{fruit.skinEdible}}</p>
    <p>Calories: {{fruit.calories}}</p>
  </article>
</template>

<script>
export default {
  props: ['fruit'],

};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>