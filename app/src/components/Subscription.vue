<template id="subscription-template">
  <div>
    <article v-if="!editing">
      <h3>{{ subscription.name }}</h3>
      <p>Purpose: <em>{{ purpose }}</em></p>
      <p>Monthly Price: {{ subscription.price }}</p>
      <p>Includes ads: <strong>{{ ads }}</strong></p>
      <button v-if="!editing" @click="editing = true">Edit</button>
      <button @click="handleClick">Remove</button>
    </article>
    <SubscriptionForm
      v-else
      label="Update"
      :subscription="subscription"
      :purposes="purposes"
      :onEdit="handleUpdate"
      :onCancel="() => editing = false"
    />
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
        return this.onRemove(this.subscription.id);
      }
    },
    handleUpdate(toUpdate) {
      return this.onUpdate(toUpdate)
        .then(() => {
          this.editing = false;
        });
    }
  }
};
</script>

<style>

</style>
