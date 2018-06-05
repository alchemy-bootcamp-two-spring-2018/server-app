<template>
<div id="main">
  <h1 id="title">Famous Guitarists</h1>
  <ul>
    <guitarist 
      v-for="guitar in guitarists"
      :key="guitar.name"
      :guitarist="guitar"
    />
  </ul>
  <add-guitarist
    :on-add="handleAdd"
  />
</div>
</template>

<script>
import Guitarist from './Guitarist'
import AddGuitarist from './AddGuitarist'
import { getGuitarists, addGuitarist } from '../services/api';
export default {
  components: {
    Guitarist,
    AddGuitarist
  },
  data() {
    return {
      guitarists: null
    }
  },
  created() {
    getGuitarists()
      .then(guitarists => {
        this.guitarists = guitarists;
      });
  },
  methods: {
    handleAdd(guitarist) {
      return addGuitarist(guitarist)
        .then(data => {
          this.guitarists.push(data);
        });
    }
  }
}
</script>

<style>
#title {
  font-size: 4rem;
}
</style>
