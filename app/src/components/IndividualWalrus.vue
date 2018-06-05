<template id="individual-walrus-teamplate">
  <article>
    <h3>Name: {{ walruses.name }}</h3>
    <p>Type: {{ walruses.type }}</p>
    <p>Weight: {{ walruses.type }}</p>
    <p>Fictional? {{ walruses.type }}</p>
    <p>Description: {{ walruses.type }}</p>
  </article>
</template>

<script>
export default {
  props: ['walruses']
}
</script>
