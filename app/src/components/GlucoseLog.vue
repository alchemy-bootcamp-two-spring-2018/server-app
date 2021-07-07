<template id="log-template">
  <article>
    <h2>{{ glucoseLog.date }} {{ glucoseLog.day }}</h2>
    <div>
    <p>Changed insulin: {{ glucoseLog.changeinsulin }}</p>
    <p>Before Breakfast: {{ glucoseLog.beforebreakfast }}</p>
    <p>After Breakfast: {{ glucoseLog.afterbreakfast }}</p>
    <p>Before Lunch: {{ glucoseLog.beforelunch }}</p>
    <p>After Lunch: {{ glucoseLog.afterlunch }}</p>
    <p>Before Dinner: {{ glucoseLog.beforedinner }}</p>
    <p>After Dinner: {{ glucoseLog.afterdinner }}</p>
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
