<template id="subscription-template">
  <article>
    <h3>{{ subscription.service }}</h3>
    <p>Monthly Price: {{ subscription.price }}</p>
    <p>Does it have ads? <strong>{{ ads }}</strong></p>
  </article>
</template>

<script>
export default {
  props: ['subscription'],
  computed: {
    ads() {
      return this.subscription.ads === false ? 'No' : 'Yes';
    }
  }
};
</script>

<style>

</style>
