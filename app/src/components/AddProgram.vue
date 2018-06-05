<template>
  <section>
    <h1>New Program</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Title:
        <input type="text" name="title" placeholder="title" required
          v-model="program.title">
      </label>

      <label>
        Host:
        <input type="text" name="host" placeholder="host" required
          v-model="program.host">
      </label>

      <label>
        Audience Size:
        <input type="number" name="audienceSize" required
          v-model="program.audienceSize">
      </label>

      <label>
        First Aired:
        <input type="text" name="yearStarted" placeholder="year" required
          v-model="program.yearStarted">
      </label>

      <label>
        Airs Daily?:
        <input type="checkbox" name="daily" required
          v-model="program.daily">
      </label>

      <label>
        Description:
        <textarea name="body" rows="8" cols="40" required 
          v-model="program.description"></textarea>
      </label>
      
      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>
const emptyProgram = () => {
  return {
    title: '',
    host: '',
    audienceSize: 0,
    daily: true,
    yearStarted: '',
    description: ''
  };
};
export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      program: emptyProgram()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.program)
        // this fires when save is complete and data added to program array
        .then(() => {
          this.program = emptyProgram();
        });
    }
  }
};
</script>

<style>
.add-neighborhood {
  width: 300px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
}
</style>