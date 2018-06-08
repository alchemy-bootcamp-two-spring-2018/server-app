<template>
  <div class="content">
    <article v-if="!editing">
      <div class="content-list">
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
      </div>
    </article>
    <MotorcycleForm
    v-else
    label="Update"
    :motorcycle="motorcycle"
    :on-edit="onUpdate"
    />
    <button @click="editing = !editing">{{ editing ? 'Cancel' : 'Edit Item' }}</button>
  </div>
</template>

<script>
import MotorcycleForm from './MotorcycleForm';

export default {

  data() {
    return {
      editing: false
    };
  },

  props: ['motorcycle', 'onRemove', 'onUpdate'],

  methods: {
    handleDelete() {
      if(confirm(`Are you sure you want to remove this ${this.motorcycle.make} (${this.motorcycle.model})?`)) {
        this.onRemove(this.motorcycle);
      }
    }
  },

  components: {
    MotorcycleForm
  }

};
</script>

<style scoped>
.content {
  display: flex;
  flex-flow: column nowrap;
  border: 2px solid rgb(179, 75, 75);
  align-items: center;
  margin: 10px;
  font-family: 'Russo One', sans-serif;
}

h2, p {
  margin: 15px;
}

button {
  width: 100px;
  margin: 10px;

}
</style>
