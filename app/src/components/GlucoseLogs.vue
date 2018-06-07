<template>
  <section>
    <h2>Daily Blood Glucose Log</h2>
    <ul class="list">
      <GlucoseLog
        v-for="glucoseLog in glucoseLogs"
        :key="glucoseLog.date"
        :glucoseLog = "glucoseLog"
      />
    </ul>
    <AddGlucoseLog :on-add="handleAdd"/>
  </section>
</template>

<script>
import GlucoseLog from './GlucoseLog';
import AddGlucoseLog from './AddGlucoseLog.vue';
import { getGlucoseLogs, addGlucoseLog } from '../services/api';

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
ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

</style>

