<template id="amp-template">
  <article>
    <h3>{{ amp.name }}</h3>
    <p>Country of Origin: {{amp.country}}</p>
    <p>Introduced: {{ amp.introduced }}</p>
    <p class="tubes">
      Uses tubes:<template>
      <strong>{{ tubes }}</strong>
    </p>
    
  </article>
</template>
      
<script>
export default {
  props: ['amp'],
  computed: {
    tubes() {
      return this.amp.tubes.toLocalString();
    },
  }
};
</script>
      
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
</style>