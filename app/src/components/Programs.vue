<template>
<section>
  <h2>NPR Programs</h2>
  <p v-if="!programs">Loading list of npr programs...</p>
  <div class="form">
    <AddProgram :onAdd="handleAdd"/>
  </div>
  <div>
    <Program
      v-for="program in programs"
      :key="program.title"
      :program="program"
    />
  </div>

</section>
</template>

<script>
import Program from './Program';
import AddProgram from './AddProgram.vue';
import { getPrograms, addProgram } from '../services/api';

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
    Program,
    AddProgram 
  },

  methods: {
    handleAdd(program) {
      return addProgram(program)
        .then(saved => {
          this.programs.push(saved);
        });
    }
  }
};
</script>

<style>

.form {
    float: right;
}

</style>