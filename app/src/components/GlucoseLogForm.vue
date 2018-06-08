<template id="log-template">
  <section class="add-log">
    <h1>Add Log Component</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Date:
        <input v-model="edit.date" type="date" required pattern="[0-9]{0-9}/[0-9]{0-9}/[0-9]{0-9}"> 
      </label>

      <label>
        Day:
        <select v-model="edit.dayId" required>
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
        <input v-model="edit.changeInsulin" type="checkbox" id="checkbox" :value="true"> {{ edit.changeInsulin }}
      </label>
      
      <label>
        Before Breakfast:
        <input v-model="edit.beforeBreakfast" placeholder="Blood Sugar" type="number" min="0" required>
      </label>
      
      <label>
        After Breakfast:
        <input v-model="edit.afterBreakfast" placeholder="Blood Sugar" type="number" min="0" required>
      </label>

      <label>
        Before Lunch:
        <input v-model="edit.beforeLunch" placeholder="Blood Sugar" type="number" min="0" required>
      </label>

      <label>
        After Lunch:
        <input v-model="edit.afterLunch" placeholder="Blood Sugar" type="number" min="0" required>
      </label>

      <label>
        Before Dinner:
        <input v-model="edit.beforeDinner" placeholder="Blood Sugar" type="number" min="0" required>
      </label>

      <label>
        After Dinner:
        <input v-model="edit.afterDinner" placeholder="Blood Sugar" type="number" min="0" required>
      </label>

      <label>
        <button type="submit">{{ label }}</button>
      </label>
    </form>
  </section>
</template>

<script>
import { getDays } from '../services/api';

const initglucoselog = () => {
  return {
    date: '',
    dayId: '',
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
    glucoselog: Object,
    label: String,
    onEdit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.glucoselog ? Object.assign({}, this.glucoselog) : initglucoselog(),
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
      this.onEdit(this.edit)
      //this fires when save is complete and data added to glucoselogs
        .then(() => {
          //save this next line for ref: 
          //this.glucoselog = initglucoselog();
          this.edit = initglucoselog();
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
