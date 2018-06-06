<template id="amp-template">
  <article>
    <h3>Amp Name</h3>
    <p>Country of Origin: </p>
    <p>Introduced: </p>
    <p class="tubes">
      Uses tubes:
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