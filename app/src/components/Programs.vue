<template>
<section>
  <div class="form">
    <h3 @click="showAddForm = !showAddForm">Add a new program</h3>
    <ProgramForm 
      v-if="showAddForm"
      label="Add"
      :onFormSubmit="handleAdd"
    />
  </div>
  <div>
    <p v-if="!programs">Loading list of npr programs...</p>
    <Program
      v-for="program in programs"
      :key="program.title"
      :program="program"
      :onUpdate="handleUpdate"
      :onDelete="handleDelete"
    />
  </div>
</section>
</template>

<script>
import Program from './Program';
import ProgramForm from './ProgramForm.vue';
import { getPrograms, addProgram, updateProgram, deleteProgram } from '../services/api';

export default {
  data() {
    return {
      programs: null,
      showAddForm: false
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
    ProgramForm
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
    },
    handleUpdate(editedProgram) {
      return updateProgram(editedProgram)
        .then(updatedResult => {
          this.programs = this.programs.map(program => {
            return program.programId === updatedResult.programID ? updatedResult : program;
          });
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