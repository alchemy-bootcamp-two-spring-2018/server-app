<template>
  <div class="location">
    <button>Delete</button>
    <div>
    <img :src="location.image">
    <h2>{{location.name}}.</h2>
    <p><strong>Location: {{location.location}}</strong></p>
    <p><strong>Elevation: {{location.elevation}}ft.</strong></p>
    <p><strong>Year Round Climbing: {{location.yearRoundClimbing}}.</strong></p>
    <p id="description">{{location.description}}</p>
  </div>
  </div>
</template>

<script>
export default {

  props: ['location']
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
