<template>
  <section>
    <h2>Daily Blood Glucose Log</h2>
    <ul class="list">
      <GlucoseLog
        v-for="glucoselog in glucoselogs"
        :key="glucoselog.date"
        :glucoselog = "glucoselog"
        :on-remove="handleRemove"
        :on-update="handleUpdate"
      />
    </ul>
    <GlucoseLogForm 
      label="Add"
      :on-edit="handleAdd"
    />
  </section>
</template>

<script>
import GlucoseLog from './GlucoseLog';
import GlucoseLogForm from './GlucoseLogForm.vue';
import { 
  getglucoselogs, 
  addglucoselog,
  updateglucoselog, 
  removeglucoselog, } from '../services/api';

export default {
  data() {
    return {
      glucoselogs: null
    };
  },
  created() {
    getglucoselogs()
      .then(glucoselogs => {
        this.glucoselogs = glucoselogs;
      });
  },
  components: {
    GlucoseLog,
    GlucoseLogForm
  },
  methods: {
    handleAdd(glucoselog) {
      return addglucoselog(glucoselog)
        .then(saved => {
          this.glucoselogs.push(saved);
        });
    },
    handleUpdate(updateLog) {
      return updateglucoselog(updateLog)
        .then(updatedLog => {
          this.glucoselogs = this.glucoselogs.map(glucoselog => {
            return glucoselog.id === updatedLog.id ? updatedLog : glucoselog;
          });
        });
    },
    handleRemove(id) {
      return removeglucoselog(id)
        .then(() => {
          const index = this.glucoselogs.findIndex(glucoselog => glucoselog.id === id);
          if(index === -1) return;
          this.glucoselogs.splice(index, 1);
        });
    }
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

