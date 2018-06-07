<template>
  <li>
      <h2>{{ rapper.name }}</h2>
      <p>From: {{ rapper.born }}</p>
      <p>Studio Albums: {{ rapper.numalbums }}</p>
      <p>Notable albums: {{ rapper.albums }}</p>
      <p>Also known as: {{ rapper.aka }}</p>
      <p>Afilliated with(for better or worse): {{ rapper.affiliates }}</p>
      <p v-if="rapper.dead === false">{{ rapper.name }} is not dead</p>
      <p v-else>{{ rapper.name }} is dead.</p>
      <button
      @click.prevent="handleDeleteSub"
      >Remove</button>
  </li>
</template>

<script>
export default {
  props: {
    rapper: Object,
    onDelete: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleDeleteSub() {
      console.log('this is in rapper', this.rapper)
      this.onDelete(this.rapper);
      }
  }
};
</script>



<style>

</style>
