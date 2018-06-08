<template>
<section>
  <img src="../assets/npr.png">
  <p v-if="!programs">Loading list of npr programs...</p>
  <div class="form">
    <AddProgram :onAdd="handleAdd"/>
  </div>
  <div>
    <Program :onDelete="handleDelete"
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
import { getPrograms, addProgram, deleteProgram } from '../services/api';

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
    },
    handleDelete(program) {
      const id = program.programId;
      return deleteProgram(id)
        .then (() => {
          const index = this.programs.findIndex(p => p.programId === id);
          if(index === -1) return;
          this.programs.splice(index, 1);
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