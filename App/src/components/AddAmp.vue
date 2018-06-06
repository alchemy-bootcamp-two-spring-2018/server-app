<template id="amp-template">
  <section class="add-amp">
    <h1>New Amp</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="name" required
          v-model="amp.name">
      </label>

      <label>
        Country:
        <input type="text" name="country" placeholder="country" required
          v-model="amp.country">
      </label>

      <label>
        Introduced:
        <input type="text" name="introduced" placeholder="introduced" required
          v-model="amp.introduced">
      </label>

      <label>
        Tubes:
        <input type="text" name="tubes" placeholder="tubes" required
          v-model="amp.tubes">
      </label>
    </form>
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
      amp:initAmp()
    };
  },
  // methods: {
  //   handleSubmit() {
  //     this.onAdd(this.amp)
  //       .then(() => {
  //         this.amp = initAmp();
  //       });
  //   }
  // }
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
        