<template id="log-template">
  <article>
    <h2>Allo, das ist Log!</h2>
    <h2>{{ glucoseLog.date }}</h2>
    <p>Day: {{ glucoseLog.day }}</p>
    <p>Before Breakfast: {{ glucoseLog.beforeBreakfast }}</p>
    <p>After Breakfast: {{ glucoseLog.afterBreakfast }}</p>
    <p>Before Lunch: {{ glucoseLog.beforeLunch }}</p>
    <p>After Lunch: {{ glucoseLog.afterLunch }}</p>
    <p>Before Dinner: {{ glucoseLog.beforeDinner }}</p>
    <p>After Dinner: {{ glucoseLog.afterDinner }}</p>
  </article>
</template>

<script>

export default {
  props: ['glucoseLog'],
  //add computed data here?
}
</script>

<style>

</style>
