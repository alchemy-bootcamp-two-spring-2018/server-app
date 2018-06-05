<template>
<section>
  <h2>NPR Programs</h2>
  <!-- <p v-if="!neighborhoods">Loading neighborhoods...</p> -->
  <!-- <ul v-else class="list"> -->
  <!-- <ul class="list">
    <Program
      v-for="program in programs"
      :key="program.title"
      :program="program"
    />
  </ul> -->
  <!-- <AddNeighborhood :on-add="handleAdd"/> -->
</section>
</template>

<script>
// import Program from './Program';
// import AddNeighborhood from './AddNeighborhood.vue';
// import { getNeighborhoods, addNeighborhood } from '../services/api';
import { getPrograms } from '../services/api';

export default {
  data() {
    return { 
      programs: null
    };
  },
  created() {
     getPrograms()
       .then(programs => {
         this.programs = programs;
       });
  },
  components: { 
    //Program
    // AddNeighborhood 
  },
  methods: {
    // handleAdd(neighborhood) {
    //   return addNeighborhood(neighborhood)
    //     .then(saved => {
    //       this.neighborhoods.push(saved);
    //     });
    // }
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