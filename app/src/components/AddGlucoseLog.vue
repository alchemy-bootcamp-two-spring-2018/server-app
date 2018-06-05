<template id="log-template">
  <section>
    <h1>Add Log Component</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Day:
        <input v-model="glucoseLog.day" placeholder="Day" required>
      </label>
      
      <label>
        Before Breakfast:
        <input v-model="glucoseLog.beforeBreakfast" placeholder="Before Breakfast" required>
      </label>
      
      <label>
        After Breakfast:
        <input v-model="glucoseLog.afterBreakfast" placeholder="After Breakfast" required>
      </label>

      <label>
        Before Lunch:
        <input v-model="glucoseLog.beforeLunch" placeholder="Before Lunch" required>
      </label>

      <label>
        After Lunch:
        <input v-model="glucoseLog.afterLunch" placeholder="After Lunch" required>
      </label>

      <label>
        Before Dinner:
        <input v-model="glucoseLog.beforeDinner" placeholder="Before Dinner" required>
      </label>

      <label>
        After Dinner:
        <input v-model="glucoseLog.afterDinner" placeholder="After Dinner" required>
      </label>

      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>

const initGlucoseLog = () => {
  return {
    day: 'Tuesday',
    beforeBreakfast: '',
    afterBreakfast: '',
    beforeLunch: '',
    afterLunch: '',
    beforeDinner: '',
    afterDinner: ''
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
      glucoseLog: initGlucoseLog();
    }
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.glucoseLog)
      //this fires when save is complete and data added to glucoseLogs
      .then(() => {
        this.glucoseLog = initGlucoseLog();
      });
    }
  }
}
</script>

<style>
label {
  display: block;
}
</style>
