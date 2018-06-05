<template>
<section>
  <h2>Musicians Favorite Instrument Amplifiers</h2>
  <p v-if="!amps">Loading neighborhoods...</p>
  <ul v-else class="list">
    <Amp
      v-for="amp in amps"
      :key="amp.name"
      :amp="amp"
    />
  </ul>
</section>
</template>

<script>
import Amp from './Amp';

import { getAmps } from '../services/api';

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