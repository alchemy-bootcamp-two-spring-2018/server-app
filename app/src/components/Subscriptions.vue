<template>
  <section id="subscription-section">
    <h2>Streaming Service Subscriptions</h2>
    <p v-if="!subscriptions">Loading subscriptions...</p>
    <ul v-else class="list">
      <Subscription
        v-for="subscription in subscriptions"
        :key="subscription.name"
        :subscription="subscription"
        :purposes="purposes"
        :onRemove="handleRemove"
        :onUpdate="handleUpdate"
      />
    </ul>
    <h3>Add a new subscription</h3>
    <SubscriptionForm
      label="Add"
      :purposes="purposes"
      :onEdit="handleAdd"/>
  </section>
</template>

<script>
import Subscription from './Subscription';
import SubscriptionForm from './SubscriptionForm';

import {
  getSubscriptions,
  addSubscription,
  updateSubscription,
  removeSubscription,
  getPurposes } from '../services/api';

export default {
  data() {
    return {
      subscriptions: null,
      purposes: null
    };
  },
  created() {
    getSubscriptions()
      .then(subscriptions => {
        this.subscriptions = subscriptions;
      });

    getPurposes()
      .then(purposes => {
        this.purposes = purposes;
      });
  },
  components: {
    Subscription,
    SubscriptionForm
  },
  methods: {
    handleAdd(subscription) {
      return addSubscription(subscription)
        .then(saved => {
          this.subscriptions.push(saved);
        });
    },
    handleRemove(id) {
      return removeSubscription(id)
        .then(() => {
          const index = this.subscriptions.findIndex(subscription => subscription.id === id);
          if(index === -1) return;
          this.subscriptions.splice(index, 1);
        });
    },
    handleUpdate(toUpdate) {
      return updateSubscription(toUpdate)
        .then(updated => {
          this.subscriptions = this.subscriptions.map(subscription => {
            return subscription.id === updated.id ? updated : subscription;
          });
        });
    }
  }
};
</script>

<style>

</style>
