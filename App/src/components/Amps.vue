<template>
<section>
  <h2>Greatest Guitar Amplifiers</h2>
  <p v-if="!amps">Loading amps...</p>
 
  <ul v-else class="list">
    <Amp
      v-for="amp in amps"
      :key="amp.name"
      :amp="amp"
      :on-remove="handleRemove"
      :on-update="handleUpdate"
    />
  </ul>

  <h3>Add a new amp</h3>
  <AmpForm
    label="Add an amp"
    :on-edit="handleAdd"/>
</section>
</template>

<script>
import Amp from './Amp';
import AmpForm from './AmpForm.vue';
import {
  getAmps,
  addAmp,
  updateAmp,
  removeAmp } from '../services/api';

export default {
  data() {
    return {
      amps: null,
    };
  },
  created() {
    getAmps()
      .then(amps => {
        this.amps = amps;
      });
  },
  components: {
    Amp,
    AmpForm
  },
  methods: {
    handleAdd(amp) {
      return addAmp(amp)
        .then(saved => {
          this.amps.push(saved);
        });
    },
    handleRemove(id) {
      return removeAmp(id)
        .then(() => {
          const index = this.amps.findIndex(amp => amp.id === id);
          if(index === -1) return;
          this.amps.splice(index, 1);
        });
    },
    handleUpdate(toUpdate) {
      return updateAmp(toUpdate)
        .then(updated => {
          this.amps = this.amps.map(amp => {
            return amp.id === updated.id ? updated : amp;
          });
        });
    }
  }
};

</script>

<style>

ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
