<template>
  <div class="content">
    <h2>{{ motorcycle.make }}</h2>
    <p>Model: {{ motorcycle.model }}</p>
    <p>Year: {{ motorcycle.year }}</p>
    <p>Color: {{ motorcycle.color }}</p>
    <p v-if="motorcycle.available">Status: FOR SALE!</p>
    <p v-else>Status: Contact us for availability</p>
    <p>Delete:
      <input @click="handleDelete()" type="checkbox" name="delete" v-model="motorcycle.delete">
    </p>
  </div>
</template>

<script>

export default {

  props: {
    motorcycle: Object,
    onRemove: {
      type: Function,
      required: true
    }
  },

  methods: {
    handleDelete() {
      this.onRemove(this.motorcycle);
    }
  }

};
</script>

<style scoped>

</style>
