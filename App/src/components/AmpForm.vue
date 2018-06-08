<template id="amp-template">
  <section class="add-amp">
    <h1>New Amp</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="name" required
          v-model="edit.name">
      </label>

      <label>
        Country:
        <input type="text" name="country" placeholder="country" required
          v-model="edit.country">
      </label>

      <label>
        Introduced:
        <input type="text" name="introduced" placeholder="introduced" required
          v-model="edit.introduced">
      </label>

      <label>
        Tubes:
        <input type="text" name="tubes" placeholder="tubes" required
          v-model="edit.tubes">
      </label>
      <label>
        <button type="submit">{{ label }}</button>
      </label>
    </form>
    {{ edit }}
  </section>
</template>
        
<script>

const initAmp = () => {
  return {
    name: '',
    country: '',
    introduced: '',
    tubes: '',
  };
};

export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.neighborhood ? Object.assign({}, this.amp) : initAmp(),
    };
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        .then(() => {
          this.amp = initAmp();
        });
    }
  }
};
</script>
        
<style>
.add-amp {
  width:300px;
  text-align: left;
  margin: auto;
}

label {
  display: block;
}
</style>
        