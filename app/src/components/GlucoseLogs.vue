<template>
  <section>
    <h2>Daily Blood Glucose Log</h2>
    <ul class="list">
      <GlucoseLog
        v-for="glucoselog in glucoselogs"
        :key="glucoselog.id"
        :glucoselog = "glucoselog"
        :on-remove="handleRemove"
      />
    </ul>
    <AddGlucoseLog 
      :on-add="handleAdd"
      
    />
  </section>
</template>

<script>
import GlucoseLog from './GlucoseLog';
import AddGlucoseLog from './AddGlucoseLog.vue';
import { getglucoselogs, addglucoselog, removeglucoselog } from '../services/api';

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
    AddGlucoseLog
  },
  methods: {
    handleAdd(glucoselog) {
      return addglucoselog(glucoselog)
        .then(saved => {
          this.glucoselogs.push(saved);
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

