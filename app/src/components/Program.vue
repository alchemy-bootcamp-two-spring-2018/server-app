<template>
  <div>
    <article v-if="!showEditForm">
      <h3>{{ program.title }}</h3>
      <p><strong>Host:</strong> {{ program.host }}</p>
      <p><strong>First aired:</strong> {{ program.yearStarted }}</p>
      <p><strong>Airs daily?</strong> {{ airsDaily }}
      <p><strong>Audience Size:</strong> {{ program.audienceSize }}</p>
      <p><strong>Genre:</strong> {{ program.genre }}</p>
      <p><strong>Description:</strong> {{program.description}}</p>
      <button v-if=!showEditForm v-on:click="showEditForm = true">edit</button>
      <button v-on:click="handleDelete">delete</button>
    </article>
    <ProgramForm 
        v-if="showEditForm" 
        label="Update"
        :program="program" 
        :onFormSubmit="handleUpdate"
        :onCancelEdit="() => showEditForm = false"
    />
  </div>
</template>

<script>
import ProgramForm from './ProgramForm.vue';

export default {
  data() {
    return {
      showEditForm: false
    };
  },
  components: {
    ProgramForm
  },
  props: {
    program: Object,
    onDelete: {
      type: Function,
      required: true
    },
    onUpdate: {
      type: Function,
      required: true
    }
  },
  computed: {
    airsDaily() {
      return this.program.daily === true ? 'yes' : 'no';
    }
  },
  methods: {
    handleDelete() {
      if(confirm(`Are you sure you want to remove ${this.program.title}?`)) {
        return this.onDelete(this.program)
      }
    },
    handleUpdate(editedProgram) {
      return this.onUpdate(editedProgram)
        .then (() => {
          this.showEditForm = false;
        });
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 20px 0 0;
}
article {
    text-align: center;
    max-width: 25%;
    border: solid;
    padding: 20px;
}
</style>