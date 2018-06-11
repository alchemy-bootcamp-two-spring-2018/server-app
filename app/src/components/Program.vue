<template>
  <article>
    <h3>{{ program.title }}</h3>
    <p><strong>Host:</strong> {{ program.host }}</p>
    <p><strong>First aired:</strong> {{ program.yearStarted }}</p>
    <p><strong>Airs daily?</strong> {{ airsDaily }}
    <p><strong>Audience Size:</strong> {{ program.audienceSize }}</p>
    <p><strong>Genre:</strong> {{ program.genre }}</p>
    <p><strong>Description:</strong> {{program.description}}</p>
    <button v-on:click="handleDelete">delete</button>
  </article>
</template>

<script>
export default {
  props: {
    program: Object,
    onDelete: {
      type: Function,
      required: true
    }
  },
  computed: {
    airsDaily() {
      return this.program.daily === true ? 'yes' : 'no';
    }
  },
  methods: {
    handleDelete() {
      this.onDelete(this.program);
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 20px 0 0;
}
article {
    text-align: center;
    max-width: 25%;
    border: solid;
    padding: 20px;
}
</style>