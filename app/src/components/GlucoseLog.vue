<template id="log-template">
  <article>
    <h2>{{ glucoseLog.date }} {{ glucoseLog.day }}</h2>
    <div>
    <p>Changed insulin?: {{ glucoseLog.changeInsulin }}</p>
    <p>Before Breakfast: {{ glucoseLog.beforeBreakfast }}</p>
    <p>After Breakfast: {{ glucoseLog.afterBreakfast }}</p>
    <p>Before Lunch: {{ glucoseLog.beforeLunch }}</p>
    <p>After Lunch: {{ glucoseLog.afterLunch }}</p>
    <p>Before Dinner: {{ glucoseLog.beforeDinner }}</p>
    <p>After Dinner: {{ glucoseLog.afterDinner }}</p>
    </div>
  </article>
</template>

<script>

export default {
  props: ['glucoseLog'],
  //add computed data here?
}
</script>

<style scoped>
article {
  object-fit: contain;
  width: 300px;
  margin: auto;
  margin-bottom: 10px;
  text-align: center;
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
