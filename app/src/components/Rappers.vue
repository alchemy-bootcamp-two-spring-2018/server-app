<template>
  <div>
    <h1>Rappers</h1>
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
import Rapper from './Rapper'
import AddRapper from './AddRapper'
import { getRappers } from '../services/api'

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
