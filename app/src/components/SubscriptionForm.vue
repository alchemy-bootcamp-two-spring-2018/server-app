<template id="subscription-template">
  <section class="add-subscription">
    <form @submit.prevent="handleSubmit">
      <label class="input-row">
        Name:
        <input type="text" name="name" required
        v-model="edit.name">
      </label>

      <label class="input-row">
        Purpose:
        <select v-model.number="edit.purposeId" required>
          <option disabled value="">Please select a purpose</option>
          <option
            v-for="purpose in purposes"
            :key="purpose.id"
            :value="purpose.id">
            {{purpose.name}}
          </option>
        </select>
      </label>

      <label class="input-row">
        Price:
        <input type="number" name="price" required
        v-model.number="edit.price">
      </label>

      <label class="input-row">
        Has ads:
        <section class="input-small">
          <input type="radio" id="true" :value="true" required
          v-model="edit.ads">
          <label for="true">Yes</label>
        </section>
        <section class="input-small">
          <input type="radio" id="false" :value="false" required
          v-model="edit.ads">
          <label for="false">No</label>
        </section>
      </label>

      <label class="input-button">
        <button type="submit">{{ label }}</button>
        <button
          v-if="onCancel"
          @click="onCancel">
          Cancel
        </button>
      </label>
    </form>
  </section>
</template>

<script>
const initSubscription = () => {
  return {
    name: '',
    purposeId: '',
    price: '',
    ads: ''
  };
};
export default {
  props: {
    subscription: Object,
    purposes: Array,
    label: String,
    onEdit: {
      type: Function,
      required: true
    },
    onCancel: Function
  },
  data() {
    return {
      edit: this.subscription ? Object.assign({}, this.subscription) : initSubscription()
    };
  },
  methods: {
    handleSubmit() {
      return this.onEdit(this.edit)
        .then(() => {
          this.edit = initSubscription();
        });
    }
  }
};
</script>

<style>

</style>
