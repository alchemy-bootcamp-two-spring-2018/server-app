<template id="individual-walrus-template">
  <article>
    <h3>{{ walrus.name }}</h3>
    <p><strong>Type:</strong> {{ walrus.type }}</p>
    <p><strong>Weight:</strong> {{ walrus.weight }}</p>
    <p>A Real Walrus? {{ walrus.fictional }}</p>
    <p><strong>Description:</strong><br/> {{ walrus.description }}</p>
    <button onclick="walrus.deleteWalrus()">Delete this Walrus</button>
  </article>
</template>

<script>
export default {
  props: ['walrus'],
  methods: {
    deleteWalrus() {
      DELETE FROM walruses WHERE id === this.id;
    }
}
};

</script>

<style>
h3 {
  font-family: 'Chewy', cursive;
  font-size: 2.0em;
}
</style>
