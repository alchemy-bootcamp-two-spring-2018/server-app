<template>
  <div>
    <h1>Rappers</h1>
  <div id="submit-wrapper">
    <RapperForm
		label = 'Add'
    :on-edit="handleAdd"
    />
  </div>
    <ul>
      <Rapper
      v-for="rapper in rappers"
      :key="rapper.name"
      :rapper="rapper"
      :on-delete="handleDelete"
			:on-update="handleUpdate"
      />
    </ul>
  </div>
</template>

<script>
import Rapper from './Rapper';
import RapperForm from './RapperForm';
import { 
	getRappers, 
	addRappers,
	updateRappers, 
	deleteRappers } from '../services/api';

export default {
  data() {
    return {
      rappers: null
    };
  },
  created() {
    getRappers()
      .then(rappers => {
        this.rappers = rappers;
      });
  },
  components: {
    Rapper,
    RapperForm,
  },
  methods: {
    handleAdd(rapper) {
			(console.log('HERE IS LOG IN RAPPERS', rapper))
      return addRappers(rapper)
      .then(saved => {
        this.rappers.push(saved);
      });
    },
    handleDelete(id) {
      return deleteRappers(id)
				.then(() => {
					const index = this.rappers.findIndex(rapper => rapper.id === id);
					if(index === -1) return;
					this.rappers.splice(index, 1);
				});
			},
		handleUpdate(toUpdate) {
			return updateRappers(toUpdate)
				.then(updated => {
					this.rappers = this.rappers.map(rapper => {
						return rapper.id === updated.id ? updated : rapper;
					});
				});
			}
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#submit-wrapper{
  text-align: left;
}

h1{
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 10px;
}
li {
  display: inline-block;
  margin: 0 30px 0 20px;
  width: 300px;
}
a {
  color: #42b983;
}
</style>
