<template>
  <section id="subscription-section">
    <h2>Streaming Service Subscriptions</h2>
    <p v-if="!subscriptions">Loading subscriptions...</p>
    <ul v-else class="list">
      <Subscription
        v-for="subscription in subscriptions"
        :key="subscription.service"
        :subscription="subscription"
      />
    </ul>
    <AddSubscription :onAdd="handleAdd"/>
  </section>
</template>

<script>
import Subscription from './Subscription';
import AddSubscription from './AddSubscription';
import { getSubscriptions, addSubscription } from '../services/api';

export default {
  data() {
    return {
      subscriptions: null
    };
  },
  created() {
    getSubscriptions()
      .then(subscriptions => {
        this.subscriptions = subscriptions;
      });
  },
  components: {
    Subscription,
    AddSubscription
  },
  methods: {
    handleAdd(subscription) {
      return addSubscription(subscription)
        .then(saved => {
          this.subscriptions.push(saved);
        });
    }
  }
};
</script>

<style>

</style>
