<template>
  <div class="content">
    <article v-if="!editing">
      <h2>{{ motorcycle.make }}</h2>
      <p>{{ motorcycle.type }}</p>
      <p>Model: {{ motorcycle.model }}</p>
      <p>Year: {{ motorcycle.year }}</p>
      <p>Color: {{ motorcycle.color }}</p>
      <p v-if="motorcycle.available">Status: FOR SALE!</p>
      <p v-else>Status: Contact us for availability</p>
      <p>Delete:
        <input @click="handleDelete()" type="checkbox" name="delete">
      </p>
    </article>
    <MotorcycleForm
    v-else
    label="Update"
    :neighborhood="neighborhood"
    :on-edit="onUpdate"
    />
    <button @click="editing = !editing">{{ editing ? 'Cancel' : 'Edit Item' }}</button>
  </div>
</template>

<script>

export default {

  props: ['motorcycle', 'onRemove', 'onUpdate'],

  methods: {
    handleDelete() {
      if(confirm(`Are you sure you want to remove this ${this.motorcycle.make} (${this.motorcycle.model})?`)) {
        this.onRemove(this.motorcycle);
      }
    }
  }

};
</script>

<style scoped>
.content {
  display: flex;
  flex-flow: column nowrap;
  border: 2px solid rgb(7, 255, 7);
}

h2, p {
  margin-left: 20px;
}
</style>
