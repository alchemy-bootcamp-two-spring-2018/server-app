<template>
    <section>
      <h2>Add a rapper!</h2>
      <form @submit.prevent="handleSubmit">
          <label>
              Name:
              <input type="text"
              v-model="rapper.name"
              >
          </label>
          <label>
              From:
              <input type="text"
              v-model="rapper.born"
              >
          </label>
          <label>
              Total Studio Albums:
              <input type="number"
              v-model="rapper.numalbums"
              >
          </label>
          <label>
              Notable Albums:
              <input type="text"
              v-model="rapper.albums"
              >
          </label>
          <label>
              Nicknames:
              <input type="text"
              v-model="rapper.aka"
              >
          </label>
          <label>
              Affiliates (good or bad!):
              <input type="text"
              v-model="rapper.affiliates"
              >
          </label>
          <label>
              Are they dead?(check here)
              <input type="checkbox" :value="true"
              v-model="rapper.dead"
              >
          </label>
          <label>
              <button type="submit">Submit</button>
          </label>
      </form>
  </section>
</template>

<script>
const initRappers = () => {
  return {
    name: '',
    from: '',
    numalbums: '',
    albums: '',
    aka: '',
    affiliates: '',
    dead: false,
  };
};

export default {

  data() {
    return {
      rapper: initRappers()
    };
  },
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },

  methods: {
    handleSubmit() {
      this.onAdd(this.rapper)
        .then(() => {
          this.rapper = initRappers();
        });
    }
  }

};
</script>

<style>

label {
    display:block;
}

</style>
