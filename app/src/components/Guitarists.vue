<template>
<div id="main">
  <h1 id="title">Famous Guitarists</h1>
  <add-guitarist
    :on-add="handleAdd"
  />
  <ul>
    <guitarist 
      v-for="guitar in guitarists"
      :key="guitar.id"
      :guitarist="guitar"
      :on-close="handleClose"
    />
  </ul>
</div>
</template>

<script>
import Guitarist from './Guitarist'
import AddGuitarist from './AddGuitarist'
import { getGuitarists, addGuitarist, removeGuitarist } from '../services/api';
export default {
  components: {
    Guitarist,
    AddGuitarist,
    removeGuitarist
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
        .then((res) => {
            guitarist.id = res.id;
            this.guitarists.push(guitarist);
        });
    },
    handleClose(guitarist) {
      return removeGuitarist(guitarist)
        .then((res) => {
          if(res.removed) {
            this.guitarists.splice(this.guitarists.indexOf(guitarist), 1);
          }
        });
    }
  }
}
</script>

<style>
#main {
  width: 100%;
  }

ul {
  margin: auto;
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around; 
}

#title {
  font-size: 4rem;
  color: seashell;
  border-left: 1px solid black;
  border-right: 1px solid black;
  background: rgba(0, 0, 0, .69);
  margin: auto;
}
</style>
