<template id="log-template">
  <article>
    <h2>{{ glucoselog.date }} {{ glucoselog.day_id }}</h2>
    <div>
    <p>Changed insulin: {{ glucoselog.changeinsulin }}</p>
    <p>Before Breakfast: {{ glucoselog.beforebreakfast }}</p>
    <p>After Breakfast: {{ glucoselog.afterbreakfast }}</p>
    <p>Before Lunch: {{ glucoselog.beforelunch }}</p>
    <p>After Lunch: {{ glucoselog.afterlunch }}</p>
    <p>Before Dinner: {{ glucoselog.beforedinner }}</p>
    <p>After Dinner: {{ glucoselog.afterdinner }}</p>
    </div>
    <p>
      <button @click="handleClick">remove this log</button>
    </p>
  </article>
</template>

<script>

export default {
  props: [
    'glucoselog',
    'onRemove'
  ],
  methods: {
    handleClick() {
      if(confirm(`Are you sure you want to remove ${this.glucoselog.date}?`)) {
        this.onRemove(this.glucoselog.id);
      }
    }
  }
};
</script>

<style scoped>
article {
  object-fit: contain;
  width: 300px;
  margin: auto;
  margin-bottom: 10px;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

h2 {
  margin: 0;
}

div {
  text-align: left;
  display: inline-block;
}

p {
  line-height: 2px;
  /* text-align: left; */
}
</style>
