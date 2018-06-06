<template>
  <div>
    <h1>Rappers</h1>
  <div id="submit-wrapper">
    <AddRapper
    :on-add="handleAdd"
    />
  </div>
    <ul>
      <Rapper
      v-for="rapper in rappers"
      :key="rapper.name"
      :rapper="rapper"
      />
    </ul>
  </div>
</template>

<script>
import Rapper from './Rapper';
import AddRapper from './AddRapper';
import { getRappers, addRappers } from '../services/api';

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
    AddRapper,
  },
  methods: {
    handleAdd(rapper) {
      return addRappers(rapper)
      .then(saved => {
        this.rappers.push(saved);
      });
    }
  }
}
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
