<template>
    <section>
      <h2>Add a rapper!</h2>
      <form @submit.prevent="handleSubmit">
          <label>
              Name:
              <input type="text"
              v-model="edit.name"
              >
          </label>
          <label>
              From:
              <input type="text"
              v-model="edit.born"
              >
          </label>
          <span>Role:</span>
          <select v-model="edit.position">
						<option
						v-for="position in positions"
						:key="position.id"
						>{{ position.position }}</option>
          </select>
          <label>
              Total Studio Albums:
              <input type="number"
              v-model="edit.numalbums"
              >
          </label>
          <label>
              Notable Albums:
              <input type="text"
              v-model="edit.albums"
              >
          </label>
          <label>
              Nicknames:
              <input type="text"
              v-model="edit.aka"
              >
          </label>
          <label>
              Affiliates (good or bad!):
              <input type="text"
              v-model="edit.affiliates"
              >
          </label>
          <label>
              Are they dead?(check here)
              <input type="checkbox" :value="true"
              v-model="edit.dead"
              >
          </label>
          <label>
              <button type="submit">{{label}}</button>
          </label>
      </form>
  </section>
</template>

<script>

const initRappers = () => {
  return {
    name: '',
    born: '',
    position: '',
    numalbums: '',
    albums: '',
    aka: '',
    affiliates: '',
    dead: false,
  };
};

export default {

  props: {
    rapper: Object,
    label: String,
    positions: Array,
    onEdit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.rapper ? Object.assign({}, this.rapper) : initRappers(),
    };
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        .then(() => {
          this.edit = initRappers();
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
