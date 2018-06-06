<template id="log-template">
  <section>
    <h1>Add Log Component</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Date:
        <input v-model="glucoseLog.date" type="date" required>
      </label>

      <label>
        Day:
        <input v-model="glucoseLog.day" placeholder="Day" required>
      </label>

      <label for="checkbox">
        Changed Insulin?:
        <input v-model="glucoseLog.changeInsulin" type="checkbox" id="checkbox"> {{ glucoseLog.changeInsulin }}
      </label>
      
      <label>
        Before Breakfast:
        <input v-model="glucoseLog.beforeBreakfast" placeholder="Before Breakfast" type="number" min="0" required>
      </label>
      
      <label>
        After Breakfast:
        <input v-model="glucoseLog.afterBreakfast" placeholder="After Breakfast" type="number" min="0" required>
      </label>

      <label>
        Before Lunch:
        <input v-model="glucoseLog.beforeLunch" placeholder="Before Lunch" type="number" min="0" required>
      </label>

      <label>
        After Lunch:
        <input v-model="glucoseLog.afterLunch" placeholder="After Lunch" type="number" min="0" required>
      </label>

      <label>
        Before Dinner:
        <input v-model="glucoseLog.beforeDinner" placeholder="Before Dinner" type="number" min="0" required>
      </label>

      <label>
        After Dinner:
        <input v-model="glucoseLog.afterDinner" placeholder="After Dinner" type="number" min="0" required>
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
    date: '',
    day: '',
    changeInsulin: false,
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
      glucoseLog: initGlucoseLog()
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
