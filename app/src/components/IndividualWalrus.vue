<template id="individual-walrus-template">
  <article>
    <h3>{{ walrus.name }}</h3>
    <p><strong>Type:</strong> {{ walrus.type }}</p>
    <p><strong>Weight:</strong> {{ walrus.weight }}</p>
    <p>More Info: {{walrus.url}}</p>
    <p>Photo URL: {{walrus.photo_url}}</p>
    <p>A Real Walrus? {{ walrus.fictional }}</p>
    <p><strong>Description:</strong><br/> {{ walrus.description }}</p>
    <button @click="deleteWalrus">Delete this Walrus</button>
  </article>
</template>

<script>
export default {
  props: ['walrus'],
  methods: {
    deleteWalrus() {
      this.onRemove(this.walruses.id);
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
