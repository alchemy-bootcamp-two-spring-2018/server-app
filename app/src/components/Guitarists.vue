<template>
<div id="main">
  <h1 id="title">Famous Guitarists</h1>
  <form-guitarist
    :on-add="handleAdd"
  />
  <ul>
    <guitarist 
      v-for="guitar in guitarists"
      :key="guitar.id"
      :guitarist="guitar"
      :on-close="handleClose"
      :on-update="handleUpdate"
    />
  </ul>
</div>
</template>

<script>
import Guitarist from './Guitarist'
import FormGuitarist from './FormGuitarist'
import { getGuitarists,
  addGuitarist,
  removeGuitarist,
  updateGuitarist } from '../services/api';


export default {
  components: {
    Guitarist,
    FormGuitarist,
    removeGuitarist
  },
  data() {
    return {
      guitarists: []
    }
  },
  created() {
    getGuitarists()
      .then(guitarists => {
        console.log('in the created yo', guitarists);
        this.guitarists = guitarists;
      });
  },
  methods: {
    handleAdd(guitarist) {
      return addGuitarist(guitarist)
        .then((res) => {
          guitarist.id = res.id;
          console.log('\n\n\nguitarists\n\n\n', guitarist);
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
    },
    handleUpdate(toUpdate) {
      return updateGuitarist(toUpdate)
        .then(updated => {
          this.guitarists = this.guitarists.map(guitarist => {
            return guitarist.id === updated.id ? updated : guitarist;
          });
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
