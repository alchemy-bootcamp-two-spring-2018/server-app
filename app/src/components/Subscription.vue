<template id="subscription-template">
  <div>
    <article v-if="!editing">
      <h3>{{ subscription.name }}</h3>
      <p>Purpose: <em>{{ purpose }}</em></p>
      <p>Monthly Price: {{ subscription.price }}</p>
      <p>Includes ads: <strong>{{ ads }}</strong></p>
      <button @click="handleClick">Remove</button>
    </article>
    <SubscriptionForm
      v-else
      label="Update"
      :subscription="subscription"
      :purposes="purposes"
      :onEdit="onUpdate"
    />
      <button @click="editing = !editing">{{ editing ? 'Cancel' : 'Edit' }}</button>
  </div>
</template>

<script>
import SubscriptionForm from './SubscriptionForm';

export default {
  data() {
    return {
      editing: false
    };
  },
  components: {
    SubscriptionForm
  },
  props: [
    'subscription',
    'purposes',
    'onRemove',
    'onUpdate'
  ],
  computed: {
    ads() {
      return this.subscription.ads === false ? 'No' : 'Yes';
    },
    purpose() {
      if(!this.purposes) return null;
      const purpose = this.purposes.find(q => q.id === this.subscription.purposeId);
      return purpose ? `${purpose.name}` : 'Unknown';
    }
  },
  methods: {
    handleClick() {
      if(confirm(`Are you sure you want to remove ${this.subscription.name}?`)) {
        this.onRemove(this.subscription.id);
      }
    }
  }
};
</script>

<style>

</style>
