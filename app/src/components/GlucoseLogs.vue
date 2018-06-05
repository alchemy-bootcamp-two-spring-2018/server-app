<template>
  <section>
    <h2>Glucose Logs Component</h2>
    <ul>
      <GlucoseLog
        v-for="glucoseLog in glucoseLogs"
        :key="glucoseLog.day"
        :glucoseLog = "glucoseLog"
      />
    </ul>
    <AddGlucoseLog :on-add="handleAdd"/>
  </section>
</template>

<script>
import GlucoseLog from './GlucoseLog';
import AddGlucoseLog from './AddGlucoseLog.vue';
// import { getGlucoseLogs, addGlucoseLog } from '../services/api';

export default {
  data() {
    return {
      glucoseLogs: null
    };
  },
  created() {
    getGlucoseLogs()
      .then(glucoseLogs => {
        this.glucoseLogs = glucoseLogs;
      });
  },
  components: {
    GlucoseLog,
    AddGlucoseLog
  },
  methods: {
    handleAdd(glucoseLog) {
      return addGlucoseLog(glucoseLog)
        .then(saved => {
          this.glucoseLogs.push(saved);
        });
    }
  }
}
</script>

<style>

</style>

