<template id="individual-walrus-template">
  <article>
    <h3>Name: {{ walrus.name }}</h3>
    <p>Type: {{ walrus.type }}</p>
    <p>Weight: {{ walrus.weight }}</p>
    <p>A Real Walrus? {{ walrus.fictional }}</p>
    <p>Description: {{ walrus.description }}</p>
  </article>
</template>

<script>
export default {
  props: ['walrus']
}
</script>
