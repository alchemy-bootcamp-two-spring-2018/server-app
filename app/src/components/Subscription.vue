<template id="subscription-template">
  <article>
    <h3>{{ subscription.service }}</h3>
    <p>Monthly Price: {{ subscription.price }}</p>
    <p>Includes ads: <strong>{{ ads }}</strong></p>
    <!-- <button @click="removeSubscription">Remove</button> -->
  </article>
</template>

<script>
// import { removeSubscription } from '../services/api';

export default {
  props: ['subscription'],
  computed: {
    ads() {
      return this.subscription.ads === false ? 'No' : 'Yes';
    }
  },
};
</script>

<style>

</style>
