<template id="subscription-template">
  <section class="add-subscription">
    <h1>New Subscription</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="service" required
        v-model="subscription.service">
      </label>

      <label>
        Price:
        <input type="text" name="price" required
        v-model="subscription.price">
      </label>

      <label>
        Has ads:
        <input type="radio" id="true" :value="true" required
        v-model="subscription.ads">
        <label for="true">Yes</label>
        <input type="radio" id="false" :value="false" required
        v-model="subscription.ads">
        <label for="false">No</label>
      </label>

      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>
const initSubscription = () => {
  return {
    service: '',
    price: '',
    ads: ''
  };
};
export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      subscription: initSubscription()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.subscription)
        .then(() => {
          this.subscription = initSubscription();
        });
    }
  }
};
</script>

<style>

</style>
