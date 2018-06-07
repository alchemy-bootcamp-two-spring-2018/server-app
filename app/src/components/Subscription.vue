<template id="subscription-template">
  <article :style="{backgroundColor: subscription.bg_color}">
    <h3 :style="{color: subscription.font_color}">{{ subscription.service }}</h3>
    <p :style="{color: subscription.font_color}">Monthly Price: {{ subscription.price }}</p>
    <p :style="{color: subscription.font_color}">Includes ads: <strong>{{ ads }}</strong></p>
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
