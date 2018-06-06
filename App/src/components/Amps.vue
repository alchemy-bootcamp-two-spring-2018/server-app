<template>
<section>
  <h2>Greatest Guitar Amplifiers</h2>
  <!-- <p v-if="!amps">Loading amps...</p> -->
  <ul class="list">
    <Amp
      v-for="amp in amps"
      :key="amp.name"
      :amp="amp"
    />
  </ul>
  <AddAmp :on-add="handleAdd"/>
</section>
</template>

<script>
import Amp from './Amp';
import AddAmp from './AddAmp';
import { getAmps, addAmp } from '../services/api';

export default {
  data() {
    return {
      amps: null
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
    AddAmp
  },
  methods: {
    handleAdd(amp) {
      return addAmp(amp)
        .then(saved => {
          this.amps.push(saved);
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
