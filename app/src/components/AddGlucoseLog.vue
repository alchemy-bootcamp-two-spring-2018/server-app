<template id="log-template">
  <section class="add-log">
    <h1>Add Log Component</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Date:
        <input v-model="glucoselog.date" type="date" required pattern="[0-9]{0-9}/[0-9]{0-9}/[0-9]{0-9}"> 
      </label>

      <!-- <label>
        Day:
        <input v-model="glucoselog.day_id" placeholder="Day" required>
      </label> -->

      <label>
        Day:
        <select v-model="glucoselog.day_id" required>
          <option disabled value="">Please select a day</option>
          <option 
            v-for="day in days"
            :key="day.id"
            :value="day.id">
            {{day.name}}
            </option>
        </select>
      </label>

      <label for="checkbox">
        Changed Insulin?:
        <input v-model="glucoselog.changeInsulin" type="checkbox" id="checkbox" :value="true"> {{ glucoselog.changeInsulin }}
      </label>
      
      <label>
        Before Breakfast:
        <input v-model="glucoselog.beforeBreakfast" placeholder="Blood Sugar" type="number" min="0" required>
      </label>
      
      <label>
        After Breakfast:
        <input v-model="glucoselog.afterBreakfast" placeholder="Blood Sugar" type="number" min="0" required>
      </label>

      <label>
        Before Lunch:
        <input v-model="glucoselog.beforeLunch" placeholder="Blood Sugar" type="number" min="0" required>
      </label>

      <label>
        After Lunch:
        <input v-model="glucoselog.afterLunch" placeholder="Blood Sugar" type="number" min="0" required>
      </label>

      <label>
        Before Dinner:
        <input v-model="glucoselog.beforeDinner" placeholder="Blood Sugar" type="number" min="0" required>
      </label>

      <label>
        After Dinner:
        <input v-model="glucoselog.afterDinner" placeholder="Blood Sugar" type="number" min="0" required>
      </label>

      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>
import { getDays } from '../services/api';

const initglucoselog = () => {
  return {
    date: '',
    day_id: '',
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
      glucoselog: initglucoselog(),
      days: []
    };
  },
  created() {
    getDays().then(days => {
      this.days = days;
    });
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.glucoselog)
      //this fires when save is complete and data added to glucoselogs
        .then(() => {
          this.glucoselog = initglucoselog();
        });
    }
  }
};
</script>

<style>
.add-log {
  width: 300px;
  text-align: left;
  margin: auto;
  margin-top: 100px;
  border-radius: 8px;
  border: 2px solid #2c3e50;
  padding: 0px 0px 10px 30px;
}

label {
  display: block;
}
</style>
