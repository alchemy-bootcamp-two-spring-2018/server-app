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
          <select v-model="edit.role">
						<option
						v-for="position in positions"
						:key="position.id"
						:value="position.id"
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
			{{ edit }}
  </section>
</template>

<script>
import { getPositions } from '../services/api';

const initRappers = () => {
  return {
    name: '',
		born: '',
		role: '',
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
      onEdit: {
        type: Function,
      	required: true
    }
  },
	data() {
		return {
			edit: this.rapper ? Object.assign({}, this.rapper) : initRappers(),
			positions: []
		};
	},
	created() {
		getPositions().then(positions => {
			this.positions = positions;
		});
	},
  methods: {
    handleSubmit() {
			console.log('HERE IS LOG IN RAPPERFORM', this.edit)
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
