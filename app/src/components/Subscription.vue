<template id="subscription-template">
  <article>
    <h3>{{ subscription.service }}</h3>
    <p>Monthly Price: {{ subscription.price }}</p>
    <p>Includes ads: <strong>{{ ads }}</strong></p>
    <button @click="handleDelete">Remove</button>
  </article>
</template>

<script>

export default {
  props: {
    subscription: {
      type: Object
    },
    onRemove: {
      type: Function,
      required: true
    }
  },
  computed: {
    ads() {
      return this.subscription.ads === false ? 'No' : 'Yes';
    }
  },
  methods: {
    handleDelete() {
      this.onRemove(this.subscription.id);
      // console.log('woo');
    }
  }
};
</script>

<style>

</style>
