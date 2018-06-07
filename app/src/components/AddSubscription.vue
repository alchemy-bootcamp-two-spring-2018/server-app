<template id="subscription-template">
  <section class="add-subscription">
    <h1>New Subscription</h1>
    <form @submit.prevent="handleSubmit">
      <label class="input-row">
        Name:
        <input type="text" name="name" required
        v-model="subscription.name">
      </label>

      <label class="input-row">
        Price:
        <input type="number" name="price" required
        v-model="subscription.price">
      </label>

      <label class="input-row">
        Has ads:
        <section class="input-small">
          <input type="radio" id="true" :value="true" required
          v-model="subscription.ads">
          <label for="true">Yes</label>
        </section>
        <section class="input-small">
          <input type="radio" id="false" :value="false" required
          v-model="subscription.ads">
          <label for="false">No</label>
        </section>
      </label>

      <label class="input-button">
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>
const initSubscription = () => {
  return {
    name: '',
    purpose_id: '',
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
