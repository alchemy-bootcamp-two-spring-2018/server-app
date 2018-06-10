<template>
<div id="main">
  <h1 id="title">Famous Guitarists</h1>
  <form-guitarist
    :on-add="handleAdd"
    :guitars="guitars"
  />
  <ul>
    <guitarist 
      v-for="guitar in guitarists"
      :key="guitar.id"
      :guitarist="guitar"
      :guitars="guitars"
      :on-close="handleClose"
      :on-update="handleUpdate"
    />
  </ul>
</div>
</template>

<script>
import Guitarist from './Guitarist';
import FormGuitarist from './FormGuitarist';
import {
  getGuitars,
  getGuitarists,
  getCurrent,
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
      guitarists: null,
      guitars: null
    }
  },
  created() {
    getGuitarists()
      .then(guitarists => {
        this.guitarists = guitarists;
      })
    getGuitars()
      .then((res) => {
        this.guitars = res;
      })
  },
  methods: {
    handleAdd(guitarist) {
      return addGuitarist(guitarist)
        .then((res) => {
          getCurrent(res).then(data => this.guitarists.push(data));
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
        .then(res => {
          if(res.updated) {
            getCurrent(toUpdate).then(current => this.guitarists.splice(this.guitarists.findIndex(i => i.id === current.id), 1, current));
            return true;
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
  width: 90%;
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
