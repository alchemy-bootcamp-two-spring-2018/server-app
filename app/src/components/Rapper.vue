<template>
  <div>
    <article v-if="!editing">
      <h2>{{ rapper.name }}</h2>
      <p>From: {{ rapper.born }}</p>
      <p>Role: {{ rapper.role }}</p>
      <p>Studio Albums: {{ rapper.numalbums }}</p>
      <p>Notable albums: {{ rapper.albums }}</p>
      <p>Also known as: {{ rapper.aka }}</p>
      <p>Afilliated with(for better or worse): {{ rapper.affiliates }}</p>
      <p v-if="rapper.dead === false">{{ rapper.name }} is not dead</p>
      <p v-else>{{ rapper.name }} is dead.</p>
      <button
      v-if="!editing"
      @click="editing = true"
      >Edit</button>
      <button
      @click.prevent="handleClick"
      >Remove</button>
    </article>
    <RapperForm
      v-else
      label="Update"
      :positions="positions"
      :rapper="rapper"
      :on-edit="handleUpdate"
    />
  </div>
</template>

<script>
import RapperForm from './RapperForm';

export default {
  data() {
    return {
      editing: false
    };
  },
  components: {
    RapperForm
  },
  props: [
    'rapper',
    'onDelete',
    'onUpdate',
    'positions',
  ],

  methods: {
    handleClick() {
      if(confirm('Are you sure you want to remove ' + this.rapper.name + '?')) {
        this.onDelete(this.rapper.id);
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
