<template>
  <div class="location">
    <button @click="handleDelete">Delete</button>
    <div>
    <h2>{{ location.name }}.</h2>
    
    <p><strong>Location: {{ location.location }}</strong></p>
    <p><strong>Climbing Type: {{ climbingStyle }}</strong></p>
    <p><strong>Elevation: {{ location.elevation }}ft.</strong></p>
    <p v-if="location.yearroundclimbing == true"><strong>Year Round Climbing</strong></p>
    <p v-if="location.yearroundclimbing !== true"><strong>Seasonal Climbing</strong></p>

    <p id="description">{{location.description}}</p>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    climbingStyles: {
      type: Array,
      required: true
    },
    location: {
      type: Object
    },
    onDelete: {
      type: Function,
      required: true
    }
  },
  computed: {
    climbingStyle() {
      if(!this.climbingStyles) return null;
      const climbingStyle = this.climbingStyles.find(q => q.id === this.location.climbingstyleID);
      console.log(climbingStyle);
      console.log(this.location);

      return climbingStyle ? `${climbingStyle.type}` : 'Unknown';
    }
  },
  methods: {
    handleDelete() {
      this.onDelete(this.location);
      return (this.location.id);
    }
  }
};
</script>

<style>
.location {
  border: solid .5px;
  margin: auto;
  margin-top: 10px;
  width: 95%;
  background-color: rgba(176, 196, 222, 0.671);
  max-height: auto;
  border-radius: 5px;
}
#description {
  width: 85%;
  margin: auto;
  margin-bottom: 10px;
}
p {
  margin: 2px;
}
h2 {
  margin-top: 0px;
  margin-bottom: 2px;
  color: darkslategray;
}
img {
  max-width: 300px;
  margin-top: 15px;
}
</style>
